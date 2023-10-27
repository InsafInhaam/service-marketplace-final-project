const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// Get all services
router.get("/services", async (req, res) => {
  try {
    const services = await Service.find().populate('subcategory');
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Search services by keyword
router.get("/services/search", async (req, res) => {
  try {
    const keyword = req.query.keyword;

    const services = await Service.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    });

    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get service by ID
router.get("/services/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get services by subcategory ID
router.get('/subcategory/:id', async (req, res) => {
  try {
    const subcategoryId = req.params.id;
    const services = await Service.find({ subcategory: subcategoryId }).populate('subcategory');

    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new service
router.post("/service", async (req, res) => {
  try {
    const { name, description, rating, price, hours, image, subcategory } =
      req.body;

    const newService = new Service({
      name,
      description,
      price,
      hours,
      image,
      subcategory,
    });

    const savedService = await newService.save();

    res
      .status(201)
      .json({ savedService, message: "Service inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a service
router.put("/services/:id", async (req, res) => {
  try {
    const { title, description, price, category, location, duration } =
      req.body;

    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { title, description, price, category, location, duration },
      { new: true }
    );

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete a service
router.delete("/services/:id", async (req, res) => {
  try {
    const service = await Service.findByIdAndRemove(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;