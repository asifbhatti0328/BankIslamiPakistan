import { assets } from '../assets/assets'
import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../context/shopContext'


const Navbar = () => {
  const [visible, setvisible] = useState(false);
    const {setToken,navigate} = useContext(ShopContext);
  

  const logout = () => {
    navigate('/user/login')
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    setToken('');
  }



  return (
    <div className='border-b fixed z-50 top-0 w-[100%] lg:w-[86%] bg-white flex items-center justify-between  py-1.5 font-medium'>
      <NavLink to={'/'}>
        <img src={assets.islamic_bank} className='h-[2.9rem]' alt="" />
      </NavLink>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to={'/'} className='flex flex-col items-center gap-1'>
          <p className='text-blue-900'>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to={'/deposit'} className='flex flex-col items-center gap-1'>
          <p className='text-blue-900'>Deposit</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to={'/withdrawal'} className='flex flex-col items-center gap-1'>
          <p className='text-blue-900'>Withdraw</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>



      </ul>

      <div className='flex items-center gap-8 px-8'>
        <NavLink to={'/notifaction'}>
          <i class="fa-regular navbar-icon text-blue-900 fa-bell"></i>
        </NavLink>

          <i  onClick={logout} class="fa-solid  navbar-icon fa-power-off text-blue-900"></i>

        <NavLink to={'/menu'}>
          <i onClick={() => setvisible(true)} class="fa-solid  navbar-icon fa-bars md:hidden text-blue-900"></i>
        </NavLink>


      </div>


      <div className={`absolute top-0 right-0 bottom-0 bg-black transition-all ${visible} `}></div>
    </div>

  )
}

export default Navbar
