import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='border-t md:hidden fixed bottom-0 w-[100%] z-30 bg-white flex items-center justify-between py-1 px-1 font-medium'>

        <NavLink to={'/'}>
         <div className='flex flex-col items-center gap-1 px-1'>
          <i class="fa-solid  navbar-icon fa-house md:hidden text-blue-900"></i>
         <p className='text-blue-900'>Home</p>
         </div>
         </NavLink>

         <NavLink to={'/invest'}>
         <div className='flex flex-col items-center gap-1 px-7'>
         <i class="fa-solid  navbar-icon fa-money-bill-transfer md:hidden text-blue-900"></i>
         <p className='text-blue-900'>Invest</p>
         </div>
         </NavLink>


         <NavLink to={'/progress'}>
         <div className='flex flex-col items-center gap-1 px-6'>
         <i class="fa-solid fa-circle-half-stroke navbar-icon md:hidden text-blue-900"></i>
         <p className='text-blue-900'>Progress</p>
         </div>
         </NavLink>

   
         <NavLink to={'/profile'}>
         <div className='flex flex-col items-center gap-1 px-5 mr-1'>
         <i class="fa-solid  navbar-icon fa-user md:hidden text-blue-900"></i>
         <p className='text-blue-900'>Profile</p>
         </div>
         </NavLink>




    </div>
  )
}

export default Footer
