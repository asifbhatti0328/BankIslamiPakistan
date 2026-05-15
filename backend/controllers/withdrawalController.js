import withdrawalModel from '../models/withdrawalModel.js'

//Route for user deposit
const withdrawalUser = async (req, res) => {
    try {
        const { userId, withdrawalInput,withdrawalMethod,accountTittle,accountNo } = req.body;
        const transactionId = Math.floor(Math.random() * 5000000000) + 1;
        const withdrawalAmount = withdrawalInput;


        const newWithdrawal = new withdrawalModel({
            userId,
            accountTittle,
            accountNo,
            withdrawalMethod,
            withdrawalAmount,
            transactionId
        });

       if (!withdrawalAmount) {
        return res.json({ success: false, message: "please enter amount!"});
       } 

        const withdrawal = await newWithdrawal.save();
        console.log(withdrawal)
        res.json({ success: true, withdrawal});

    } catch (error) {
        // console.log(error);
        res.json({ success: false, message: error.message })

    }
}

export {withdrawalUser};