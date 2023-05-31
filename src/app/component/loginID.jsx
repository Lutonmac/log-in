import React from 'react'
import {MdHorizontalRule  } from "react-icons/md";
import { RiVoiceprintFill } from "react-icons/ri";
import { BsMic } from "react-icons/bs";
import styles from "../output.module.css";

export default function LoginID() {
  return (
    <div>
        <div className= {`px-8 py-[36px] md:w-[30%] hidden md:block shadow-2xl ${styles.container} shadow-black md:-mt-[508px] md:ml-[345px]`} >
            <div>
            <div className='py-[25px] text-white'>
                <h1 className="text-[30px]">Speak your</h1>
                <p>Login ID & Password</p>
            </div>
            <div className=" flex text-[37px] py-20 text-white md:-ml-1">
                <MdHorizontalRule />
                <RiVoiceprintFill />
                <span className="flex">
                    <RiVoiceprintFill />
                    <MdHorizontalRule />
                    <span className="">
                        <span className="">
                            <span className="flex md:ml-36">
                                <span className="rounded-md ">
                                    <BsMic />
                                </span>
                            </span>
                        </span>
                    </span>

                </span>

            </div>
            <div className="md:-mt-10">
                <input type="text" name="" id="" placeholder='example@gmail.com' className={`p-2 rounded-md bg-gray-300 `} />
                <br />
                </div>
                <div className='py-5'>
                <input type="password" name="" id="" placeholder='Password' className={`p-2 rounded-md bg-gray-300`} />
            </div>
        </div>
        </div>
    </div>
  )
}
