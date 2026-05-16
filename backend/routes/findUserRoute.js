import express from 'express'
import findUser from '../controllers/findUserControler.js'
import authUser from '../middlewares/auth.js'



const findUserRouter= express.Router();


findUserRouter.post('/user',authUser,findUser);

export default findUserRouter;

