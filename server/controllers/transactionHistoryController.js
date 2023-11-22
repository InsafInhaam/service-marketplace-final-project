const TransactionHistory = require('../models/TransactionHistory');

const getAllTransactionHistory = async (req, res) => {
  try {
    const allTransactionHistory = await TransactionHistory.find();
    res.json(allTransactionHistory);
  } catch (error) {
    console.error('Error getting all transaction history:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getTransactionHistoryByLabour = async (req, res) => {
  const labourId = req.params.labourId;

  try {
    const transactionHistoryByLabour = await TransactionHistory.find({ labourer: labourId });
    res.json(transactionHistoryByLabour);
  } catch (error) {
    console.error('Error getting transaction history by labour ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllTransactionHistory,
  getTransactionHistoryByLabour,
};
