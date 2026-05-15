import React from 'react'
import { assets } from '../assets/assets'


const Profile = () => {
 
    function copyUsername() {
    let text= document.getElementById("copyUsername").innerText;
    let remove5= document.getElementById("remove5");
    remove5.classList.remove('hidden');
    setTimeout(() => {
      remove5.classList.add('hidden') 
    }, 1000);
    navigator.clipboard.writeText(text).then(()=> {
    });
}



  return (
    <div className='py-[70px]'>

             <div id='remove5' className='md:hidden hidden z-50 h-[5rem] w-[94%] fixed top-[4rem] left-2.5'>
          <div className='flex items-center justify-center bg-blue-900 py-2 text-white'>
            <h1>Username Copied</h1>
          </div>

        </div>



      <div className='flex justify-center items-center relative'>
        <img className='rounded-full h-[100px] w-[100px]' src={assets.profile_img} alt="profile" />
        <div className='bg-blue-900 absolute left-[51%] top-[75px] profile-border rounded-full font-bold w-[30px] h-[30px] flex items-center justify-center text-white'>+</div>
      </div>
      <div className='flex items-center justify-center mt-4 ml-8'>
        <h1 className='text-[1.2rem] font-bold text-center mr-1'>Code Error </h1>
        <button className='text-[0.8rem] ml-1 rounded-full bg-slate-200 py-1 px-4'>Edit</button>
      </div>
      <p id='copyUsername'  className='text-center text-[0.9rem] opacity-[0.4] cursor-pointer' onClick={copyUsername}>@software_engineer</p>

      <div className='bg-white mb-1 mt-4 h-[50px] w-[full] flex items-center justify-around'>

        <div className=' text-center'>
          <h1 className='font-bold text-[1.2rem] '>10,000</h1>
          <p className='text-[0.9rem] opacity-[0.5]'>Total Deposits</p>
        </div>

        <div className='profile_info h-[1.8rem]'></div>


        <div className=' text-center'>
          <h1 className='font-bold text-[1.2rem] '>16,411</h1>
          <p className='text-[0.9rem] opacity-[0.5]'>Total Withdraws</p>
        </div>



      </div>

      <div className='bg-white mb-1 mt-4 h-[50px] w-[full] flex items-center justify-around'>

        <div className=' text-center'>
          <h1 className='font-bold text-[1.2rem] '>1,500</h1>
          <p className='text-[0.9rem] opacity-[0.5]'>Deposit Commissions</p>
        </div>

        <div className='profile_info h-[1.8rem]'></div>


        <div className=' text-center'>
          <h1 className='font-bold text-[1.2rem] '>1,638</h1>
          <p className='text-[0.9rem] opacity-[0.5]'>Refral Commissions</p>
        </div>


      </div>


      <div className='bg-white mb-1 mt-4 h-[50px] w-[full] flex items-center justify-around'>

        <div className=' text-center'>
          <h1 className='font-bold text-[1.2rem] '>1,295</h1>
          <p className='text-[0.9rem] opacity-[0.5]'>Reinvest Commissions</p>
        </div>

        <div className='profile_info h-[1.8rem]'></div>


        <div className=' text-center'>
          <h1 className='font-bold text-[1.2rem] '>1,978</h1>
          <p className='text-[0.9rem] opacity-[0.5]'>Extra Rewards</p>
        </div>


      </div>

        <div className='my-9'>  
      <div className='w-[100%] px-5 h-[4rem] mt-3 border rounded'>
        <h1 className='font-bold text-1xl'>Name</h1>
        <div className='flex items-center justify-between '>
          <h1 className=''>Muhammad Asif</h1>
        </div>
      </div>


      <div className='w-[100%] px-5 h-[4rem] mt-3 border rounded'>
        <h1 className='font-bold text-1xl'>Username</h1>
        <div className='flex items-center justify-between '>
          <h1 className=''>@software_engineer</h1>
        </div>
      </div>


      <div className='w-[100%] px-5 h-[4rem] mt-3 border rounded'>
        <h1 className='font-bold text-1xl'>Email</h1>
        <div className='flex items-center justify-between '>
          <h1 className=''>asifbhatti03467323@gmail.com</h1>
        </div>
      </div>


      <div className='w-[100%] px-5 h-[4rem] mt-3 border rounded'>
        <h1 className='font-bold text-1xl'>Phone</h1>
        <div className='flex items-center justify-between '>
          <h1 className=''>03463054558</h1>
        </div>
      </div>
              <div className='py-10 mb-10'>
          <button className='w-[100%] py-4 text-1xl font-bold text-white bg-red-700 border-none rounded'>Delete Account</button>
        </div>

      </div>
      
    </div>

  )
}

export default Profile
