// const express = require("express");
// const Router = express.Router();

//insted of up sie use this only one line here
const {Router}= require("express");

const userRouter = Router();


userRouter.post ("/signup", (req, res) => {
    res.json({
        message: "signup endpoing "
    })

 });

 
 userRouter.post ("/signin", (req, res) => {
    res.json({
        message: "signin endpoint "
    })

 });

 
 userRouter.get ("/purchases", (req, res) => {
    res.json({
        message: "purchases endpoint "
    })

 });

 module.exports = {
    UserRouter: userRouter
 }