import express from 'express'
import { accountBind,accountfind} from '../controllers/bindAccountController.js';



const bindAccountRouter= express.Router();
const findAccountRouter= express.Router();



bindAccountRouter.post('/withdraw/bindAccount',accountBind);
findAccountRouter.post('/withdraw/findAccount',accountfind);


export {bindAccountRouter,findAccountRouter};

