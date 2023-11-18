const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Send a message
router.post("/send", async (req, res) => {
  try {
    const { sender, receiver, content, orderId } = req.body;
    const message = new Message({ sender, receiver, content, orderId });
    await message.save();
    res.json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Retrieve messages for a user, a labour, and an order
router.get("/:userId/:labourId/:orderId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const labourId = req.params.labourId;
    const orderId = req.params.orderId;

    const messages = await Message.find({
      $or: [
        { sender: userId, receiver: labourId, orderId },
        { sender: labourId, receiver: userId, orderId },
      ],
    }).sort({ timestamp: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
