const express = require("express");
const Notification = require("../models/Notification");
const router = express.Router();

// router.post("/", async (req, res) => {
//   const { type, content, orderId, userId } = req.body;

//   try {
//     await Notification.create({
//       type,
//       content,
//       order_id: orderId,
//       user_id: userId,
//     });
//     res.json({ success: true });
//   } catch (error) {
//     console.error("Error creating notification:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Endpoint to fetch notifications
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const notifications = await Notification.find({ user: userId }).sort({
      created_at: -1,
    });
    res.json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to mark notification as read
router.put("/:notificationId/read", async (req, res) => {
  const notificationId = req.params.notificationId;

  try {
    if (notificationId) {
      await Notification.findByIdAndUpdate(notificationId, { isRead: true });
    } else {
      console.error("Notification _id is undefined");
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error marking notification as read:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
