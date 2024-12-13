import React from 'react'
import profileImage from '../../assets/profile2.png'
import searchIcon from '../../assets/search_icon.png'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react'

function Header() {
  
  const [showmenu, setsShowmenu] = useState(false);
  const openMenu = ()=>{
    setsShowmenu(!showmenu)
  }
  
  return (
    <div className='header flex h-28 w-[100%] justify-between px-6 items-center sticky top-0 tablet:gap-3'>
      <Link to='/'><h1 className='text-lg'>Eventora</h1></Link>

      <div className='search-box flex justify-between items-center border-black border-[1px] rounded-[18px] tablet:w-[390px] mac:w-[540px] text-[20px] py-[5px]'>
        <input className='ml-2 indent-4 outline-none placeholder:text-[#666666]' type="text" name="" id="" placeholder='Search your events...' />
        <div className='pr-3'>
          <img className='h-[32px] w-[32px]' src={searchIcon} alt="search" />
        </div>
      </div>
      <section className='mobile-sidebar flex'>
        <div onClick={()=>{prompt("Im")}} className='menu-btn fixed top-3 right-3 pl-1 cursor-pointer text-[22px] tablet:hidden'><i  className='fas fa-bars'></i></div>
        <div className='close-btn fixed top-3 right-3 pl-1 cursor-pointer text-[22px] tablet:hidden'><i className='fas fa-times'></i></div>
        <ul className='header-link-items flex items-center font-medium gap-12 tablet:pr-36 tablet:text-[16px] mac:text-[20px] mac:pr-16'>
          <li> <NavLink to='/aboutus' className={({ isActive }) => `${isActive ? "text-red-600" : "text-black"} hover:text-red-600 `}> About Us </NavLink></li>
          <li><NavLink to='/addevent' className={({ isActive }) => `${isActive ? "text-red-600" : "text-black"} hover:text-red-600`}> Add Event </NavLink></li>
        </ul>
        
        <div className='profile pb-2'><Link to='/profile'><img className='h-[45px] w-[45px]' src={profileImage} alt="" /></Link></div>
      </section>
    </div>
  )
}

export default Header