import express from 'express'
import {withdrawalUser} from '../controllers/withdrawalController.js'



const withdrawalRouter= express.Router();




withdrawalRouter.post('/withdraw',withdrawalUser);

export {withdrawalRouter};

