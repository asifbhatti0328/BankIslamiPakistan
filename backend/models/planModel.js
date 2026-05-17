import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    returnRate: { type: Number, required: true },
    duration: { type: Number, required: true },
    investmentRange: { type: String, required: true },
    locked: { type: Boolean },
    investTime: { type: String, required: true},
    investedPeople: { type: String},
    min: {type: Number, required: true},
    max: {type: Number, required: true},
});

const planModel = mongoose.models.plan || mongoose.model('plan', planSchema);
export default planModel;
