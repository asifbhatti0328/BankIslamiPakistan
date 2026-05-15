import express from 'express'
import {depositUser,findDepositsUser} from '../controllers/depositController.js'



const depositRouter= express.Router();
const findDepositsRouter= express.Router();



depositRouter.post('/deposit',depositUser);
findDepositsRouter.post('/deposits-records',findDepositsUser);


export  {findDepositsRouter,depositRouter};

