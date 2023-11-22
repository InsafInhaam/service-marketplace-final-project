const express = require('express');
const router = express.Router();
const transactionHistoryController = require('../controllers/transactionHistoryController');

// Get all transaction history
router.get('/', transactionHistoryController.getAllTransactionHistory);

// Get transaction history by labour ID
router.get('/labour/:labourId', transactionHistoryController.getTransactionHistoryByLabour);

module.exports = router;
