import express from 'express'
import {withdrawalUser} from '../controllers/withdrawalController.js'
import authUser from '../middlewares/auth.js'



const withdrawalRouter= express.Router();




withdrawalRouter.post('/withdraw',authUser,withdrawalUser);

export {withdrawalRouter};

