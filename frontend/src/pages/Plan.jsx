import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { ShopContext } from '../context/shopContext'
import { assets } from '../assets/assets'



const Plan = () => {
  const { token,navigate, backend_Url, } = useContext(ShopContext);
  const [investmentPlans, setinvestmentPlans] = useState([]);

  const loadInvestmentPlans = async () => {
    try {
      const response = await axios.get(backend_Url + '/investment-plans');
      const plans = response.data.investmentPlans;
      setinvestmentPlans(plans);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadInvestmentPlans();
  },[token]);



  const handleInvest = (plan) => {
      navigate('/plan-info', { state: { plan } });
  }

  return (
    <div className='mb-[100px]'>

      <div className='py-[70px]'>
        <h1 className=' text-[20px] font-bold text-center'>Investment Offers</h1>
      </div>


      {
        investmentPlans &&
        <div>
          {
            investmentPlans.map((plan, index) => (
              <div key={index} className='p-2 mx-2 my-4 rounded  plans bg-slate-0 shadow-lg'>
                <div className='flex justify-around items-center'>
                  <img className='h-[150px] w-[200px] rounded' src={assets.bike} alt="" />
                  <h2 className='text-yellow-500 font-bold'>{plan.returnRate}%</h2>
                </div>


                <div>
                  <h1 className='text-1xl pl-2 mr-[100px] font-bold'>{plan.title}</h1>
                  <p className='pl-2 py-1 text-[0.6rem] font-bold'>{plan.description}</p>
                  <div className='flex justify-between items-center p-2'>
                    <h1 className='font-bold'>{plan.investmentRange}</h1>
                    {
                      plan.locked ? 
                      <button className='text-[0.7rem] font-bold bg-red-500 text-white px-6 py-3 rounded-full'><i class="fa-solid fa-lock"></i> &nbsp; Locked</button> : 
                      <button onClick={() => handleInvest(plan)} className='text-[0.7rem] font-bold bg-indigo-800 text-white px-6 py-3 rounded-full'>Invest Now</button>
                    }
                  </div>
                </div>



                <div>
                  <div className='px-2'>
                    <hr />
                    <h2 className='text-yellow-500 text-[15px] font-bold pr-5'>{plan.investTime}</h2>
                    <p className='text-black mt-1 text-[0.6rem] font-bold'>{plan.investedPeople}</p>
                  </div>
                </div>
              </div>

            ))
          }
        </div>
      }


    </div>

  )
}

export default Plan




