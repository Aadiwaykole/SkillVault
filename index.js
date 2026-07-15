require('dotenv').config(); 
console.log(process.env.MONGO_URL)

const express = require('express');
const mongoose = require("mongoose");
const {UserRouter} = require('./routes/user.js');

const {courseRouter} = require("./routes/course.js");
const {adminRouter} = require("./routes/admin.js");

const app = express();
//middleware 
app.use (express.json());
app.get("/", (req, res) => {
    res.send("Server is working");
});
 app.use("/api/v1/user", UserRouter);
 app.use("/api/v1/admin",adminRouter);
 app.use("/api/v1/course", courseRouter);

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB Connected");

        app.listen(3000, () => {
            console.log("Server running");
        });

    } catch (err) {
        console.log(err);
    }
}

main();