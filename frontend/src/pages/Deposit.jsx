import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/shopContext'
import axios from 'axios'

const Deposit = () => {
  const { token,navigate, backend_Url, } = useContext(ShopContext);
        const savedUserData= localStorage.getItem('userData');
      const userdata= (JSON.parse(savedUserData));
      const userId= userdata._id;
      const [userToken, setUserToken] = useState([]);


  const [accountHolderName, setaccountHolderName] = useState('');
  const [accountNumber, setaccountNumber] = useState('');
  const [depositAmount, setdepositAmount] = useState('');
  const [depositMethod, setdepositMethod] = useState('');


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!accountHolderName || !accountNumber || !depositAmount || !depositMethod) {
      alert('Please fill in all the fields.');
      return;
    }
    setUserToken(token);
    try {
      if (userToken) {
        const response = await axios.post(backend_Url + '/deposit', { userId,accountHolderName, accountNumber, depositAmount, depositMethod });
        console.log(response.data);
        if (response.data.success) {
              navigate('/deposits-records')
        } else {
          console.log(response.data.message);
        }

      }
    } catch (error) {
      console.log(error.message);
    }

  }


  

  function copyBankName() {
    let text = document.getElementById("copyBankName").innerText;
    let remove1 = document.getElementById("remove1");
    remove1.classList.remove('hidden');
    setTimeout(() => {
      remove1.classList.add('hidden')
    }, 1000);
    navigator.clipboard.writeText(text).then(() => {
    });
  }

  function copyAccountHolderName() {
    let text = document.getElementById("copyAccountHolderName").innerText;
    let remove2 = document.getElementById("remove2");
    remove2.classList.remove('hidden')
    setTimeout(() => {
      remove2.classList.add('hidden')
    }, 1000);
    navigator.clipboard.writeText(text).then(() => {
    });
  }

  function copyAccountNumber() {
    let text = document.getElementById("copyAccountNumber").innerText;
    let remove3 = document.getElementById("remove3");
    remove3.classList.remove('hidden')
    setTimeout(() => {
      remove3.classList.add('hidden')
    }, 1000);
    navigator.clipboard.writeText(text).then(() => {
    });
  }



  return (
    <div className='mt-[4rem]'>
      <div className='flex h-[2rem] pl-2 w-[60%] items-center justify-between'>
        <NavLink to={'/'}>
          <i class="fa fa-chevron-left mr-[4rem] ml-[1rem] font-bold text-black-900" aria-hidden="true"></i>
        </NavLink>

        <h1 className='text-1xl font-bold text-black-900'>Deposit</h1>
      </div>

      <div className='p-3'>
        <h1 className=' text-2xl font-bold'>Bank Details :</h1>

        <div className='w-[100%] px-5 h-[4rem] mt-3 border rounded'>
          <h1>Bank Name</h1>
          <div className='flex items-center justify-between '>
            <h1 id='copyBankName' className='font-bold text-1xl'>Meezan Bank</h1>
            <i onClick={copyBankName} class="fa-regular cursor-pointer fa-copy navbar-icon"></i>
          </div>
        </div>


        <div className='w-[100%] px-5 h-[4rem] mt-3 border rounded'>
          <h1>Account Holder Name</h1>
          <div className='flex items-center justify-between '>
            <h1 id='copyAccountHolderName' className='font-bold text-1xl'>Muhammad Asif</h1>
            <i onClick={copyAccountHolderName} class="fa-regular cursor-pointer fa-copy navbar-icon"></i>
          </div>
        </div>

        <div className='w-[100%] px-5 h-[4rem] mt-3 border rounded'>
          <h1>Account Number</h1>
          <div className='flex items-center justify-between '>
            <h1 id='copyAccountNumber' className='font-bold text-1xl'>00300108185581</h1>
            <i onClick={copyAccountNumber} class="fa-regular cursor-pointer fa-copy navbar-icon"></i>
          </div>
        </div>

        <div id='remove1' className='md:hidden hidden h-[5rem] w-[94%] fixed top-[4rem] left-2.5'>
          <div className='flex items-center justify-center bg-black py-2 text-white'>
            <h1>Bank Name Copied</h1>
          </div>

        </div>


        <div id='remove2' className='md:hidden hidden h-[5rem] w-[94%] fixed top-[4rem] left-2.5'>
          <div className='flex items-center justify-center bg-black py-2 text-white'>
            <h1>Account Holder Name Copied</h1>
          </div>

        </div>


        <div id='remove3' className='md:hidden hidden h-[5rem] w-[94%] fixed top-[4rem] left-2.5'>
          <div className='flex items-center justify-center bg-black py-2 text-white'>
            <h1>Account Number Copied</h1>
          </div>

        </div>


        <p className='pt-2 text-red-500'><b>Note: </b> Send amount (You Want to deposit) to the above mentioned
          account. And upload the payment proof below. The amount willbe added to your wallet once admin verify the transaction.
        </p>

        <h1 className=' text-2xl font-bold py-2'>Payment Proof :</h1>



        <form onSubmit={onSubmitHandler}>
          <div className='w-[100%]'>
            <select required onChange={(e) => setdepositMethod(e.target.value)} name="" id="" className='w-[100%] border rounded px-5 h-[4rem] mt-3'>
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
            <input required onChange={(e) => setaccountHolderName(e.target.value)} value={accountHolderName} className='w-[100%] px-5 py-5 border rounded' type="text" placeholder='Account Holder Name' />
          </div>

          <div className='my-3'>
            <input required onChange={(e) => setaccountNumber(e.target.value)} value={accountNumber} className='w-[100%] px-5 py-5 border rounded' type="number" placeholder='Account Number' />
          </div>

          <div className='my-3'>
            <input required onChange={(e) => setdepositAmount(e.target.value)} value={depositAmount} className='w-[100%] px-5 py-5 border rounded' type="number" min={1} max={1000000} placeholder='Amount' />
          </div>

          <div >
            <img className='w-[100%] h-[20rem]' src={assets.upload_area} />
          </div>

          <div className='py-10 mb-10'>
            <button className='w-[100%] opacity-90 py-4 text-1xl font-bold text-white bg-blue-900 border-none rounded'>Deposit</button>
          </div>


        </form>

      </div>
    </div>
  )
}
export default Deposit
