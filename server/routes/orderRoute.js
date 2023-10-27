const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Labour = require("../models/Labour");
const { authenticateTokenLabour } = require("../middleware/requireLogin");

router.post("/add-order", async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      subTotal,
      discountPercentage,
      totalPrice,
      serviceDate,
      serviceTime,
      latitude,
      longitude,
    } = req.body;

    // Create a new order
    const order = new Order({
      userId,
      cartItems,
      subTotal,
      discountPercentage,
      totalPrice,
      serviceDate,
      serviceTime,
      latitude,
      longitude,
    });

    // Save the order to the database
    const savedOrder = await order.save();

    res.status(201).json({
      success: true,
      order: savedOrder,
      message: "Order added successfully",
    });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().populate("service");
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get eligible labourers within a default radius for all orders with status "order_placed"
// router.get('/eligible-labourers', async (req, res) => {
//   try {
//     const defaultRadius = 10000; // Set the default radius to 10000 meters

//     // Find all orders with status "order_placed"
//     const orders = await Order.find({ status: 'order_placed' });

//     // Check if there are no orders
//     if (orders.length === 0) {
//       return res.status(404).json({ success: false, message: 'No orders with status "order_placed" found' });
//     }

//     // Use the location of the first order as the user's location
//     const { latitude, longitude } = orders[0];

//     // Query for eligible labourers within the default radius
//     const eligibleLabourers = await Labour.find({
//       location: {
//         $near: {
//           $geometry: {
//             type: 'Point',
//             coordinates: [longitude, latitude],
//           },
//           $maxDistance: defaultRadius,
//         },
//       },
//     });

//     res.status(200).json({ success: true, eligibleLabourers });
//   } catch (error) {
//     console.error('Error getting eligible labourers:', error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

// Function to calculate distance between two points on Earth
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers
  return distance;
}

// Function to convert degrees to radians
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// Function to check if two points are within a certain radius
function isWithinRadius(user1, user2, radius) {
  const distance = calculateDistance(
    user1.latitude,
    user1.longitude,
    user2.latitude,
    user2.longitude
  );
  return distance <= radius;
}

// Get eligible labourers within a radius
router.get("/eligible-labourers", async (req, res) => {
  try {
    const radius = 50; // Set the radius to 50 kilometers
    // Find all orders with status "order_placed"
    const orders = await Order.find({ status: "order_placed" });

    // Check if there are no orders
    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({
          success: false,
          message: "No orders with status 'order_placed' found",
        });
    }

    // Find all labourers
    const labourers = await Labour.find();

    // Filter eligible labourers based on the distance
    const eligibleLabourers = [];

    orders.forEach((order) => {
      if (order.latitude && order.longitude) {
        const userLocation = {
          latitude: order.latitude,
          longitude: order.longitude,
        };
        const filteredLabourers = labourers.filter((labourer) =>
          isWithinRadius(
            userLocation,
            { latitude: labourer.latitude, longitude: labourer.longitude },
            radius
          )
        );
        eligibleLabourers.push(...filteredLabourers);
      }
    });

    res.status(200).json({ success: true, eligibleLabourers });
  } catch (error) {
    console.error("Error getting eligible labourers:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get eligible orders for a specific laborer within a radius
router.get("/eligible-orders/:labourerId", async (req, res) => {
  try {
    const radius = 50; // Set the radius to 50 kilometers

    // Find the laborer by ID
    const labourer = await Labour.findById(req.params.labourerId);

    // Check if the laborer exists
    if (!labourer) {
      return res
        .status(404)
        .json({ success: false, message: "Laborer not found" });
    }

    // Get the laborer's location
    const laborerLocation = {
      latitude: labourer.latitude,
      longitude: labourer.longitude,
    };

    // Find all orders with status "order_placed"
    const orders = await Order.find({ status: "order_placed" })
      .populate({
        path: "userId",
      })
      .populate({
        path: "cartItems.itemId",
        model: "Service",
      });

    // Check if there are no orders
    if (orders.length === 0) {
      return res
        .status(404)
        .json({
          success: false,
          message: 'No orders with status "order_placed" found',
        });
    }

    // Filter eligible orders manually
    const eligibleOrders = [];
    orders.forEach((order) => {
      if (order.latitude && order.longitude) {
        const userLocation = {
          latitude: order.latitude,
          longitude: order.longitude,
        };
        const distance = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          laborerLocation.latitude,
          laborerLocation.longitude
        );

        if (distance <= radius) {
          eligibleOrders.push(order);
        }
      }
    });

    res.status(200).json({ success: true, eligibleOrders });
  } catch (error) {
    console.error("Error getting eligible orders:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// labouror to accept an order
router.put("/accept/:orderId", authenticateTokenLabour, async (req, res) => {
  try {
    const orderId = req.params.orderId;

    // Update the order status to 'assigned_to_labourer' and set the labourer field
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status: "assigned_to_labourer", labourer: req.user._id }, // Assuming req.user._id contains the labourer's ID
      { new: true }
    );

    if (!updatedOrder) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, updatedOrder });
  } catch (error) {
    console.error("Error accepting order:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get order by ID
router.get("/orders/:orderId", async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error getting order by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get orders by user ID
router.get("/user/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).populate(
      "cartItems.itemId"
    );
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting orders by user ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to cancel an order
router.put("/cancelOrder/:orderId", async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status: "canceled" },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res
      .status(200)
      .json({ updatedOrder, message: "Order Cancelled successfully" });
  } catch (error) {
    console.error("Error cancelling order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to get orders with status 'assigned_to_labourer' or 'in_progress'
router.get("/in-progress/:labourerId", async (req, res) => {
  try {
    const labourerId = req.params.labourerId;

    // Find orders with status 'assigned_to_labourer' or 'in_progress'
    const ordersInProgress = await Order.find({
      labourer: labourerId,
      status: { $in: ["assigned_to_labourer", "in_progress"] },
    });

    res.status(200).json({ success: true, orders: ordersInProgress });
  } catch (error) {
    console.error("Error getting in-progress orders:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Endpoint to get completed orders
router.get("/completed/:labourerId", async (req, res) => {
  try {
    const labourerId = req.params.labourerId;

    // Find orders with status 'completed'
    const completedOrders = await Order.find({
      labourer: labourerId,
      status: "completed",
    });

    res.status(200).json({ success: true, orders: completedOrders });
  } catch (error) {
    console.error("Error getting completed orders:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;




