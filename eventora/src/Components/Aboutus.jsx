import React from 'react'
import '../App.css';
import homeImg1 from "../assets/homepage-img1.avif";
import homeImg5 from "../assets/homepage-img5.jpg";
import homeImg4 from "../assets/homepage-img4.jpg";
import Shisheer from "../assets/team-member-shisheer.jpg";
import Sijan from "../assets/team-member-sijan.jpg";
import Chandan from "../assets/team-member-chandan.jpg";
import Anil from "../assets/team-member-anil.jpg"
import {BsGithub} from "react-icons/bs";
function Aboutus() {
  const teamMemberDetails = [
    {
      id: 1,
      memberImg: Chandan,
      name: 'Chandan Tiwari',
      github: 'https://github.com/Chandan5689/',
    },
    {
      id: 2,
      memberImg: homeImg1,
      name: 'Aniket Adhikari',
      github: 'https://github.com/OikawaToru1/',
    },
    {
      id: 3,
      memberImg: Sijan,
      name: 'Sijan Chand Thakuri',
      github: '',
    },
    {
      id: 4,
      memberImg: Anil,
      name: 'Anil Poudel',
      github: 'https://github.com/aneel74/',
    },
    {
      id: 5,
      memberImg: Shisheer,
      name: 'Shisheer Chhantel',
      github: '',
    },
  ]
  return (
    <div className='w-full h-full mt-7'>
        <div className='text-transparent bg-gradient-to-r  from-[#f55e5e]  to-[#7fbde7] bg-clip-text text-[40px] text-center flex flex-col'>
          <span className='font-bold'>About Us</span>
          <span className='border border-[#a7a7a7] mx-auto h-[2px] w-[100px]'></span>
          
        </div>
      <div className='w-[100%] mx-auto '>
        <div className='flex flex-col gap-20 md:gap-28 py-10 md:py-16'>
          
          <div className='w-[80%] mx-auto md:flex md:gap-20'>
            <img src={homeImg4} alt="image" className='shadow-[20px_10px_10px_rgba(0,0,0,0.40)] w-[300px] h-[280px] object-cover ml-12' /> 
            <div className='md:w-[50%] py-12 mx-auto text-[20px] lg:text-2xl flex flex-col text-justify'>
              <span>
                <b> Welcome to  Eventora</b>, your ultimate destination for discovering and experiencing unforgettable events. Whether you're seeking live music, exciting festivals, or professional conferences, we are here to connect you with the moments that matter.
              </span>
            </div>
          </div>

            <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row'>
              
              <div className='md:w-[50%] py-12 mx-auto text-[20px] lg:text-2xl flex flex-col text-justify'>
              <span>
              Our mission is to bring people together through extraordinary events. We believe in the power of connection and strive to make every event accessible, enjoyable, and unforgettable for everyone
              </span>
              </div>
              <img src={homeImg5} alt="image" className='shadow-[20px_10px_10px_rgba(0,0,0,0.40)] md:shadow-[-20px_10px_10px_rgba(0,0,0,0.40)] w-[300px] h-[280px] object-cover ml-10' />
            </div>

        </div>

        <div className='w-[70%] py-12 mx-auto text-[20px] lg:text-2xl'>
          <span>
            <b>Eventora</b> was founded in 2024 with a passion for helping people discover experiences they’ll cherish forever. It started with a small team of enthusiasts who understood the thrill of being part of something special.
          </span>
        </div>

      </div>
      <div className='border-t border-[#a7a7a7] w-[90vw] mx-auto'></div>
      <div className=' w-[90vw] mx-auto py-10'>
        <h2 className='font-bold text-3xl'>Our Team:</h2>
        <div className='mt-7 grid gap-6 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-0 xl:mx-auto ' >
          {
            teamMemberDetails.map(team => (
              <div className='flex gap-4 items-center xl:flex-col xl:justify-start w-[100%]' key={team.id}>
                <div className='border-[2px] p-1 rounded-full hover:border-t-[#f528e4] hover:border-b-[#7fbde7] hover:border-l-[#f528e4] hover:border-r-[#7fbde7] transition-all'>
                  <img src={team.memberImg} alt="Member Image" className='w-[160px] h-[160px] object-cover rounded-full cursor-pointer' />
                </div>

                <div className='flex flex-col gap-[2px]'>
                  <span className='text-[16px] font-medium'>{team.name}</span>
                 
                  <span className='pt-2 text-center flex justify-center'><a href={team.github}><BsGithub size={26}/></a></span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Aboutus