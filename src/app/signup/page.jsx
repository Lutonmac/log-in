import React from 'react'
import { AiFillQuestionCircle } from "react-icons/ai";

export default function SignUpPage() {
  return (
    <div className='px-10'>
      <div className="px-8  w-[80%] py-3 justify-center md:w-[50%] bg-white shadow-2xl shadow-black md:-mt-[508px]">
        <article className='grid justify-center'>
          <h1 className='text-[24px] font-bold'>Create a new account</h1>
          <p className='text-center'>It&apos;s quick and easy.</p>
          <br />
          <hr />
        </article>
        
        <article className='md:-mt-2'>
  
          <br />         
          <span className="gap-3 py-3 flex">
          <input type="text" name="" id="" placeholder='First Name' className='bg-gray-300 rounded-md w-[50%] p-2'/>
          <input type="text" name="" id="" placeholder='Surname' className='bg-gray-300 rounded-md w-[50%] p-2'/>
          </span>
          <input type="text" name="" id="" placeholder='Mobile number or email address' className='bg-gray-300 rounded-md p-2 w-[100%]' />
          <span className="gap-3 py-3 grid">
          <input type="password" name="" id="" placeholder='New password' className='bg-gray-300 rounded-md p-2 w-[100%]'/>
          </span>
          <div className="p-1">
            <span className="flex text-[12px] ">
            <label htmlFor="date">Date of birth </label><AiFillQuestionCircle className='mt-[3px]' />
            </span>
            <span className="">
              <select name="days" id="" className='px-1'>
                <optgroup>
                  <option value="day1">1</option>
                  <option value="day2">2</option>
                  <option value="day3">3</option>
                  <option value="day4">4</option>
                  <option value="day5">5</option>
                  <option value="day6">6</option>
                  <option value="day7">7</option>
                  <option value="day8">8</option>
                  <option value="day9">9</option>
                  <option value="day10">10</option>
                  <option value="day11">11</option>
                  <option value="day12">12</option>
                  <option value="day13">13</option>
                  <option value="day14">14</option>
                  <option value="day15">15</option>
                  <option value="day16">16</option>
                  <option value="day17">17</option>
                  <option value="day18">18</option>
                  <option value="day19">19</option>
                  <option value="day20">20</option>
                  <option value="day21">21</option>
                  <option value="day22">22</option>
                  <option value="day23">23</option>
                  <option value="day24">24</option>
                  <option value="day25">25</option>
                  <option value="day26">26</option>
                  <option value="day27">27</option>
                  <option value="day28">28</option>
                  <option value="day29">29</option>
                  <option value="day30" selected>30</option>
                  <option value="day31" >31</option>
                </optgroup>
              </select>
            </span>
            <span className="px-2">
              <select name="" id="">
                <optgroup>
                  <option value="january">Jan</option>
                  <option value="february">Feb</option>
                  <option value="march">Mar</option>
                  <option value="april">Apr</option>
                  <option value="may">May</option>
                  <option value="jun">June</option>
                  <option value="july" selected>July</option>
                  <option value="august">Aug</option>
                  <option value="september">Sep</option>
                  <option value="october">Oct</option>
                  <option value="november">Nov</option>
                  <option value="december">Dec</option>
                </optgroup>
              </select>
            </span>
            <span className="">
              <select name="" id="" className=''>
                <optgroup>
                  <option value="year1">2003</option>
                  <option value="year2">2004</option>
                  <option value="year3">2005</option>
                  <option value="year4">2006</option>
                  <option value="year5" selected>2007</option>
                </optgroup>
              </select>
            </span>
            <div className="text-[12px]">
              <p className='py-2'>People who use our service may have uploaded your contact information to Facebook. Learn more.
                </p>
                <p>
                By clicking Sign Up, you agree to our  <a href="https://web.facebook.com/legal/terms/update" target="_blank" className='text-blue-500'> Terms,</a> 
                <a href="https://free.facebook.com/privacy/policy/?wtsid=rdr_0bLw9UXz9bIDJvHkF#" target='_blank' className='text-blue-500'> Privacy Policy</a>  and 
                <a href="https://web.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0" target='_blank' className='text-blue-500'>Cookies Policy. </a>
                You may receive SMS notifications from us and can opt out at any time.</p>
            </div>

          </div>
        </article>
        <br />
        <hr className=''/>
        <article className='py-4 flex justify-center'>
          <button className='bg-green-500 py-2 px-14 rounded-[10px]'>Sign Up</button>
          
        </article>
    </div>
    </div>
  )
}
