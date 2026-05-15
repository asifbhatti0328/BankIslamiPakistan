import React, { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { ShopContext } from '../context/shopContext'


const Home = () => {
  const { token, backend_Url, } = useContext(ShopContext);
  const [userData, setuserData] = useState(()=> {
    const savedUserData= localStorage.getItem('userData');
    return savedUserData ? JSON.parse(savedUserData) : [];
  })
;

  const loaduserData = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backend_Url + '/user', {}, { headers: { token } });
      setuserData(response.data.user);
      localStorage.setItem("userData", JSON.stringify(response.data.user));
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    loaduserData();
 }, []) 




 

  const [show, setshow] = useState(false);



  const data = async () => {
    setshow(!show);
  };





  return (
    <div className='py-[70px]'>
      <div className='h-[9rem] md:hidden w-[100%] opacity-90 box-availableBalance rounded'>
        <div className='px-5 py-0 text-white'>
          <div className='flex items-center justify-between'>

            <div>
              <div className='py-1'>
                <h1>Welcome</h1>
                <h1 className='text-1xl font-bold'>{userData.fullName}</h1>
                <h1>{userData.phone}</h1>
              </div>

              <div className='py-1'>
                <h1>AvailableBalance</h1>
                {show ? <h1 className='text-2xl font-bold'>PKR {userData.availableBalance.toLocaleString()}<span className='text-[15px]'>.00</span></h1> : <h1 className='text-2xl font-bold'>*********</h1>}
              </div>
            </div>

            <div onClick={data}>
              {show ? <h1 className='mr-[5rem] hide cursor-pointer'><i class="fa-solid fa-eye-slash"></i> Hide</h1>
                : <h1 className='mr-[5rem] hide cursor-pointer'> <i class="fa-solid fa-eye"></i> Show</h1>}
            </div>

          </div>

        </div>
      </div>

      <div className='w-[100%] md:hidden h-[7rem] rounded bg-slate-100  my-3 flex items-center justify-around'>
        <NavLink to={'/deposit'}>

          <div className='h-[5rem] border w-[5rem] rounded box flex items-center justify-center'>
            <div>
              <div className='flex items-center justify-center'>
                <i class="fa-solid fa-wallet navbar-icon text-blue-900"></i>
              </div>
              <h1 className='text-blue-900'>Deposit</h1>
            </div>
          </div>
        </NavLink>

        <NavLink to={'/withdrawal'}>
          <div className='h-[5rem] w-[5rem] border rounded box flex items-center justify-center'>
            <div>
              <div className='flex items-center justify-center'>
                <i class="fa-solid fa-sack-dollar navbar-icon text-blue-900"></i>
              </div>
              <h1 className='text-blue-900'>Withdraw</h1>
            </div>
          </div>
        </NavLink>


        <div className='h-[5rem] w-[5rem] border rounded box flex items-center justify-center'>
          <div>
            <div className='flex items-center justify-center'>
              <i class="fa-solid fa-money-bill navbar-icon text-blue-900"></i>
            </div>
            <h1 className='text-blue-900'>Transfar</h1>
          </div>
        </div>

      </div>

      <div className='box-b rounded md:hidden h-[7.7rem] w-[100%] text-blue-900'>
        <div className='h-[50%] flex items-center justify-around'>
          <div className='text-center'>
            <h1>Total Deposit</h1>
            <h1 className='text-1xl font-bold'>{userData.totalDeposit}</h1>
          </div>
          <div className='text-center'>
            <h1>Total Invest</h1>
            <h1 className='text-1xl font-bold'>{userData.totalInvest}</h1>
          </div>
        </div>
        <div className='w-[100%] h-[50%] flex items-center justify-center'>
          <div className='text-center'>
            <h1>Total Withdraw</h1>
            <h1 className='text-1xl font-bold'>{userData.totalWithdraw}</h1>
          </div>
        </div>
      </div>

      <div className='w-[100%] md:hidden h-[7rem] rounded my-1 flex items-center justify-around'>

        <a href="https://chat.whatsapp.com/IsCH37RWDky9ljjnT6NUXm">
          <div className='h-[5rem] border w-[5rem] rounded box flex items-center justify-center'>
            <div>
              <div className='flex items-center justify-center'>
                <i class="fa-brands fa-whatsapp text-blue-900 navbar-icon"></i>
              </div>
              <h1 className='text-blue-900 text-center'>Group</h1>
            </div>
          </div>
        </a>

        <a href="https://wa.me/923275549545?text=Welcome to WhatsApp BankIslami Pakistan. How can I help you?%20">
          <div className='h-[5rem] w-[5rem] border rounded box flex items-center justify-center'>
            <div>
              <div className='flex items-center justify-center'>
                <i class="fa-brands fa-whatsapp text-blue-900 navbar-icon"></i>
              </div>
              <h1 className='text-blue-900 text-center '>Contact</h1>
            </div>
          </div>
        </a>

        <div className='h-[5rem] w-[5rem] border rounded box flex items-center justify-center'>
          <div>
            <div className='flex items-center justify-center'>
              <i class="fa-solid fa-users text-blue-900 navbar-icon"></i>
            </div>
            <h1 className='text-blue-900 text-center'>Invite</h1>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home
