import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'



//Route for user find
const findUser = async (req, res) => {
    try {
        const token= req.headers.token;
        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        const user= await userModel.findById(decoded.id);
        res.json({ success: true,user})


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

export default findUser;