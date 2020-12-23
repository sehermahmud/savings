const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeherSchema = new Schema({
  name: { type: String, required: false },
  amount: { type: Number, required: false },
  date: { type: Number, required: false },
  month: { type: Number, required: false },
  year: { type: Number, required: false },
  description: { type: String, required: false },
});

const Seher = mongoose.model('Seher', SeherSchema);

module.exports = Seher;
