const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SavingSchema = new Schema({
  name: { type: String, required: false },
  amount: { type: Number, required: false },
  date: { type: Number, required: false },
  month: { type: Number, required: false },
  year: { type: Number, required: false },
  description: { type: String, required: false },
});

const Savings = mongoose.model('Savings', SavingSchema);

module.exports = Savings;
