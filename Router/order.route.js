const express = require("express");
const orderModel = require("../models/order.model");
const { Router } = require("express");
const jwt=require("jsonwebtoken");

const orderRouter = Router();

orderRouter.post("/create",  async (req, res) => {
  const order=req.body;

  const data = new orderModel(order);
  await data.save();

  res.status(200).send("Data Added");
});

orderRouter.get("/", async (req, res) => {
    const user_token=req.headers.authorization;
    const decoded=jwt.verify(user_token, process.env.tokenKey);
    const { UserId } = decoded;
  
    const items = await orderModel.find({ UserId: UserId });
  
    res.status(200).send(items);
});

orderRouter.get("/all", async (req, res) => {
  const items = await orderModel.find();
  res.status(200).send(items);
});

orderRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const data = await orderModel.findOneAndDelete({ _id: id });
  res.status(200).send("Order Deleted");
});


module.exports = orderRouter;