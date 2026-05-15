import React, { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import axios from 'axios'

const Withdrawal = () => {
  const { token, backend_Url, } = useContext(ShopContext);
  const [userData, setuserData] = useState(() => {
    const savedUserData = localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : [];
  });

  const [userToken, setUserToken] = useState([]);
  const userId = userData._id;
  const [bindAccountData, setBindAccountData] = useState([]);


  let [withdrawalInput, setwithdrawalInput] = useState("");

  let withdrawalInputChnage = (event) => {
    if (event.target.value.length <= 8) {
      setwithdrawalInput(event.target.value);
    }
  }



  const loaduserData = async () => {
    setUserToken(token);

    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backend_Url + '/user', {}, { headers: { token } });
      setuserData(response.data.user);
    } catch (error) {
      console.log(error)
    }

  }


  useEffect(() => {
    loaduserData();
  }, []);


  useEffect(() => {
    loadBindAccountInfo();
  }, [])



  const loadBindAccountInfo = async () => {
    try {
      if (!userToken) {
        return null
      }
      const response = await axios.post(backend_Url + '/withdraw/findAccount', { userId });
      console.log(response.data.bindAccount);
      setBindAccountData(response.data.bindAccount);
    } catch (error) {
      console.log(error)
    }

  }




  return (
    <div className='mt-[4rem]'>
      <div className='flex h-[2rem] pl-2 w-[60%] items-center justify-between'>
        <NavLink to={'/'}>
          <i class="fa fa-chevron-left mr-[4rem] ml-[1rem] font-bold text-black" aria-hidden="true"></i>
        </NavLink>

        <h1 className='text-1xl font-bold text-black'>Withdraw</h1>
      </div>
      <form action="">
        <div className='p-3 pt-4'>
          <h1 className=' text-2xl font-bold text-center'>Available Balance </h1>
          <h1 className=' text-[1.2rem] font-bold text-center text-yellow-500'> {userData.availableBalance.toLocaleString()} </h1>
          <h1 className=' text-3xl pt-3 font-bold text-center text-yellow-500'>PKR {withdrawalInput} </h1>

          <h1 className=' font-1xl py-2 font-bold text-center'>Enter Amount</h1>

          <div className='flex items-center justify-center'>
            <input required min={1} max={500000} value={withdrawalInput} onChange={withdrawalInputChnage} className='w-[50%] px-5 py-5 border rounded' type="Number" />
          </div>

          <div className='flex items-center justify-between mt-10'>
            <h1 className='font-bold'>Withdraw Money To</h1>
            {!bindAccountData &&
              <NavLink to={'/bind-account'}>
                <p className='bg-black/50 cursor-pointer text-white font-bold text-sm  p-2 rounded'>Please bind Account</p>
              </NavLink>

            }
          </div>


          {bindAccountData &&
            <div className='flex items-center justify-around box py-1 mt-6 rounded'>
              <i class="fa-solid fa-building-columns navbar-icon"></i>
              <div className='font-bold'>
                <h1>{bindAccountData.bindMethod}</h1>
                <h1>{bindAccountData.bindAccountTitle}</h1>
                <h1>{bindAccountData.bindAccountNo}</h1>
              </div>
              <i class="fa-solid fa-pencil navbar-icon text-black cursor-pointer"></i>
            </div>
          }
          <p className='pt-3 text-red-500'><b>Note: </b> According to the policy, Service charges will be applicable on every Withdrawal.
          </p>



          <div className='py-10 mb-10'>
            <button className='w-[100%] opacity-90 py-4 text-1xl font-bold text-white bg-blue-900 border-none rounded'>Continue Withdraw</button>
          </div>

        </div>

      </form>
    </div>
  )
}

export default Withdrawal
