import React, { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { ShopContext } from '../context/shopContext'


const DepositsRecords = () => {
  const { token, backend_Url, } = useContext(ShopContext);
  const [deposit, setdeposits]= useState([]);


  const savedUserData = localStorage.getItem('userData');
  const userdata = (JSON.parse(savedUserData));
  const userId = userdata._id;


  const loadDeposits = async () => {
    try {
      const response = await axios.post(backend_Url + '/deposits-records', { userId });
      const deposits= response.data.depositsData;
      setdeposits(deposits.reverse());
      // for (const deposit of deposits) {
      //   console.log(deposit);
      // }
    } catch (error) {
      console.log(error)
    }
  }


    useEffect(() => {
    loadDeposits();
  }, [token])


  return (
    <div className='py-[70px]'>

      <div className='flex h-[2rem] pl-2 mb-5 w-[70%] items-center justify-between'>
        <NavLink to={'/'}>
          <i class="fa fa-chevron-left mr-[4rem] ml-[1rem] font-bold text-black" aria-hidden="true"></i>
        </NavLink>

        <h1 className='text-[1.1rem] font-bold text-black'>Deposit Records</h1>
      </div>


      <div className='bg-black/5 p-2 rounded text-center'>
    {
      deposit.length && 
      <div>
        {
          deposit.map((item, index)=> (
            
        <div key={index} className='bg-white flex flex-col justify-between border border-[1px solid black] w-full h-[250px] rounded p-3 mb-8'>


          <div className='flex items-center justify-between'>
            <p className='font-bold'>Deposit Amount</p>
            <p className='font-bold text-yellow-500'>{item.depositAmount.toLocaleString()}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='font-bold'>Bank Name</p>
            <p className='font-bold text-yellow-500'>{item.depositMethod}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='font-bold'>Account Holder</p>
            <p className='font-bold text-yellow-500'>{item.accountHolderName}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='font-bold'>Account Number</p>
            <p className='font-bold text-yellow-500'>{item.accountNumber}</p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='font-bold'>Date</p>
            <p className='font-bold text-yellow-500'>{new Date(item.createdAt).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',hour12: true }).replace(/\//g, '-')}</p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='font-bold'>Status</p>
            <p className='font-bold text-yellow-500'>{item.depositStatus}</p>
          </div>



        </div>
                  ))
        }


      </div>
    }

      </div>
      <div className='text-center pt-2'>
        {deposit.length ?
          <h1 className='text-1xl font-bold'>No more</h1> :
          <h1 className='text-1xl font-bold'>Data Not found.</h1>
        }
      </div>

    </div>
  )
}

export default DepositsRecords
