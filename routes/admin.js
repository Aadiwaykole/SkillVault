const {Router }= require("express");

const adminRouter = Router();


adminRouter.post ("/signup", (req, res) => {
    res.json({
        message: "signup endpoing "
    })

 });

 
 adminRouter.post ("/signin", (req, res) => {
    res.json({
        message: "signin endpoint "
    })

 });





 module.exports = {
    adminRouter: adminRouter
 }