const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  productName: String,
  Image: String,
  price: String,
  size: String,
  color: String,
  quantity: Number,
  brand: String,
  off_price: String,
  discount: String,
  UserId: String
});

const CART = mongoose.model("cart", cartSchema);

module.exports = {CART};