const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { authenticateToken } = require("../middleware/requireLogin");

// Charge points to the user's wallet
router.post("/charge", authenticateToken, async (req, res) => {
  const { amount } = req.body;
  const { user } = req;

  try {
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const numericAmount = Number(amount);

    if (isNaN(numericAmount)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid amount" });
    }

    user.points += numericAmount;

    await user.save();

    res.json({
      success: true,
      message: "Points charged successfully",
      points: user.points,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Use points for order payment
router.post("/use", authenticateToken, async (req, res) => {
  const { amount } = req.body;
  const { user } = req;

  try {
    if (!user || user.points < amount) {
      return res
        .status(400)
        .json({ success: false, message: "Insufficient points" });
    }

    const numericAmount = Number(amount);

    if (isNaN(numericAmount)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid amount" });
    }

    user.points -= numericAmount;

    await user.save();

    res.json({
      success: true,
      message: "Points used for payment",
      points: user.points,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get the user's wallet balance
router.get("/balance", authenticateToken, async (req, res) => {
  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Retrieve the balance from the user model
    const balance = user.points;

    res.json({ balance });
  } catch (error) {
    console.error("Error getting wallet balance:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
