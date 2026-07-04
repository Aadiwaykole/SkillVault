const express = require('express');
const {UserRouter} = require('./routes/user.js');
const {courseRouter} = require("./routes/course.js");
const {adminRouter} = require("./routes/admin.js");

const app = express();

 app.use("/api/v1/user", UserRouter);
 app.use("/api/v1/admin",adminRouter);
 app.use("/api/v1/course", courseRouter);

 app.listen(3000, () => {
    console.log("server is running on port 3000");
 }); 