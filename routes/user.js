
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

    const result = signinSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Invalid input",
            errors: result.error.issues
        });
    }

    const { email, password } = result.data;

        //TO DO : ideally password should be hashed , and hence you cantcompare the user provided password and database passwrod

    const user = await userModel.find({
        email:email, 
        password: password
    });
        
    if( user){
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD)

        //TO DO COOKIE LOGIC HERE 

        res.json ({
            token : token 
        })
    }

    // Continue with login logic...
    res.json({
        message:"signin successfully"
    })
});

 
 userRouter.get ("/purchases", (req, res) => {
    res.json({
        message: "purchases endpoint "
    })

 });

 module.exports = {
    UserRouter: userRouter
 }