import React from 'react'
import { LuLayoutDashboard, LuPlus } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Md1kPlus, MdLogout } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom'
import Profile from "../assets/profile2.png"

function Sidebar() {
  return (
    <div className='border-r-2 border-[#a7a7a7] h-[100vh] w-[300px] flex flex-col pt-5'>
        <div className='font-medium text-xl w-full pb-4 text-center border-b-2 border-[#a7a7a7]'>
            <span className='text-transparent bg-gradient-to-r  from-[#ff4444]  to-[#96cff5] bg-clip-text'>! Howdy Admin !</span>   
        </div>

        <div className='flex pl-5 text-lg font-medium rounded-xl py-3 pt-6'>
                <NavLink to={'/'} className={({isActive})=> `hover:bg-[#eeeeee] hover:text-[#785bfc] hover:rounded-xl  
                ${isActive?"bg-[#eeeeee] text-[#785bfc] rounded-xl" : "bg-transparent"}`}>
                    <div className='flex pl-4 items-center w-[240px] gap-3 py-2'>
                    <span><LuLayoutDashboard size={28}/></span>
                    <span>Posts</span> 
                    </div>    
                </NavLink>
        </div>
        <div className='flex pl-5 text-lg font-medium rounded-xl py-1'>
                <NavLink to={'/'} className={({isActive})=> `hover:bg-[#eeeeee] hover:text-[#785bfc] hover:rounded-xl  
                ${isActive?"bg-[#eeeeee] text-[#785bfc] rounded-xl" : "bg-transparent"}`}>
                    <div className='flex pl-4 items-center w-[240px] gap-3 py-2'>
                    <span><FaRegUser size={28}/></span>
                    <span>User</span>
                    </div>    
                </NavLink>
        </div>
        <div className='flex pl-5 text-lg font-medium rounded-xl py-1'>
                <NavLink to={'/post-form'} className={({isActive})=> `hover:bg-[#eeeeee] hover:text-[#785bfc] hover:rounded-xl  
                ${isActive?"bg-[#eeeeee] text-[#785bfc] rounded-xl" : "bg-transparent"}`}>
                    <div className='flex pl-4 items-center w-[240px] gap-3 py-2'>
                    <span><FaPlus size={28}/></span>
                    <span>Add Event</span>
                    </div>    
                </NavLink>
        </div>
        
        <div className='flex pl-5 text-lg font-medium rounded-xl py-3'>
                <NavLink to={'/home'} className={({isActive})=> `hover:text-[#ff3030] hover:bg-[#eeeeee] hover:rounded-xl  
                ${isActive?"text-[#ff3030] bg-[#eeeeee] rounded-xl" : "bg-transparent"}`}>
                    <div className='flex pl-4 items-center w-[240px] gap-3 py-2'>
                    <span><MdLogout size={28}/></span>
                    <span>LogOut</span>
                    </div>    
                </NavLink>
        </div>
        
        

            
    </div>
  )
}

export default Sidebar