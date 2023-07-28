const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const User = require("../models/User");

// Create a category
router.post("/categories", async (req, res) => {
  try {
    const { title, description, image } = req.body;

    const category = new Category({ title, description, image });
    await category.save();

    res.status(201).json({ message: "Category created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all categories
router.get("/allcategories", async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(201).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();

    const categoryCounts = await Promise.all(
      categories.map(async (category) => {
        const totalServiceProviders = await User.countDocuments({
          serviceProvided: category.title,
        });

        return {
          ...category.toObject(),
          totalServiceProviders,
        };
      })
    );

    res.json(categoryCounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get a category by ID
router.get("/categories/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    const totalServiceProviders = await User.countDocuments({
      serviceProvided: category.title,
    });

    res.json({   ...category.toObject(),
      totalServiceProviders,});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a category
router.put("/categories/:id", async (req, res) => {
  try {
    const { title, description, image } = req.body;

    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { title, description, image },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a category
router.delete("/deleteCategory/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
