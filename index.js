const express = require('express');

const app = express();

 app.post ("/user/sighnup", (req, res) => {
    res.json({
        message: "signup endpoing "
    })

 });

 
 app.post ("/user/signin", (req, res) => {
    res.json({
        message: "signin endpoint "
    })

 });

 
 app.get ("/user/purchases", (req, res) => {
    res.json({
        message: "purchases endpoint "
    })

 });

 
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