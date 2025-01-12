import React, { useState } from "react";
import profileImage from '../../assets/profile2.png'
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

function Header() {
    const [isOpen,setisOpen] = useState(false);
 

    return (
        <div className='header sticky top-0 py-2 flex h-18 w-[100%] justify-between px-6 qitems-center  z-30 bg-white text-[19px]'>
            <h1 className=' xl:pl-6 lg:pl-3 xl:text-[21px] '>Eventora</h1>

            <div className='search-box flex justify-between items-center border-black border-[1px] rounded-[18px]  text-[20px] py-[8px] md:w-[390px] xl:w-[510px]'>
                <input className='ml-2 indent-4 outline-none placeholder:text-[#666666] md:w-[100%]' type="text" name="" id="" placeholder='Search your events...' />
                <div className='pr-3'>
                   <FiSearch size={25}/>
                </div>
            </div>
            <section className='mobile-sidebar flex'>
                <div onClick={() => { prompt("Im") }} className='menu-btn  pl-1 cursor-pointer text-[22px] flex items-center justify-center lg:hidden '><TfiMenu /></div>
                <div className='close-btn fixed top-3 right-3 pl-1 cursor-pointer text-[22px] hidden'><IoClose />
                </div>
                <ul className='header-link-items items-center font-medium gap-12 hidden lg:flex lg:pr-8 xl:pr-24 xl:text-[21px]'>
                    <li className="underlineRed cursor-pointer hover:text-[#f50606] delay-100"> About Us</li>
                    <li className="underlineRed cursor-pointer hover:text-[#f50606]"> Add Event</li>
                </ul>

                <div className='profile pb-2 hidden lg:flex xl:pr-5'><img className='h-[45px] w-[45px] cursor-pointer' src={profileImage} alt="profile" /></div>
            </section>

        </div>
    )
}

export default Header