import React, { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { ShopContext } from '../context/shopContext'
import TextField from '@mui/material/TextField';
import { assets } from '../assets/assets'


const Register = () => {

  const { token, setToken, navigate, backend_Url } = useContext(ShopContext);
  const [fullName, setfullName] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [navigate, token])




  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(backend_Url + '/user/register', { fullName, email, phone, password });
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
      } else {
        console.log(response.data.message);
      }

    } catch (error) {
      console.log(error.message)
    }
  };


  return (
    <div className='py-[30px] pb-[70px]'>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-3 gap-4 text-gray-800' action="">
        <img className='h-[150px] w-[150px] rounded-full' src={assets.logo_login} alt="" />

        <div className='inline-flex items-center gap-2 mb-2'>
          <p className='prata-regular text-black text-3xl font-bold'>Register</p>
        </div>

        <div className='flex items-center justify-end w-full'>
          <h3 className='text-1xl font-bold px-2'>پورا نام درج کریں</h3>
        </div>
        <TextField label="Full Name" variant="outlined" onChange={(e) => setfullName(e.target.value)} value={fullName} className='w-full px-3 py-2' type="text" required />
        <div className='flex items-center justify-end w-full'>
          <h3 className='text-1xl font-bold px-2'>ای میل درج کریں</h3>
        </div>
        <TextField label="Email" variant="outlined" onChange={(e) => setemail(e.target.value)} value={email} className='w-full px-3 py-2' type="email" required />
        <div className='flex items-center justify-end w-full'>
          <h3 className='text-1xl font-bold px-2'>فون نمبر درج کریں</h3>
        </div>
        <TextField label="Phone" variant="outlined" onChange={(e) => setphone(e.target.value)} value={phone} className='w-full px-3 py-2' type="number" required />
        <div className='flex items-center justify-end w-full'>
          <h3 className='text-1xl font-bold px-2'>پاس ورڈ درج کریں</h3>
        </div>
        <TextField label="Password" variant="outlined" onChange={(e) => setpassword(e.target.value)} value={password} className='w-full px-3 py-2' type="password" required />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <NavLink to={'/user/login'}>
            <p className="cursor-pointer">Login Here</p>
          </NavLink>
        </div>

        <button className='box-availableBalance  font-light text-white w-full px-8 py-2 mt-4 '>Register</button>

      </form>

    </div>
  )
}

export default Register
