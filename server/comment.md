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
