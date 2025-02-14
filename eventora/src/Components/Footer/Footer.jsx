import React from 'react'
import { Link } from 'react-router-dom'
import { BsTwitterX, BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

function Footer() {

  return (
    <div className='w-[90vw] mx-auto h-32 mt-7 border-t border-[#a7a7a7] inset-x-0 bottom-0 '>
      <div className='flex flex-col items-center w-full pt-6 gap-2'>
        {/* <div className='font-medium text-lg'>
          <ul>
            <li><Link to=''>DiscoverEvents</Link></li>
          </ul> 
        </div> */}
        
        <div className='flex gap-10' >
          <a href="https://github.com/"><BsGithub size={24} /></a>
          <a href='https://x.com/?lang=en'><BsTwitterX size={24} /></a>
          <a href="https://www.linkedin.com"><BsLinkedin size={24} /></a>
          <a href='https://www.facebook.com/'><BsFacebook size={24}/></a>
        </div>
        <div className=''>
          <ul className='flex gap-8 font-medium'>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/about-us'}>About us</Link></li>
            <li><Link to={'/about-us'}>Our Team</Link></li>
          </ul>
        </div>
        <div className='text-md font-normal '>
          <ul className=''>
            <li><Link to=''>©Eventora,2024</Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer