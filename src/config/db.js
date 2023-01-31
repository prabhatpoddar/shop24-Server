const mongoose =require("mongoose");
require("dotenv").config()
mongoose.set('strictQuery', true);

const connect=mongoose.connect(process.env.MONGOURL)

module.exports=connect