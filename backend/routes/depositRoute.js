import express from 'express'
import {depositUser,findDepositsUser} from '../controllers/depositController.js'
import authUser from '../middlewares/auth.js'



const depositRouter= express.Router();
const findDepositsRouter= express.Router();



depositRouter.post('/deposit',authUser,depositUser);
findDepositsRouter.post('/deposits-records',authUser,findDepositsUser);


export  {findDepositsRouter,depositRouter};

