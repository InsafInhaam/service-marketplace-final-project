const mongoose = require("mongoose");
const {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  getSubCategoriesByCategoryId,
  getRelatedSubCategories,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subcategoryController");
const SubCategory = require("../models/SubCategory");
const Category = require("../models/Category");

jest.mock("../models/SubCategory");
jest.mock("../models/Category");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("SubCategory Controller", () => {
  // createSubCategory
  it("creates a subcategory successfully", async () => {
    // Mocks
    const mockReq = {
      body: {
        title: "New SubCategory",
        description: "A new subcategory",
        image: "image_url",
        category: new mongoose.Types.ObjectId(),
      },
    };
    const mockRes = {
      status: jest.fn(() => mockRes),
      json: jest.fn(),
    };
    Category.findById.mockResolvedValue(new Category(mockReq.body));
    SubCategory.prototype.save = jest.fn().mockResolvedValue(mockReq.body);

    // Test
    await createSubCategory(mockReq, mockRes);

    expect(SubCategory.prototype.save).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Sub-Category created successfully",
    });
  });

  // getAllSubCategories
  SubCategory.find.mockImplementation(() => ({
    populate: jest.fn().mockReturnThis(),
    exec: jest.fn().mockResolvedValue([]),
  }));

  it("gets all subcategories successfully", async () => {
    // Mocks
    const mockRes = {
      status: jest.fn(() => mockRes),
      json: jest.fn(),
    };

    await getAllSubCategories(null, mockRes);

    expect(SubCategory.find).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(200);
  });

  // getSubCategoryById
  it("gets subcategory by ID successfully", async () => {
    const mockReq = {
      params: { id: new mongoose.Types.ObjectId() },
    };
    const mockRes = {
      status: jest.fn(() => mockRes),
      json: jest.fn(),
    };
    SubCategory.findById.mockResolvedValue(
      new SubCategory({
        title: "SubCategory Title",
        description: "SubCategory Description",
        image: "SubCategory Image",
        category: new mongoose.Types.ObjectId(),
      })
    );

    await getSubCategoryById(mockReq, mockRes);

    expect(SubCategory.findById).toHaveBeenCalledWith(mockReq.params.id);
    expect(mockRes.json).toHaveBeenCalledWith(expect.any(Object));
  });
});
