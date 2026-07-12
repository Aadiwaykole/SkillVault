const express = require('express');
const mongoose = require("mongoose");
const {UserRouter} = require('./routes/user.js');
const {courseRouter} = require("./routes/course.js");
const {adminRouter} = require("./routes/admin.js");

const app = express();

 app.use("/api/v1/user", UserRouter);
 app.use("/api/v1/admin",adminRouter);
 app.use("/api/v1/course", courseRouter);


 async function main (){

   //use dotenv file
   mongoose.connect ("mongodb+srv://aditya:Aaditya@cluster0.8ycxnhv.mongodb.net/courseEra")

   app.listen(3000, () => {
   console.log("server is running on port 3000");
 }); 

 }
main (); 