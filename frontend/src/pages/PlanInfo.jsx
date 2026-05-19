import React, { useState,useEffect, useContext } from 'react'
import axios from 'axios'
import { NavLink,useParams} from 'react-router-dom'
import Message from '../pages/Message'
import { ShopContext } from '../context/shopContext'

const PlanInfo = () => {
    const { token, navigate, backend_Url, } = useContext(ShopContext);
  const {planId}= useParams();
  const [plan,setPlan]= useState([]);
  const [investAmount, setinvestAmount] = useState('');
  let profit = (investAmount * plan.returnRate) / 100;

  const savedUserData = localStorage.getItem('userData');
  const userdata = (JSON.parse(savedUserData));
  const [msg, setMsg] = useState(null);


    const loadInvestmentPlans = async () => {
    try {
      const response = await axios.get(backend_Url + '/investment-plans');
      const plans = response.data.investmentPlans;
      const p= plans.find(plan => plan._id === planId)
      setPlan(p);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadInvestmentPlans();
  }, [token]);





  const onChangeHandler = (e) => {
    if (e.target.value <= plan.max) {
      setinvestAmount(e.target.value);
    }
          e.preventDefault();
  }



  const investmentHandler = (e) => {
    e.preventDefault
    if (investAmount < plan.min || investAmount > plan.max) {
      setMsg(`Please enter an amount between ${plan.investmentRange}`);
      setTimeout(() => setMsg(null), 5000);
    }

      if (investAmount > userdata.availableBalance) {
        setMsg(`Insufficient Balance. Available Balance: PKR ${userdata.availableBalance.toLocaleString()}`);
        setTimeout(() => setMsg(null), 5000);
        return;
      }

                      console.log("investment done");


  };


  const onsubmitHandler= (e)=> {
  e.preventDefault();
  };

  return (
    <div className='mt-[5rem]'>
      {
        msg ? <Message msg={msg} /> : null
      }

      <div className='flex h-[2rem] pl-2 w-[80%] items-center justify-between'>
        <NavLink to={'/plan'}>
          <i class="fa fa-chevron-left mr-[4rem] ml-[1rem] font-bold text-black" aria-hidden="true"></i>
        </NavLink>

        <h1 className='text-1xl font-bold text-black'>{plan.title}</h1>
      </div>
      <form action="" onSubmit={onsubmitHandler}>
        <div className='p-3 pt-4 mt-8'>
          <h1 className=' text-[0.8rem] font-bold text-center text-blue-500'> Available Balance : PKR {userdata.availableBalance.toLocaleString()} </h1>
          <h1 className=' text-3xl pt-3 font-bold text-center text-yellow-500'>PKR {investAmount} </h1>

          <h1 className=' mt-3 font-1xl font-bold text-center'>Please Add Amount between</h1>
          <h1 className=' font-1xl mb-2 font-bold text-center'>{plan.investmentRange}</h1>

          <div className='flex items-center justify-center'>
            <input placeholder={plan.investmentRange} required min={plan.min} max={plan.max} value={investAmount} onChange={onChangeHandler} className='w-[60%] px-5 py-5 border rounded' type="Number" />
          </div>


          <h1 className=' font-1xl py-2 font-bold text-center'>Daily Profit {plan.returnRate}% = {profit}</h1>
          <h1 className=' font-1xl py-2 font-bold text-center'>Total Profit {plan.returnRate}% * {plan.duration} = {profit * plan.duration}</h1>
          <h1 className=' font-1xl py-2 font-bold text-center'>Return + Profit = {profit * plan.duration + parseInt(investAmount)}</h1>



          <div className='py-10 mb-10'>
            <button onClick={investmentHandler} className='w-[100%] opacity-90 py-4 text-1xl font-bold text-white bg-blue-900 border-none rounded'>Invest</button>
          </div>

        </div>

      </form>
    </div>

  )
}

export default PlanInfo;
