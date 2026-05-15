import mongoose from 'mongoose';


const bindAccountSchema = new mongoose.Schema({
    userId: {type: String, required: true },
    bindMethod: { type: String, required: true },
     bindAccountTitle: { type: String, required: true },
    bindAccountNo: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

const bindAccountModel = mongoose.models.bindAccount || mongoose.model('bindAccount', bindAccountSchema);
export default bindAccountModel;
