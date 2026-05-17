import planModel from '../models/planModel.js'


//Route for create investment plans
const createPlan = async (req, res) => {
    try {

        const { title, description, returnRate, duration, investmentRange, locked, investTime, investedPeople,min,max} = req.body;
        const newPlan = new planModel({
            title,
            description,
            returnRate,
            duration,
            investmentRange,
            locked,
            investTime,
            investedPeople,
            min,
            max,
        });

        const plan = await newPlan.save();
        res.json({ success: true, plan });


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

// Route for find investmentPlans
const findPlan = async (req, res) => {
    try {
        const investmentPlans = await planModel.find({});
        res.json({ success: true, investmentPlans });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });

    }
}


export {findPlan , createPlan };