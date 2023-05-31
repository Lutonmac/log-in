import Link from 'next/link'
import React from 'react'
import Loginpage from './page'
import { Resetpassword } from '../component/navbar'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";

export default function Layout() {
  return (
    <div className={`md:hidden sm:hidden grid justify-center md:ml-[460px] p-10`}>
    <div className={` bg-blue-500 p-10 shadow-black shadow-2xl text-white`}>
      <div className="">
       <h2 className={`text-[30px]`}>Login</h2>
       <p>Hello! let&apos;s get started</p>
       
       </div>
       <br />
       <div className={`py-10`}>
        <input type="text" name="" id="" placeholder='Email' className={`p-1 text-black rounded-md`}/>
        </div>
          <div className={``}>
          <input type="password" name="" id="" placeholder='Password' className={`p-1 text-black rounded-md`}/>
       </div>
       <div className="py-14 flex">
       <span className='px-1'>Forgotten password? Reset</span>  
         <Resetpassword />
    
        
       </div>
       <div className="flex justify-center gap-4">
        <span className="text-white -mt-6 py-2 text-[20px] rounded-md px-3 bg-slate-400  ">
          <a href='facebook.com'><FaFacebookF  className=''/></a> 
      </span>
      <span className="text-white -mt-6 p-2 text-[20px] px-3 rounded-md bg-slate-400  ">
      <a href="gmail.com"> <FcGoogle /></a>
       </span>
       <span className="text-white -mt-6 py-2 text-[23px] px-3 rounded-md bg-slate-400  ">
         <a href="https://support.apple.com/en-ng/HT204053"> <AiOutlineApple /></a>
       </span>
      </div>
      
    </div>
  </div>
  )
}
