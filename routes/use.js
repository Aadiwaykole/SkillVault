// const express = require("express");
// const Router = express.Router();

//insted of up sie use this only one line here
const {Router}= require("express");

const userRouter = Router();


userRouter.post ("/user/sighnup", (req, res) => {
    res.json({
        message: "signup endpoing "
    })

 });

 
 userRouter.post ("/user/signin", (req, res) => {
    res.json({
        message: "signin endpoint "
    })

 });

 
 userRouter.get ("/user/purchases", (req, res) => {
    res.json({
        message: "purchases endpoint "
    })

 });

 module.exports = userRouter;