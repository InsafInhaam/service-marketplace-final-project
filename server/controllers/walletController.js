const User = require("../models/User");

const chargePoints = async (req, res) => {
  const { amount } = req.body;
  const { user } = req;

  try {
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) {
      return res.status(400).json({ success: false, message: "Invalid amount" });
    }

    user.points += numericAmount;
    await user.save();

    res.json({
      success: true,
      message: "Points charged successfully",
      points: user.points,
    });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const usePoints = async (req, res) => {
  const { amount } = req.body;
  const { user } = req;

  try {
    const numericAmount = Number(amount);

    if (!user || user.points < numericAmount) {
      return res.status(400).json({ success: false, message: "Insufficient points" });
    }

    if (isNaN(numericAmount)) {
      return res.status(400).json({ success: false, message: "Invalid amount" });
    }

    user.points -= numericAmount;
    await user.save();

    res.json({
      success: true,
      message: "Points used for payment",
      points: user.points,
    });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getBalance = async (req, res) => {
  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ balance: user.points });
  } catch (error) {
    console.error("Error getting wallet balance:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  chargePoints,
  usePoints,
  getBalance
};
