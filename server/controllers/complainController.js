const Complain = require('../models/Complain');

const complainOrder = async (req, res) => {
  try {
    const { reason } = req.body;
    const { userId, orderId } = req.params;

    // You might want to add validation for the reason

    const complain = new Complain({
      userId,
      orderId,
      reason,
    });

    await complain.save();

    res.status(200).json(complain);
  } catch (error) {
    console.error('Error complaining about order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const fetchComplaints = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const complaints = await Complain.find({ orderId });
    res.json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  complainOrder,
  fetchComplaints
};
