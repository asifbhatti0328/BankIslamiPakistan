import express from 'express'
import findUser from '../controllers/findUserControler.js'



const findUserRouter= express.Router();


findUserRouter.post('/user',findUser);

export default findUserRouter;

