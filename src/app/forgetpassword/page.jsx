import React from 'react'

export default function Forgetpassword() {
  return (
    <div>
    <div className="px-8 py-[46px] w-[80%] ml-14 justify-center md:w-[30%] grid grid-cols-1 grid-rows-3 bg-white shadow-2xl shadow-black md:-mt-[508px] md:ml-[345px]">
        <article className=''>
          <h1>Find Your Account</h1>
          <br />
          <hr />
        </article>
        
        <article className='md:-mt-2'>
          <p className=''>Please enter your email address or mobile number to search for your account.</p> 
          <br />         
          <input type="text" name="" id="" placeholder='Email address or mobile number' className='bg-gray-300 rounded-md p-2'/>
        </article>
        <br />
        <hr className='md:-mt-16'/>
        <article className='py-10 gap-2 flex md:-mt-14 justify-end'>
          <button className='h-10 p-2 bg-gray-400 rounded-[5px] '>Cancel</button>
          <button className='h-10 p-2 bg-green-500 rounded-[5px]'>Search</button>
        </article>
    </div>
</div>
  )
}
