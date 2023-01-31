const express = require("express");
const {CART} = require("../models/cart.model");
const { Router } = require("express");
const jwt=require("jsonwebtoken");
require("dotenv").config();

const cartRouter = Router();

cartRouter.get("/", async (req, res) => {
  const user_token=req.headers.authorization;
  const decoded=jwt.verify(user_token, process.env.tokenKey);
  const { UserId } = decoded;

  const items = await CART.find({ UserId: UserId });
  // const items = await CART.find();

  res.status(200).send(items);
});

cartRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  

  const deletedData = await CART.deleteOne({ _id: id });

  const data = await CART.find();

  res.status(200).send(data);
});

cartRouter.delete("/orderdelete", async (req, res) => {
  const user_token=req.headers.authorization;
  const decoded=jwt.verify(user_token, process.env.tokenKey);
  const { UserId } = decoded;
  // let len=await CART.find({UserId:userId});

  await CART.deleteMany({UserId: UserId});

  res.status(200).send("cart is empty");
});

cartRouter.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const { size, quantity } = req.body;
  const item = await CART.findOne({ _id: id });
  const updated_product = await CART.findOneAndUpdate(
    { _id: id },
    { size: size, quantity: quantity },
    { new: true }
  );
  return res.status(200).send(updated_product);
});

cartRouter.post("/create", async (req, res) => {
  const item = req.body;
  const data = new CART(item);
  await data.save();
  res.status(200).send({ message: "Item addeed", cart: data });
});

module.exports = cartRouter;