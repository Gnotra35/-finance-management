// backend/models/finance.js
const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
  income: { type: Number, required: true },
  expenses: { type: Number, required: true },
  savings: { type: Number, required: true },
});

module.exports = mongoose.model('Finance', financeSchema);
