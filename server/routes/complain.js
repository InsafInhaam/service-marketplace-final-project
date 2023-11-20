// const express = require('express');
// const router = express.Router();
// const Complain = require('../models/Complain');

// // Complain Order
// router.post('/complainOrder/:userId/:orderId', async (req, res) => {
//   try {
//     const { reason } = req.body;
//     const { userId, orderId } = req.params;

//     // You might want to add validation for the reason

//     const complain = new Complain({
//       userId,
//       orderId,
//       reason,
//     });

//     await complain.save();

//     res.status(200).json(complain);
//   } catch (error) {
//     console.error('Error complaining about order:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Fetch complaints for a specific order
// router.get('/complaints/:orderId', async (req, res) => {
//   const orderId = req.params.orderId;

//   try {
//     const complaints = await Complain.find({ orderId });
//     res.json(complaints);
//   } catch (error) {
//     console.error('Error fetching complaints:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const complainController = require('../controllers/complainController');

router.post('/complainOrder/:userId/:orderId', complainController.complainOrder);
router.get('/complaints/:orderId', complainController.fetchComplaints);
router.get('/complaints/', complainController.fetchAllComplaints);
router.get('/complaints/byLabour/:labourId', complainController.fetchComplaintsByLabour);

module.exports = router;

