const mongoose = require("mongoose");

const bagSechma = mongoose.Schema(
  {
    brand: String,
    title: String,
    size: String,
    quantity: Number,
    price: String,
    off_price: String,
    discount: String,
    img: String,
    userId: { type: mongoose.Schema.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

const Bag = mongoose.model("Bag", bagSechma);

module.exports = Bag;
