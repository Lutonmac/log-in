
import Link from 'next/link'
import React from 'react'
import styles  from "../output.module.css";




export default function Homepage() {
  return (
    <div className={``}>
  
        <nav className='py-3 -mt-2'>
      
         
        
            <ul className={`flex bg-blue-500 text-white justify-between p-2`}>
             
               <Link href={`#`}><li className='bg-blue-700 p-2 px-3 rounded-md shadow-white shadow-sm'>Home</li></Link> 
               <Link href={`/application`}> <li className='bg-blue-700 p-2 px-6 rounded-md shadow-white shadow-sm'>App</li></Link>
               <li><input type="text" name="" id="" placeholder='Email' className='p-2 text-black hidden md:block md:relative rounded-md md:left-56 placeholder:p-1 '/></li> 
               <li><input type="password" name="" id="" placeholder='Password'className='p-2 hidden md:block text-black md:relative rounded-md md:left-32'/></li>
               <Link href={`/login`} ><li className='text-black bg-blue-800 p-2 px-4 md:relative md:left-8 rounded-[5px] shadow-sm  shadow-white'>Login</li> </Link>
               <Link href={`/signup`}><li className='text-black bg-blue-800 md:relative md:right-16 p-2 px-4 rounded-[5px] shadow-sm shadow-white'>Sign Up</li></Link> 
            </ul> 
            <div >
            <hr />
            </div>
        </nav>
   
    </div>
  )
}


 export function Resetpassword() {
  return (
    <div>
      <Link href={`/forgetpassword`}> <span className='bg-gray-200 px-4 rounded-lg text-blue-400'> -&gt;</span></Link>
    </div>
  )
}


