// complain.test.js
const {
  complainOrder,
  fetchComplaints,
} = require("../controllers/complainController");
const Complain = require("../models/Complain");

// Mock the Complain model
jest.mock("../models/Complain", () => ({
  // Mock the constructor
  mockImplementation: jest.fn().mockImplementation(() => ({
    save: jest.fn().mockResolvedValue({
      /* resolved value */
    }),
  })),
  // Mock static methods if there are any
  find: jest.fn(),
}));

describe("Complain Controller", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("complainOrder", () => {
    it("should create a complaint successfully", async () => {
      const mockComplainInstance = new Complain();
      mockComplainInstance.save.mockResolvedValue({
        _id: "complaintId",
        reason: "Valid reason",
        userId: "user1",
        orderId: "order1",
      });

      const mockReq = {
        body: { reason: "Valid reason" },
        params: { userId: "user1", orderId: "order1" },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await complainOrder(mockReq, mockRes);

      // Ensure that the save method on the mock instance was called
      expect(mockComplainInstance.save).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(expect.any(Object));
    });

    it("should handle errors during complaint creation", async () => {
      // Mock save method to reject
      Complain.mockImplementation(() => ({
        save: jest.fn().mockRejectedValue(new Error("Internal Server Error")),
      }));

      const mockReq = {
        body: { reason: "Valid reason" },
        params: { userId: "user1", orderId: "order1" },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await complainOrder(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        error: "Internal Server Error",
      });
    });
  });

  describe("fetchComplaints", () => {
    it("should fetch complaints for an order successfully", async () => {
      const complaints = [
        { _id: "complaint1", reason: "Reason 1" },
        { _id: "complaint2", reason: "Reason 2" },
      ];
      Complain.find.mockResolvedValue(complaints);

      const mockReq = {
        params: { orderId: "order1" },
      };
      const mockRes = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      await fetchComplaints(mockReq, mockRes);

      expect(Complain.find).toHaveBeenCalledWith({ orderId: "order1" });
      expect(mockRes.json).toHaveBeenCalledWith(complaints);
    });

    it("should handle errors when fetching complaints", async () => {
      Complain.find.mockRejectedValue(new Error("Internal Server Error"));

      const mockReq = {
        params: { orderId: "order1" },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await fetchComplaints(mockReq, mockRes);

      expect(Complain.find).toHaveBeenCalledWith({ orderId: "order1" });
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        error: "Internal Server Error",
      });
    });
  });
});
