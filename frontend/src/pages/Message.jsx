import React from 'react'

const Message = ({ msg }) => {

  setTimeout(() => {
    document.querySelector('.message').style.display = 'none';
  }, 5000);
  return (          
        <div className={`${msg.length  <20 ? 'h-[100px]' : 'h-[150px]'} message z-40 flex items-center w-[80%] fixed top-[4rem] left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded`} >
          <h1 className='text-lg font-bold'>{msg}</h1>
        </div>
  )
}

export default Message
