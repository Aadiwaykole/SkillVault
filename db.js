// const mongoose = require('mongoose');
// const schema = mongoose.Schema;

const {Schema} = requre("mongoose");
const ObjectId = Schema.ObjectId;


const UserSchema   =  Schema({
    email: String,
    password: String,
    Firstname: String,
    lastName: String,
})

const adminSchema = Schema({
    
})

const CourseSchema =  Schema({
    _id: ObjectId,
    title: String,
    description: String,
    price: Number,
    inageUrl: String,
    creatorId: ObjectId,
})

const purchaseSchema = Schema({

});


const userModel = mongoose.model("user", UserSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course  ", CourseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);


