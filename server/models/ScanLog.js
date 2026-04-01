const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
  email: String,
  username: String,
  passwordHash: String,
  breached: Boolean,
  risk: String,
  entropy: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ScanLog", scanSchema);