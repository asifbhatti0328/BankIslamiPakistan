import bindAccountModel from '../models/bindAccountModel.js'
import userModel from '../models/userModel.js'


//Route for user accountBind
const accountBind = async (req, res) => {
    try {
        const { bindMethod, bindAccountTitle,bindAccountNo,userId } = req.body; 
         const newAccountBind= new bindAccountModel({
            bindMethod,
             bindAccountTitle,
             bindAccountNo,
             userId
         });

         const accountBind= await newAccountBind.save();
         console.log(accountBind);
        res.json({ success: true,accountBind });


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

//Route for user accountfind
const accountfind = async (req, res) => {
    try {
        const {userId} = req.body;
        const bindAccount= await bindAccountModel.findOne({userId: userId});
        res.json({ success: true,bindAccount});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}


export {accountBind,accountfind};