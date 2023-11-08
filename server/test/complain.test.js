const mongoose = require("mongoose");
const {
  complainOrder,
  fetchComplaints,
} = require("../controllers/complainController");
const Complain = require("../models/Complain");

jest.mock('../models/Complain', () => {
    const mockComplainInstance = {
      save: jest.fn(),
    };
    const mock = jest.fn(() => mockComplainInstance);
    mock.find = jest.fn();
    return mock;
  });

describe("Complain Controller", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("complainOrder", () => {
    it("should create a complaint successfully", async () => {
      const mockComplain = new Complain();
      mockComplain.save.mockResolvedValue({
        _id: new mongoose.Types.ObjectId(),
        userId: new mongoose.Types.ObjectId(),
        orderId: new mongoose.Types.ObjectId(),
        reason: "Valid reason",
      });

      const mockReq = {
        body: { reason: "Valid reason" },
        params: {
          userId: new mongoose.Types.ObjectId().toString(),
          orderId: new mongoose.Types.ObjectId().toString(),
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await complainOrder(mockReq, mockRes);

      expect(mockComplain.save).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(expect.any(Object));
    });

    it("should handle errors during complaint creation", async () => {
      const mockComplain = new Complain();
      mockComplain.save.mockRejectedValue(new Error("Internal Server Error"));

      const mockReq = {
        body: { reason: "Valid reason" },
        params: {
          userId: new mongoose.Types.ObjectId().toString(),
          orderId: new mongoose.Types.ObjectId().toString(),
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await complainOrder(mockReq, mockRes);

      expect(mockComplain.save).toHaveBeenCalled();
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        error: "Internal Server Error",
      });
    });
  });

  describe('fetchComplaints', () => {
    it('should fetch complaints for an order successfully', async () => {
      const complaints = [
        { reason: 'Complaint 1', userId: new mongoose.Types.ObjectId(), orderId: new mongoose.Types.ObjectId() },
        { reason: 'Complaint 2', userId: new mongoose.Types.ObjectId(), orderId: new mongoose.Types.ObjectId() },
      ];
      Complain.find.mockResolvedValue(complaints);

      const mockReq = {
        params: { orderId: new mongoose.Types.ObjectId().toString() },
      };
      const mockRes = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };

      await fetchComplaints(mockReq, mockRes);

      expect(Complain.find).toHaveBeenCalledWith({ orderId: mockReq.params.orderId });
      expect(mockRes.json).toHaveBeenCalledWith(complaints);
    });

    it('should handle errors when fetching complaints', async () => {
      Complain.find.mockRejectedValue(new Error('Internal Server Error'));

      const mockReq = {
        params: { orderId: new mongoose.Types.ObjectId().toString() },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await fetchComplaints(mockReq, mockRes);

      expect(Complain.find).toHaveBeenCalledWith({ orderId: mockReq.params.orderId });
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
    });
  });
});
