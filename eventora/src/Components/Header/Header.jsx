import React, { useEffect, useState } from "react";
import profileImage from '../../assets/profile2.png'
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo1.png"

function Header() {
    const [isOpen,setisOpen] = useState(false);
    // const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()
    const [input, setInput] = useState("");
    const userStatus = useSelector(state => state.auth.status)
    const handleSearch = (event)=>{
        setInput(event.target.value)
    }
    
 

    return (
        <div className='header sticky top-0 py-2 flex h-18 w-[100%] justify-between px-6 qitems-center  z-30 bg-white text-[19px]'>
            <div className=' xl:pl-6 lg:pl-3 xl:text-[21px] '>
                <Link to={'/home'}>
                    <img src={Logo} alt="Eventora" className="w-[90px] border-none " />
                </Link>
            </div>

            <div className='search-box flex justify-between items-center border-black border-[1px] rounded-[18px]  text-[20px] py-[8px] md:w-[390px] xl:w-[510px]'>
                <input className='ml-2 indent-4 outline-none placeholder:text-[#666666] md:w-[100%]' type="text" name="" id="" placeholder='Search your events...'
                    value={input}
                    onChange={handleSearch}
                />
                <div className='pr-3'>
                   
                   <button className=" p-2 rounded-lg" title="Search" onClick={()=>{
                    if(input)
                    {
                        alert(`${input} search gardim`)
                        navigate(`/${input}`)
                        setInput("")
                    }
                    else{
                        setInput("Write some event first !!!")
                    }
                   }}>
                    <div className="flex gap-2 items-center">
                        <span><FiSearch size={22}/></span>
                   </div>
                    
                   </button>
                </div>
            </div>
            <section className='mobile-sidebar flex'>
                <div className='menu-btn  pl-1 cursor-pointer text-[22px] flex items-center justify-center lg:hidden'><TfiMenu /></div>
                <div className='close-btn fixed top-3 right-3 pl-1 cursor-pointer text-[22px] hidden'><IoClose />
                </div>
                <ul className='header-link-items items-center font-medium gap-12 hidden lg:flex lg:pr-8 xl:pr-24 xl:text-[21px]'>
                    <li className="underlineRed cursor-pointer hover:text-[#f50606] delay-100"> <Link to={'/about-us'}>About Us</Link></li>
                    <li className="underlineRed cursor-pointer hover:text-[#f50606]"> <Link to={'/post-form'}>Add Event</Link></li>
                    {
                        userStatus ?  <li className="underlineRed cursor-pointer hover:text-[#f50606]"> <LogoutBtn/> </li> : 
                        <li className="underlineRed cursor-pointer hover:text-[#f50606] delay-100"> <Link to={'/signup'}>Sign Up</Link></li>
                    }
                    
                </ul>

                <div className='profile pb-2 hidden lg:flex xl:pr-5'><Link to={'/login'}><img className='h-[45px] w-[45px] cursor-pointer' src={profileImage} alt="profile" /></Link></div>
            </section>

        </div>
    )
}

export default Header