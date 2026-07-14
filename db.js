// const mongoose = require('mongoose');
// const schema = mongoose.Schema;
const mongoose =  require('mongoose');
console.log("mongoose connected")

const Schema  = mongoose.Schema; 

const ObjectId = mongoose.Types.ObjectId;


const userSchema   =  new Schema({
    email:{type: String, unique: true},
    password: String,
    firstname: String,
    lastName: String,
})

const adminSchema = new Schema({
    email:{type: String, unique: true},
    password: String,
    firstname: String,
    lastName: String,
    
})

const CourseSchema = new  Schema({
    _id: ObjectId,
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId,
})

const purchaseSchema = new Schema({
    _id : ObjectId,
    courseId : ObjectId,
    userId : ObjectId
});



const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", CourseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports ={
    userModel,
    adminModel,
    courseModel, 
    purchaseModel
}
