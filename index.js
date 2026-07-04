const express = require('express');
const {UserRouter} = require('./routes/user.js');

const app = express();


 
 app.post ("/course/purchase", (req, res) => {
    res.json({
        message: "courses endpoint "
    })

 });

 
 app.get ("/courses", (req, res) => {
    res.json({
        message: "courses endpoint "
    })

 });


 app.use("/user", userRouter);
 app.use("/course", courseRouter);