import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const PlanInfo = () => {
  const [investAmount, setinvestAmount] = useState('');
  const location = useLocation();
  const plan = location.state.plan;

  const onChangeHandler = (e) => {
    if (e.target.value <= plan.max) {
      setinvestAmount(e.target.value);
    }
    e.preventDefault();
  }


  let profit = (investAmount * plan.returnRate) / 100;


  return (
    <div className='mt-[5rem]'>
      <div className='flex h-[2rem] pl-2 w-[80%] items-center justify-between'>
        <NavLink to={'/invest'}>
          <i class="fa fa-chevron-left mr-[4rem] ml-[1rem] font-bold text-black" aria-hidden="true"></i>
        </NavLink>

        <h1 className='text-1xl font-bold text-black'>{plan.title}</h1>
      </div>
      <form action="">
        <div className='p-3 pt-4 mt-8'>
          <h1 className=' text-[0.8rem] font-bold text-center text-blue-500'> Available Balance : PKR 50000 </h1>
          <h1 className=' text-3xl pt-3 font-bold text-center text-yellow-500'>PKR {investAmount} </h1>

          <h1 className=' font-1xl py-2 font-bold text-center'>Please Add Amount between</h1>
          <h1 className=' font-1xl py-2 font-bold text-center'>{plan.investmentRange}</h1>

          <div className='flex items-center justify-center'>
            <input required min={plan.min} max={plan.max} value={investAmount} onChange={onChangeHandler} className='w-[50%] px-5 py-5 border rounded' type="Number" />
          </div>


          <h1 className=' font-1xl py-2 font-bold text-center'>Daily Profit {plan.returnRate}% = {profit}</h1>
          <h1 className=' font-1xl py-2 font-bold text-center'>Total Profit {plan.returnRate}% * {plan.duration} = {profit * plan.duration}</h1>
          <h1 className=' font-1xl py-2 font-bold text-center'>Return + Profit = {profit * plan.duration + parseInt(investAmount)}</h1>



          <div className='py-10 mb-10'>
            <button className='w-[100%] opacity-90 py-4 text-1xl font-bold text-white bg-blue-900 border-none rounded'>Invest</button>
          </div>

        </div>

      </form>
    </div>

  )
}

export default PlanInfo
