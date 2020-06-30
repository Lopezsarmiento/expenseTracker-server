const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactions");

// to get all transactions
// or
// adding a new one
router.route("/").get(getTransactions).post(addTransaction);

// deleting transactions
router.route("/:id").delete(deleteTransaction);

module.exports = router;
