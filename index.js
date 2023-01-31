const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connection }= require("./config/db");
const userRouter = require("./Router/user.route");
const mensRouter = require("./Router/men.route");
const womensRouter = require("./Router/women.route");

const {Authentication} = require("./middlewares/auth.middleware");

const cartRouter = require("./Router/cart.route");
const orderRouter = require("./Router/order.route");



const app = express();

app.use(express.json());

app.use(cors({
    origin:"*"
}));

app.get("/", (req, res) => {
    res.send("homepage routes are /users /mens /womens /cart /order");
});

app.use('/users',userRouter)
app.use('/mens',mensRouter)
app.use('/womens',womensRouter)
app.use(Authentication);
app.use('/cart',cartRouter);
app.use("/order",orderRouter);



app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log("Connected to DB")

    }catch(err){
        console.log(err);
        console.log("Error while connecting to DB");
    }
    console.log(`server is running at port ${process.env.port}`);
});
