// const {
//   getAllServices,
//   searchServices,
//   getServiceById,
//   getServicesBySubcategoryId,
//   createService,
//   updateService,
//   deleteService
// } = require("../controllers/serviceController");

// const Service = require("../models/Service");

// jest.mock("../models/Service");

// describe("Service Controller Tests", () => {
//   let mockReq;
//   let mockRes;

//   beforeEach(() => {
//     mockReq = {
//       params: {},
//       body: {},
//       query: {}
//     };
//     mockRes = {
//       json: jest.fn(),
//       status: jest.fn().mockReturnThis()
//     };
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   // getAllServices Tests
//   describe("getAllServices", () => {
//     it("should return all services", async () => {
//       const services = [{ name: "Service 1" }, { name: "Service 2" }];
//       Service.find.mockResolvedValue(services);

//       await getAllServices(mockReq, mockRes);

//       expect(mockRes.json).toHaveBeenCalledWith(services);
//     });

//     it("should handle errors", async () => {
//       Service.find.mockRejectedValue(new Error("Database error"));

//       await getAllServices(mockReq, mockRes);

//       expect(mockRes.status).toHaveBeenCalledWith(500);
//       expect(mockRes.json).toHaveBeenCalledWith({ message: "Internal server error" });
//     });
//   });

//   // searchServices Tests
//   describe("searchServices", () => {
//     it("should return services based on a keyword search", async () => {
//       const keyword = "clean";
//       const services = [{ name: "Cleaning Service" }];
//       mockReq.query.keyword = keyword;
//       Service.find.mockResolvedValue(services);

//       await searchServices(mockReq, mockRes);

//       expect(mockRes.json).toHaveBeenCalledWith(services);
//     });

//     it("should handle errors during search", async () => {
//       mockReq.query.keyword = "clean";
//       Service.find.mockRejectedValue(new Error("Search error"));

//       await searchServices(mockReq, mockRes);

//       expect(mockRes.status).toHaveBeenCalledWith(500);
//       expect(mockRes.json).toHaveBeenCalledWith({ message: "Internal server error" });
//     });
//   });

//   // getServiceById Tests
//   describe("getServiceById", () => {
//     it("should return a service by id", async () => {
//       const service = { name: "Specific Service" };
//       mockReq.params.id = "serviceId";
//       Service.findById.mockResolvedValue(service);

//       await getServiceById(mockReq, mockRes);

//       expect(mockRes.json).toHaveBeenCalledWith(service);
//     });

//     it("should return 404 if service not found", async () => {
//       mockReq.params.id = "nonExistentServiceId";
//       Service.findById.mockResolvedValue(null);

//       await getServiceById(mockReq, mockRes);

//       expect(mockRes.status).toHaveBeenCalledWith(404);
//       expect(mockRes.json).toHaveBeenCalledWith({ message: "Service not found" });
//     });

//     it("should handle errors", async () => {
//       mockReq.params.id = "serviceId";
//       Service.findById.mockRejectedValue(new Error("Database error"));

//       await getServiceById(mockReq, mockRes);

//       expect(mockRes.status).toHaveBeenCalledWith(500);
//       expect(mockRes.json).toHaveBeenCalledWith({ message: "Internal server error" });
//     });
//   });

//   // createService Tests
//   describe("createService", () => {
//     it("should create a service", async () => {
//       const serviceData = { name: "New Service", description: "New service description" };
//       const savedService = { ...serviceData, _id: "newServiceId" };
//       mockReq.body = serviceData;
//       Service.prototype.save = jest.fn().mockResolvedValue(savedService);

//       await createService(mockReq, mockRes);

//       expect(mockRes.status).toHaveBeenCalledWith(201);
//       expect(mockRes.json).toHaveBeenCalledWith({ savedService, message: "Service inserted successfully" });
//     });

//     it("should handle errors during creation", async () => {
//       mockReq.body = { name: "New Service", description: "New service description" };
//       Service.prototype.save = jest.fn().mockRejectedValue(new Error("Creation error"));

//       await createService(mockReq, mockRes);

//       expect(mockRes.status).toHaveBeenCalledWith(500);
//       expect(mockRes.json).toHaveBeenCalledWith({ error: "Internal server error" });
//     });
//   });

//   // updateService Tests
//   describe("updateService", () => {
//     it("should update a service", async () => {
//       const serviceUpdate = { name: "Updated Service" };
//       mockReq.params.id = "serviceId";
//       mockReq.body = serviceUpdate;
//       Service.findByIdAndUpdate.mockResolvedValue({ ...serviceUpdate, _id: "serviceId" });

//       await updateService(mockReq, mockRes);

//       expect(mockRes.json).toHaveBeenCalledWith({ message: "Service updated successfully" });
//     });

//     it("should return 404 if service not found", async () => {
//       mockReq.params.id = "nonExistentServiceId";
//       mockReq.body = { name: "Updated Service" };
//       Service.findByIdAndUpdate.mockResolvedValue(null);

//       await updateService(mockReq, mockRes);

//       expect(mockRes.status).toHaveBeenCalledWith(404);
//       expect(mockRes.json).toHaveBeenCalledWith({ message: "Service not found" });
//     });

//     it("should handle errors during update", async () => {
//       mockReq.params.id = "serviceId";
//       mockReq.body = { name: "Updated Service" };
//       Service.findByIdAndUpdate.mockRejectedValue(new Error("Update error"));

//       await updateService(mockReq, mockRes);

//       expect(mockRes.status).toHaveBeenCalledWith(500);
//       expect(mockRes.json).toHaveBeenCalledWith({ message: "Internal server error" });
//     });
//   });

//   // deleteService Tests
//   describe("deleteService", () => {
//     it("should delete a service", async () => {
//       mockReq.params.id = "serviceId";
//       Service.findByIdAndDelete.mockResolvedValue({ _id: "serviceId" });

//       await deleteService(mockReq, mockRes);

//       expect(mockRes.json).toHaveBeenCalledWith({ message: "Service deleted successfully" });
//     });

//     it("should return 404 if service not found", async () => {
//       mockReq.params.id = "nonExistentServiceId";
//       Service.findByIdAndDelete.mockResolvedValue(null);

//       await deleteService(mockReq, mockRes);

//       expect(mockRes.status).toHaveBeenCalledWith(404);
//       expect(mockRes.json).toHaveBeenCalledWith({ message: "Service not found" });
//     });

//     it("should handle errors during deletion", async () => {
//       mockReq.params.id = "serviceId";
//       Service.findByIdAndDelete.mockRejectedValue(new Error("Deletion error"));

//       await deleteService(mockReq, mockRes);

//       expect(mockRes.status).toHaveBeenCalledWith(500);
//       expect(mockRes.json).toHaveBeenCalledWith({ message: "Internal server error" });
//     });
//   });

// });
// Import the service controller and the Service model
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

  // Test Case 1: Successful creation of a service
  it("should create a service successfully", async () => {
    // Mock implementation of the Service constructor to mimic save function
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

    // Mock request and response objects
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

    // Execute the createService function
    await createService(mockReq, mockRes);

    // Assertions to verify the response
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

  // Test Case 2: Error path during service creation
  it("should handle errors during the creation process", async () => {
    // Mock the Service constructor to throw an error on save
    Service.mockImplementation(() => {
      throw new Error("Database error");
    });

    // Mock request and response objects
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

    // Execute the createService function
    await createService(mockReq, mockRes);

    // Assertions to verify the response handles the error
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
