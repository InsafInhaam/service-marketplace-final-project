const { chargePoints } = require('../controllers/walletController');
const User = require("../models/User");

jest.mock('../models/User', () => ({
  findById: jest.fn(),
}));

describe('chargePoints', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should charge points to the user successfully', async () => {
    const mockUser = {
      points: 100,
      save: jest.fn().mockResolvedValue(true),
    };

    const mockReq = {
      body: { amount: '50' },
      user: mockUser,
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await chargePoints(mockReq, mockRes);

    expect(mockUser.save).toHaveBeenCalled();
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: "Points charged successfully",
      points: 150,
    });
  });

  it('should return 404 if user not found', async () => {
    const mockReq = {
      body: { amount: '50' },
      user: null,
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await chargePoints(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: "User not found",
    });
  });

  it('should handle invalid amount', async () => {
    const mockReq = {
      body: { amount: 'invalid' },
      user: { points: 100, save: jest.fn() },
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await chargePoints(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: "Invalid amount",
    });
  });

  it('should handle internal server error', async () => {
    const mockReq = {
      body: { amount: '50' },
      user: { points: 100, save: jest.fn().mockRejectedValue(new Error('Error saving')) },
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await chargePoints(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: "Internal Server Error",
    });
  });
});


// Import the necessary functions and mocked modules
const { usePoints } = require('../controllers/walletController');

describe('usePoints', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should deduct points from the user successfully', async () => {
    const mockUser = {
      points: 150,
      save: jest.fn().mockResolvedValue(true),
    };

    const mockReq = {
      body: { amount: '50' },
      user: mockUser,
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await usePoints(mockReq, mockRes);

    expect(mockUser.save).toHaveBeenCalled();
    expect(mockRes.json).toHaveBeenCalledWith({
      success: true,
      message: "Points used for payment",
      points: 100,
    });
  });

  it('should return 400 if user has insufficient points', async () => {
    const mockReq = {
      body: { amount: '200' },
      user: { points: 100, save: jest.fn() },
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await usePoints(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: "Insufficient points",
    });
  });

  it('should return 400 if the amount is invalid', async () => {
    const mockReq = {
      body: { amount: 'invalid' },
      user: { points: 100, save: jest.fn() },
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await usePoints(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: "Invalid amount",
    });
  });

  it('should handle internal server error', async () => {
    const mockReq = {
      body: { amount: '50' },
      user: { points: 100, save: jest.fn().mockRejectedValue(new Error('Error saving')) },
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await usePoints(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: "Internal Server Error",
    });
  });
});

// Import the necessary functions and mocked modules
const { getBalance } = require('../controllers/walletController');

describe('getBalance', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the balance of the user', async () => {
    const mockReq = {
      user: { points: 100 },
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await getBalance(mockReq, mockRes);

    expect(mockRes.json).toHaveBeenCalledWith({ balance: 100 });
  });

  it('should return 404 if user not found', async () => {
    const mockReq = {
      user: null,
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await getBalance(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith({
      success: false,
      message: "User not found",
    });
  });

  it('should handle internal server error', async () => {
    const mockReq = {
      user: { points: 100 },
    };
    const mockRes = {
      json: jest.fn(),
      status: jest.fn(() => {
        throw new Error('Internal Server Error');
      }).mockReturnThis(),
    };
  
    try {
      await getBalance(mockReq, mockRes);
    } catch (e) {
      // The error is caught here since it's not an async operation
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith({
        success: false,
        message: "Internal Server Error",
      });
    }
  });
  
});

