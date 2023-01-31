const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

const url = process.env.mongourl;

const connect = mongoose.connect(url);

module.exports = connect;
