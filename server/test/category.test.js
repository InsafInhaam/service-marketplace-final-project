const {
  createCategory,
  getAllCategories,
  getCategoriesWithCounts
} = require("../controllers/categoryController");
const Category = require("../models/Category");
const User = require("../models/User");

jest.mock("../models/Category");
jest.mock("../models/User");

describe("createCategory", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a category successfully", async () => {
    const mockReq = {
      body: {
        title: "New Category",
        description: "New Description",
        image: "image_url",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Category.prototype.save = jest.fn().mockResolvedValue(mockReq.body);

    await createCategory(mockReq, mockRes);

    expect(Category.prototype.save).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Category created successfully",
    });
  });

  it("should handle errors during category creation", async () => {
    const mockReq = {
      body: {
        title: "New Category",
        description: "New Description",
        image: "image_url",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Category.prototype.save = jest
      .fn()
      .mockRejectedValue(new Error("Internal server error"));

    await createCategory(mockReq, mockRes);

    expect(Category.prototype.save).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      error: "Internal server error",
    });
  });
});

describe("getAllCategories", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return all categories", async () => {
    const categories = [{ title: "Category 1" }, { title: "Category 2" }];
    Category.find = jest.fn().mockResolvedValue(categories);

    const mockReq = {};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllCategories(mockReq, mockRes);

    expect(Category.find).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(categories);
  });

  it("should handle errors when retrieving all categories", async () => {
    Category.find = jest
      .fn()
      .mockRejectedValue(new Error("Internal server error"));

    const mockReq = {};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllCategories(mockReq, mockRes);

    expect(Category.find).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      error: "Internal server error",
    });
  });
});

// Assuming you have a utility function that gets the counts
// If not, you would need to mock the `User.countDocuments` function as well
describe("getCategoriesWithCounts", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return categories with the number of service providers', async () => {
    // Mock the Category.find method
    const categories = [{ title: 'Category 1', toObject: jest.fn().mockReturnValue({ title: 'Category 1' }) }];
    Category.find = jest.fn().mockResolvedValue(categories);
    User.countDocuments = jest.fn().mockResolvedValue(5);

    const mockReq = {};
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(), // Ensure that status is a mocked function that returns this
    };

    await getCategoriesWithCounts(mockReq, mockRes);

    // Assertions
    expect(mockRes.json).toHaveBeenCalled();
    expect(mockRes.json.mock.calls[0][0]).toEqual(expect.arrayContaining([
      expect.objectContaining({ totalServiceProviders: 5 })
    ]));
  });

  it("should handle errors during retrieving categories with counts", async () => {
    Category.find = jest
      .fn()
      .mockRejectedValue(new Error("Internal server error"));

    const mockReq = {};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getCategoriesWithCounts(mockReq, mockRes);

    expect(Category.find).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      error: "Internal server error",
    });
  });
});
