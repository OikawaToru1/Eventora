import React from 'react'
import { Link } from 'react-router-dom'
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className=' h-32 bg-gray-500  inset-x-0 bottom-0 '>
        <div className='flex justify-around pt-6' >
            <a href="https://github.com/"><BsGithub  size={24}/></a>
            <a href='https://x.com/?lang=en'><BsTwitterX  size={24}/></a>
            <a href="https://www.linkedin.com"><BsLinkedin  size={24}/></a>
        </div>

        {/* <div>
           <ul  className='flex pt-6 justify-around '>
            <li><Link to=''>About</Link></li>
            <li><Link to=''>© Eventora</Link></li>
            <li> <Link to=''>Contact</Link></li>
           </ul>
        </div> */}
    </div>
  )
}

export default Footer