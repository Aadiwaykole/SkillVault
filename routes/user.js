// const express = require("express");
// const Router = express.Router();

//insted of up sie use this only one line here
const {userModel} = require("../db");
const {Router}= require("express");

const userRouter = Router();


userRouter.post ("/signup", async(req, res) => {
    const {email, password , firstName , lastName } = req.body ; //adding zod here 
    //const email = req.body.email ; 
    //const password = requ.body.password;  

    //TODO: has the password so plaintext pass not stored in db ; 

    await userModel.create({
        email:email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message: "signup succeeded "
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