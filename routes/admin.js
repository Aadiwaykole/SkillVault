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

 adminRouter.post ("/course", function (req, res){
    res.josn ({
        message :" signin endpoint"
    })
 })

 adminRouter.get ("/course/bulk", function (req, res){
    res.json ({
        message: "signup endpoint"
    })
 })





 module.exports = {
    adminRouter: adminRouter
 }