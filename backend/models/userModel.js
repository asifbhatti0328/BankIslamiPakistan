import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    availableBalance: { type: Number, default: 50000 },
    totalDeposit: { type: Number, default: 0 },
    totalInvest: { type: Number, default: 0 },
    totalWithdraw: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;
