const SubCategory = require("../models/SubCategory");
const Category = require("../models/Category");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const createSubCategory = async (req, res) => {
  try {
    const { title, description, image, category } = req.body;

    // Check if the category exists
    const existingCategory = await Category.findById(category);
    if (!existingCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Create a new subcategory
    const subcategory = new SubCategory({
      title,
      description,
      image,
      category,
    });

    await subcategory.save();

    res.status(201).json({ message: "Sub-Category created successfully" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllSubCategories = async (req, res) => {
  try {
    const subcategories = await SubCategory.find().populate("category");

    res.status(200).json(subcategories);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSubCategoryById = async (req, res) => {
  try {
    const subcategoryId = req.params.id;
    const subcategory = await SubCategory.findById(subcategoryId).populate(
      "category"
    );

    if (!subcategory) {
      return res.status(404).json({ error: "SubCategory not found" });
    }

    res.json(subcategory);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSubCategoriesByCategoryId = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    // Validate if the categoryId is a valid ObjectId
    if (!ObjectId.isValid(categoryId)) {
      return res.status(400).json({ error: "Invalid category ID format" });
    }

    // Find all subcategories that belong to the specified category ID
    const subcategories = await SubCategory.find({
      category: categoryId,
    }).populate("category");

    if (!subcategories || subcategories.length === 0) {
      return res
        .status(404)
        .json({ error: "No subcategories found for the specified category" });
    }

    res.json(subcategories);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getRelatedSubCategories = async (req, res) => {
  try {
    const subcategoryId = req.params.id;

    // Find the subcategory by ID
    const subcategory = await SubCategory.findById(subcategoryId);

    if (!subcategory) {
      return res.status(404).json({ error: "SubCategory not found" });
    }

    // Find all subcategories under the same category
    const categoryId = subcategory.category;
    const relatedSubcategories = await SubCategory.find({
      category: categoryId,
    });

    res.status(200).json({ relatedSubcategories });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateSubCategory = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    const category = await SubCategory.findByIdAndUpdate(
      req.params.id,
      { title, description, image },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ error: "SubCategory not found" });
    }

    res.json(category);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteSubCategory = async (req, res) => {
  try {
    const category = await SubCategory.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ error: "SubCategory not found" });
    }

    res.json({ message: "SubCategory deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  getSubCategoriesByCategoryId,
  getRelatedSubCategories,
  updateSubCategory,
  deleteSubCategory,
};
