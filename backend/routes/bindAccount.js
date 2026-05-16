import express from 'express'
import { accountBind,accountfind} from '../controllers/bindAccountController.js';
import authUser from '../middlewares/auth.js'




const bindAccountRouter= express.Router();
const findAccountRouter= express.Router();



bindAccountRouter.post('/withdraw/bindAccount',authUser,accountBind);
findAccountRouter.post('/withdraw/findAccount',authUser,accountfind);


export {bindAccountRouter,findAccountRouter};

