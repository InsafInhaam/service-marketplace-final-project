const Category = require("../models/Category");
const User = require("../models/User");

const createCategory = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    
    if (!title || !description || !image) {
      return res.status(400).json({ error: "Please provide title, description, and image" });
    }

    const category = new Category({ title, description, image });
    await category.save();

    res.status(201).json({ message: "Category created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getCategoriesWithCounts = async (req, res) => {
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
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    const totalServiceProviders = await User.countDocuments({
      serviceProvided: category.title,
    });
    res.json({ ...category.toObject(), totalServiceProviders });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    console.log(title, description, image);

    // Check if any of the required fields are missing
    // if (!title || !description || !image) {
    //   return res.status(400).json({ error: "Please provide title, description, and image" });
    // }

    // Use findByIdAndUpdate to update the category
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { title, description, image },
      { new: true } // Return the updated category
    );

    // Check if the category was found and updated
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({category, message: "Category updated successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoriesWithCounts,
  getCategoryById,
  updateCategory,
  deleteCategory
};
