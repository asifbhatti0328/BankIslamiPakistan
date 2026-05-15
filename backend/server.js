import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongoose.js'
import userRouter from './routes/userRoute.js'
import {findPlanRouter,createPlanRouter} from './routes/planRoute.js'
import findUserRouter from './routes/findUserRoute.js';
import {findDepositsRouter,depositRouter} from './routes/depositRoute.js'
import {withdrawalRouter} from './routes/withdrawalRoute.js';
import {bindAccountRouter,findAccountRouter} from './routes/bindAccount.js'


//app config
const app = express();
const port = process.env.PORT || 5000;
connectDb();




//middlewares
app.use(express.json());
app.use(cors());

app.listen(port, ()=> {
    console.log(`server started on port ${port}`)
})


//apis endpoints
app.use('/', createPlanRouter);
app.use('/', findPlanRouter);
app.use('/user',userRouter);
app.use('/',depositRouter);
app.use('/',findUserRouter);
app.use('/',withdrawalRouter);
app.use('/',bindAccountRouter);
app.use('/',findAccountRouter);
app.use('/',findDepositsRouter);









app.get('/',(req,res)=> {
    res.send("api working")
});


