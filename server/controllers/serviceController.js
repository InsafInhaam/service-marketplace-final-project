const Service = require("../models/Service");

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate("subcategory");
    res.json(services);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const searchServices = async (req, res) => {
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
    // console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getServicesBySubcategoryId = async (req, res) => {
  try {
    const subcategoryId = req.params.id;
    const services = await Service.find({
      subcategory: subcategoryId,
    }).populate("subcategory");
    res.status(200).json(services);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createService = async (req, res) => {
  try {
    const { name, description, rating, price, hours, image, subcategory } =
      req.body;
    const newService = new Service({
      name,
      description,
      rating,
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
    // console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateService = async (req, res) => {
  try {
    const { name, description, price, subcategory, hours, image } = req.body;
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { name, description, price, subcategory, hours, image },
      { new: true }
    );
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json({ message: "Service updated sucessfully", service });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllServices,
  searchServices,
  getServiceById,
  getServicesBySubcategoryId,
  createService,
  updateService,
  deleteService,
};
