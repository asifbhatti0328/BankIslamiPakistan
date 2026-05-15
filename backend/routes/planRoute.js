import express from 'express'
import {findPlan,createPlan} from '../controllers/planController.js'



const createPlanRouter= express.Router();
const findPlanRouter= express.Router();




createPlanRouter.post('/investment-plan',createPlan);
findPlanRouter.get('/investment-plans',findPlan);


export { findPlanRouter,createPlanRouter};

