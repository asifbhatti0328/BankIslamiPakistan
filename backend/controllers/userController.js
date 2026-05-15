import userModel from '../models/userModel.js'
import validator from "validator"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//Route for user login
const loginUser = async (req, res) => {
    try {
        const {phone,password}= req.body;
        const user= await userModel.findOne({phone});

        if(!user) {
            return res.json({success:false, message: "user doesn't exists"});
        }

        const isMatch= await bcrypt.compare(password,user.password);

        if(isMatch){
            const token= createToken(user._id);
            res.json({success:true, token});
        }else{
          res.json({success:false, message:"Invalid Password"})  
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}


//Route for user Register
const registerUser = async (req, res) => {
    try {
        const { fullName,email, phone, password } = req.body;



        //checking user email already exists or not 
        const existsEmail = await userModel.findOne({ email });
        if (existsEmail) {
            return res.json({ success: false, message: "User email already exists" })
        }

        //checking user phone already exists or not 
        const existsPhone = await userModel.findOne({ phone });
        if (existsPhone) {
            return res.json({ success: false, message: "User phone already exists" })
        }

        //validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        //validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        //validating phone format
        if (!validator.isMobilePhone(phone)) {
            return res.json({ success: false, message: "Please enter a valid phone number" });
        }

        //validating strong phone
        if (phone.length < 11) {
            return res.json({ success: false, message: "Please enter a 11 digit number" });
        }



        //hashing user password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            fullName,
            email,
            phone,
            password: hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


export { loginUser, registerUser };