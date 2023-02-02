const mongoose = require("mongoose");

const DevisSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  need: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("devis", DevisSchema);