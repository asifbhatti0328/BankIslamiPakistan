import mongoose from 'mongoose';

const withdrawalSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId,ref:'user',required:true },
    withdrawalMethod: {type:String,required:true},
    accountTittle: {type:String,required:true},
    accountNo: {type:String,required:true},
    withdrawalAmount: {type:Number,required:true},
    withdrawalStatus: {type:String,default:'pending'},
    transactionId: {type:Number,required:true},
    createdAt: {type:Date,default:Date.now},
})

const withdrawalModel= mongoose.models.withdrawal || mongoose.model('withdrawal', withdrawalSchema);
export default withdrawalModel;
