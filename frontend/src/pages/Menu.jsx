import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets'
import React, { useContext} from 'react'
import { ShopContext } from '../context/shopContext'




const Menu = () => {
    const { token, setToken, navigate } = useContext(ShopContext);
  

    const logout = () => {
    navigate('/user/login')
    localStorage.removeItem('token');
    setToken('');
  }

  return (

    <div className='h-full w-full z-50 bg-transparent absolute top-0 right-0 bottom-0 left-0'>
      <div className="w-[80%] h-full bg-white  menu_box">
        <div className='flex items-center justify-around pt-[20px] mr-[2rem]'>
          <NavLink to={'/'}>
            <i class="fa fa-chevron-left mr-[4rem] font-bold " aria-hidden="true"></i>
          </NavLink>

          <h1 className='font-bold mr-[2rem] text-lg'>Profile</h1>
        </div>

        <div className='flex items-center justify-around mt-[1.5rem]'>
          <div className=''>
            <img className='rounded-full h-[50px] w-[50px]' src={assets.profile_img} alt="profile_img" />
          </div>
          <div>
            <h1 className='font-bold text-[1rem] text-yellow-400'>Welcome Back!</h1>
            <p className='text-center text-[0.9rem] opacity-[0.4]'>Muhammad Asif</p>
          </div>
        </div>


        <div className='flex flex-col text-gray-600 pt-[2rem]'>
          <NavLink className='py-2 pl-6 border menu_link_hover' to={'/'}>Home</NavLink>
          <NavLink className='py-2 pl-6 border menu_link_hover' to={'/deposit'}>Deposit</NavLink>
          <NavLink className='py-2 pl-6 border menu_link_hover' to={'/withdrawal'}>Withdraw</NavLink>
          <NavLink className='py-2 pl-6 border menu_link_hover' to={'/deposits-records'}>Deposits records</NavLink>
          <NavLink className='py-2 pl-6 border menu_link_hover' to={'/withdrawals-records'}>Withdrawals records</NavLink>
          <NavLink className='py-2 pl-6 border menu_link_hover' to={'/wallet-History'}>Wallet History</NavLink>
          <NavLink className='py-2 pl-6 border menu_link_hover' to={'/invite'}>Invite a friend</NavLink>
        </div>

              <div className='py-10 mb-10 flex items-center justify-center'>
          <button onClick={logout} className='w-[50%] py-4 text-1xl font-bold text-white bg-black border-none rounded'>Logout</button>
        </div>

      </div>
    </div>


  )
}

export default Menu
