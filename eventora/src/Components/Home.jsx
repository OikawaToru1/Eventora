import React from 'react'
import Header from './Header/Header'
import Button from './Button'
import { FaChevronRight } from "react-icons/fa6"
import homeImg1 from "../assets/homepage-img1.avif";
import homeImg2 from '../assets/homepage-img2.avif';
import homeImg5 from "../assets/homepage-img5.jpg";
import homeImg6 from "../assets/homepage-img6.jpg";
// import homeImg4 from '../assets/homepage-img4.avif'

function Home() {
  return (
    <div className='w-full h-screen'>
      <div className='homepage-background relative h-[100%] w-[100%]'>
        <div className=''>
        <img src={homeImg5} alt="background" className='img rounded-[16px] w-[180px] h-[160px] object-cover drop-shadow-2xl absolute top-[8%] right-[5%] xl:w-[200px] xl:h-[170px] xl:right-[7%]'/>
        <img src={homeImg1} alt="background" className='img rounded-[16px] w-[180px] h-[160px] object-cover drop-shadow-2xl absolute top-[22%] right-[13%] xl:top-[36%]' />
        <img src={homeImg5} alt="background" className='img rounded-[16px] w-[200px] h-[160px] object-cover drop-shadow-2xl absolute top-[32%] right-[20%]  xl:top-[54%]' />
        <img src={homeImg2} alt="background" className='img rounded-[16px] w-[220px] h-[109px] object-cover drop-shadow-2xl absolute top-[50%] right-[1.5%]  xl:top-[62.5%] invisible lg:visible' />
        <img src={homeImg6} alt="background" className='img rounded-[16px] w-[180px] h-[110px] object-cover drop-shadow-2xl absolute top-[60%] right-[13%] xl:top-[80.4%] invisible lg:visible' />
        <img src={homeImg6} alt="background" className='img rounded-[16px] w-[220px] h-[120px] object-cover drop-shadow-2xl absolute top-[32%] right-[21.9%] xl:top-[16.3%] invisible xl:visible' />
        <img src={homeImg2} alt="background" className='img rounded-[16px] w-[220px] h-[160px] object-cover drop-shadow-2xl absolute top-[50%] right-[30%]  xl:top-[34.5%]' />
        
        </div>
        <div className='text-[32px] text-transparent bg-gradient-to-r  from-[#f55e5e]  to-[#7fbde7] bg-clip-text font-bold absolute top-[12%] left-[8%] flex flex-col gap-2 md:text-[40px] lg:text-[50px] xl:left-[12%]'>
          {/* <h1 className='text-[30px] font-bold'>Welcome</h1> */}
          <div>
            <h2>Don't Miss a Chance</h2> 
            <h2 className='pl-[106px] md:pl-[130px] lg:pl-[170px]'>TO</h2>
            <h2>Create memories</h2>
          </div>
            <h2 className='text-gray-600 text-[12px] text-center pr-[36px] lg:text-[16px] md:text-[14px] pt-1 font-semibold'>Enjoy every moment to the fullest</h2>         
        </div>
        <div className='w-[280px] absolute top-[44%] left-[6.8%] hover:text-[#cb7deb] text-white lg:w-[300px] md:top-[51%] md:left-[11.4%] lg:top-[58.5%] lg:left-[14%] xl:left-[17%] 
        '>
          <Button >
          {`Let's Create Memories`}
          <span className='absolute top-[21px] right-10 lg:right-[50px]'><FaChevronRight/></span>
          </Button>
        </div>
      </div>

    </div>
  )
}

export default Home