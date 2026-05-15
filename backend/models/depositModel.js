import mongoose from 'mongoose';

const depositSchema = new mongoose.Schema({
    userId: {type:String,required:true },
    depositMethod: {type:String,required:true},
    accountHolderName: {type:String,required:true},
    accountNumber: {type:String,required:true},
    depositAmount: {type:Number,required:true},
    depositStatus: {type:String,default:'pending'},
    createdAt: {type:Date,default:Date.now},
})

const depositModel= mongoose.models.deposit || mongoose.model('deposit', depositSchema);
export default depositModel;
