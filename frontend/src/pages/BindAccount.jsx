import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import axios from 'axios'


const BindAccount = () => {
  const { token, navigate, backend_Url, } = useContext(ShopContext);
  const savedUserData = localStorage.getItem('userData');
  const userdata = (JSON.parse(savedUserData));
  const userId = userdata._id;
  const [userToken, setUserToken] = useState([]);

  const [bindMethod, setbindMethod] = useState('');
  const [bindAccountTitle, setbindAccountTitle] = useState('');
  const [bindAccountNo, setbindAccountNo] = useState('');



  const submitInfo = async (e) => {
    e.preventDefault();
    if (!bindMethod || !bindAccountTitle || !bindAccountNo) {
      alert('Please fill in all the fields.');
      return;
    }
    setUserToken(token);

    try {
      if (userToken) {
        const response = await axios.post(backend_Url + '/withdraw/bindAccount', { userId, bindMethod, bindAccountTitle, bindAccountNo });
        console.log(response.data);
        if (response.data.success) {
          navigate('/withdrawal')
        } else {
          console.log(response.data.message);
        }

      }
    } catch (error) {
      console.log(error.message);
    }

  }

  return (
    <div className='mt-[4rem]'>
      <div className='flex h-[2rem] pl-2 w-[60%] items-center justify-between'>
        <NavLink to={'/'}>
          <i class="fa fa-chevron-left mr-[4rem] ml-[1rem] font-bold text-black-900" aria-hidden="true"></i>
        </NavLink>

        <h1 className='text-1xl font-bold text-black-900'>Bind Account</h1>
      </div>

      <div className='p-3'>

        <h1 className=' text-2xl font-bold py-2'>Account Details :</h1>



        <form onSubmit={submitInfo}>
          <div className='w-[100%]'>
            <select required  onChange={(e) => setbindMethod(e.target.value)} name="" id="" className='w-[100%] border rounded px-5 h-[4rem] mt-3'>
              <option>Select Bank</option>
              <option value="Meezan Bank">Meezan Bank Limited (MBL)</option>
              <option value="United Bank">United Bank Limited (UBL)</option>
              <option value="Mcb Bank">MCB Bank (MCB)</option>
              <option value="Alflha Bank">Alflha Bank Limited (ABL)</option>
              <option value="National Bank">National Bank Of Pakistan (NBP)</option>
              <option value="Bank Of Punjab">Bank Of Punjab (BOP)</option>
              <option value="Habib Bank">Habib Bank Limited (HBL)</option>
              <option value="Easypaisa">Easypaisa</option>
              <option value="JazzCash">JazzCash</option>
              <option value="UPaisa">U Paisa</option>
            </select>
          </div>



          <div className='my-3'>
            <input onChange={(e) => setbindAccountTitle(e.target.value)} value={bindAccountTitle} required className='w-[100%] px-5 py-5 border rounded' type="text" placeholder='Account Holder Name' />
          </div>

          <div className='my-3'>
            <input onChange={(e) => setbindAccountNo(e.target.value)} value={bindAccountNo} required className='w-[100%] px-5 py-5 border rounded' type="number" placeholder='Account Number' />
          </div>



          <div className='py-10 mb-10'>
            <button className='w-[100%] opacity-90 py-4 text-1xl font-bold text-white bg-blue-900 border-none rounded'>Bind Account</button>
          </div>


        </form>

      </div>
    </div>

  )
}

export default BindAccount
