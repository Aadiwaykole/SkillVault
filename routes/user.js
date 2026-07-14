
const {userModel} = require("../db");
const {Router}= require("express");
const {z} = require ("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "JSKDFFAKLDJ"

const userRouter = Router();





const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    firstName: z.string().min(2),
    lastName: z.string().min(2)
});

const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});



userRouter.post ("/signup", async(req, res) => {
    console.log("userjs is working perfect")
    const result = signupSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Invalid input",
            errors: result.error.issues
        });
    }

    const { email, password, firstName, lastName } = result.data;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await userModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        })
        res.json({
            message: "signup succeeded "
        });

    } catch (e){
        res.status (500).json ({
            message:"Something went wrong ",
            error: e.message 
        });
    }
   
});

 
userRouter.post("/signin", async (req, res) => {

    // Validation (usually outside try)
    const result = signinSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Invalid input"
        });
    }

    const { email, password } = result.data;

    try {

        // Database
        const user = await userModel.findOne({
            email
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        // JWT
        const token = jwt.sign(
            { id: user._id },
            JWT_USER_PASSWORD
        );

        res.json({
            token
        });

    } catch (err) {

        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });

    }

});
 
 userRouter.get ("/purchases", (req, res) => {
    res.json({
        message: "purchases endpoint "
    })

 });

 module.exports = {
    UserRouter: userRouter
 }