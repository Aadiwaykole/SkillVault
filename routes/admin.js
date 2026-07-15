const {Router }= require("express");


const {adminModel} = require("../db");
const jwt = require("jsonwebtoken");
const {z} = require ("zod");
const bcrypt = require("bcrypt");
const {JWT_ADMIN_PASSWORD} = require("../config");

const {adminMiddleware} = require("../middleware/admin")



const adminRouter = Router();

const adminSignupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().min(2),
    lastName: z.string().min(2)
});



adminRouter.post("/signup", async (req, res) => {

    const result = adminSignupSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Invalid input",
            errors: result.error.issues
        });
    }

    const { email, password, firstName, lastName } = result.data;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        await adminModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        });

        res.json({
            message: "Admin signup successful"
        });

    } catch (err) {

        res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });

    }

});

adminRouter.post("/signin", async (req, res) => {

    const result = adminSigninSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Invalid input",
            errors: result.error.issues
        });
    }

    const { email, password } = result.data;

    try {

        const admin = await adminModel.findOne({
            email
        });

        if (!admin) {
            return res.status(404).json({
                message: "Admin not found"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            admin.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
                id: admin._id
            },
            JWT_ADMIN_PASSWORD
        );

        res.json({
            token
        });

    } catch (err) {

        res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });

    }

});

 adminRouter.post ("/course", adminMiddleware ,async function (req, res){
    const adminId = req.userId; 

    const {title, description, imageUrl} = req.body ; 
     
    //creating a web3 saas in 6 hours
    try{
        const course = await courseModel.create({
            title, 
            description, 
            imageUrl,
            price ,
            creatorId: adminId
        })
        res.josn ({
            message :" Course created",
            courseId: course._id
        });
    }catch(err){
        res.status(500).json({
            message: "something went wrong",
            error : err.message
        });
    }
    
 })

 adminRouter.get ("/course/bulk", function (req, res){
    res.json ({
        message: "signup endpoint"
    })
 })





 module.exports = {
    adminRouter: adminRouter
 }