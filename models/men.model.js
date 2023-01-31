const mongoose = require("mongoose");

const menSchema = mongoose.Schema({
  Image: String,
  Brand_Name: String,
  Price: String,
  color: String
});

// ,{
//   versionKey: false
// }

const MEN = mongoose.model("men", menSchema);

module.exports = {MEN};