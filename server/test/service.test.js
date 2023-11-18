import {
  createService,
  getAllServices,
  searchServices,
  getServiceById,
  getServicesBySubcategoryId,
  deleteService,
} from "../controllers/serviceController";
import Service from "../models/Service";

// Mock the Service model
jest.mock("../models/Service.js");

describe("createService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a service successfully", async () => {
    const mockService = {
      _id: "1",
      name: "Test Service",
      description: "This is a test service",
      price: 200,
      hours: 2,
      subcategory: "Test Subcategory",
      save: jest.fn().mockResolvedValue({
        _id: "1",
        name: "Test Service",
        description: "This is a test service",
        price: 200,
        hours: 2,
        subcategory: "Test Subcategory",
      }),
    };

    Service.mockImplementation(() => mockService);

    const mockReq = {
      body: {
        name: "Test Service",
        description: "This is a test service",
        price: 200,
        hours: 2,
        subcategory: "Test Subcategory",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createService(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Service inserted successfully",
      savedService: {
        _id: mockService._id,
        name: mockService.name,
        description: mockService.description,
        price: mockService.price,
        hours: mockService.hours,
        subcategory: mockService.subcategory,
      },
    });
  });

  it("should handle errors during the creation process", async () => {
    Service.mockImplementation(() => {
      throw new Error("Database error");
    });

    const mockReq = {
      body: {
        name: "Test Service",
        description: "This is a test service",
        price: 200,
        hours: 2,
        subcategory: "Test Subcategory",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createService(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      error: "Internal server error",
    });
  });
});

describe("getAllServices", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return all services successfully", async () => {
    const mockServices = [
      { _id: "1", name: "Service 1", description: "Description 1" },
      { _id: "2", name: "Service 2", description: "Description 2" },
    ];

    Service.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockResolvedValue(mockServices),
    });

    const mockReq = {};
    const mockRes = {
      json: jest.fn(),
    };

    await getAllServices(mockReq, mockRes);

    expect(Service.find).toHaveBeenCalled();
    expect(mockRes.json).toHaveBeenCalledWith(mockServices);
  });

  it("should handle errors", async () => {
    Service.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockRejectedValue(new Error("Internal server error")),
    });

    const mockReq = {};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllServices(mockReq, mockRes);

    expect(Service.find).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Internal server error",
    });
  });
});

describe("searchServices", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return services based on the search keyword", async () => {
    const mockServices = [
      {
        _id: "1",
        name: "Service 1",
        description: "Description matching keyword",
      },
    ];

    Service.find = jest.fn().mockResolvedValue(mockServices);

    const mockReq = { query: { keyword: "matching" } };
    const mockRes = {
      json: jest.fn(),
    };

    await searchServices(mockReq, mockRes);

    expect(Service.find).toHaveBeenCalledWith({
      $or: [
        { title: { $regex: "matching", $options: "i" } },
        { description: { $regex: "matching", $options: "i" } },
      ],
    });
    expect(mockRes.json).toHaveBeenCalledWith(mockServices);
  });

  it("should handle errors during search", async () => {
    Service.find = jest
      .fn()
      .mockRejectedValue(new Error("Internal server error"));

    const mockReq = { query: { keyword: "error" } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await searchServices(mockReq, mockRes);

    expect(Service.find).toHaveBeenCalled();
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Internal server error",
    });
  });
});

describe("getServiceById", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a service by ID", async () => {
    const mockService = {
      _id: "1",
      name: "Service 1",
      description: "Description 1",
    };

    Service.findById = jest.fn().mockResolvedValue(mockService);

    const mockReq = { params: { id: "1" } };
    const mockRes = {
      json: jest.fn(),
    };

    await getServiceById(mockReq, mockRes);

    expect(Service.findById).toHaveBeenCalledWith("1");
    expect(mockRes.json).toHaveBeenCalledWith(mockService);
  });

  it("should return 404 if service not found", async () => {
    Service.findById = jest.fn().mockResolvedValue(null);

    const mockReq = { params: { id: "nonexistent" } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getServiceById(mockReq, mockRes);

    expect(Service.findById).toHaveBeenCalledWith("nonexistent");
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith({ message: "Service not found" });
  });

  it("should handle errors when retrieving service by ID", async () => {
    Service.findById = jest
      .fn()
      .mockRejectedValue(new Error("Internal server error"));

    const mockReq = { params: { id: "1" } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getServiceById(mockReq, mockRes);

    expect(Service.findById).toHaveBeenCalledWith("1");
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Internal server error",
    });
  });
});

describe("getServicesBySubcategoryId", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return services by subcategory ID", async () => {
    const mockServices = [
      { _id: "1", name: "Service 1", subcategory: "subcategory1" },
    ];

    Service.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockResolvedValue(mockServices),
    });

    const mockReq = { params: { id: "subcategory1" } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getServicesBySubcategoryId(mockReq, mockRes);

    expect(Service.find).toHaveBeenCalledWith({ subcategory: "subcategory1" });
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockServices);
  });

  it("should handle errors when retrieving services by subcategory ID", async () => {
    Service.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockRejectedValue(new Error("Internal server error")),
    });

    const mockReq = { params: { id: "subcategory1" } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getServicesBySubcategoryId(mockReq, mockRes);

    expect(Service.find).toHaveBeenCalledWith({ subcategory: "subcategory1" });
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      error: "Internal server error",
    });
  });
});

describe("deleteService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should delete a service successfully", async () => {
    Service.findByIdAndRemove = jest.fn().mockResolvedValue({ _id: "1" });

    const mockReq = { params: { id: "1" } };
    const mockRes = {
      json: jest.fn(),
    };

    await deleteService(mockReq, mockRes);

    expect(Service.findByIdAndRemove).toHaveBeenCalledWith("1");
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Service deleted successfully",
    });
  });

  it("should return 404 if service to delete is not found", async () => {
    Service.findByIdAndRemove = jest.fn().mockResolvedValue(null);

    const mockReq = { params: { id: "1" } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await deleteService(mockReq, mockRes);

    expect(Service.findByIdAndRemove).toHaveBeenCalledWith("1");
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith({ message: "Service not found" });
  });

  it("should handle errors during deletion", async () => {
    Service.findByIdAndRemove = jest
      .fn()
      .mockRejectedValue(new Error("Internal server error"));

    const mockReq = { params: { id: "1" } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await deleteService(mockReq, mockRes);

    expect(Service.findByIdAndRemove).toHaveBeenCalledWith("1");
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Internal server error",
    });
  });
});
