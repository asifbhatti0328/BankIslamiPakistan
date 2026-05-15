import depositModel from '../models/depositModel.js'
import userModel from '../models/userModel.js'
import mongoose from 'mongoose';


//Route for user deposit
const depositUser = async (req, res) => {
    try {
        const { userId,depositMethod, depositAmount,accountHolderName,accountNumber } = req.body;

        const newDeposit = new depositModel({
            depositMethod,
            accountHolderName,
            accountNumber,
            depositAmount,
            userId: userId,
        })

        const deposit = await newDeposit.save();
        res.json({ success: true, deposit })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}



//Route for user deposits find
const findDepositsUser = async (req, res) => {
    try {
        const {userId} = req.body;
        const depositsData= await depositModel.find({userId});
        res.json({ success: true, depositsData });


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });

    }
}


export {depositUser,findDepositsUser};