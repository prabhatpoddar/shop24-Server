const mongoose = require("mongoose");

const womenSchema = mongoose.Schema({
  Image: String,
  Brand_Name: String,
  Price: String,
  color: String
});

const WOMEN = mongoose.model("women",womenSchema);

module.exports = {WOMEN};