import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'
import Calender from '../assets/DiscovereventData/calender.png'
import altImagae from '../assets/altImage.jpeg'
// import altImage from '../assets/homepage-img3.jpg'
function PostCard({$id, title, featuredImage,location}) {
  const imageUrl = appwriteService.getPreview(featuredImage)

  return (
  <>
    <Link to={`/post/${$id}`}>
        {/* <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div> */}
  
        <div className="text-[19px] w-[100%] h-[480px] flex justify-evenly items-center relative px-auto">
            <div className=" h-[100%] inline-block p-7 lg:p-6"  >
              <div className="hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] rounded-t-[16px] rounded-b-[16px] transition-all cursor-pointer" >
                <img src={imageUrl ? altImagae : altImagae } alt={title} className="w-[220px] h-[190px] object-cover rounded-t-[16px]" />
                <div className="bg-[#f3f3f3] w-[220px] rounded-b-[16px] pl-3 py-3">
                  <span className="underlineGray">{title}</span>
                  <div className="flex items-center gap-2">
                    <img src={Calender} alt="calender" className="w-5 h-5 "/>
                    {/* <div className="underlineGray ">{item.eventdate}</div> */}
                  </div>
                  <span className="capitalize underlineGray">{location}</span>
                  {/* <div className="flex justify-end pr-4 text-[22px]">{item.eventPrice}</div> */}
                </div>

              </div>

            </div>
        </div>
        </Link>
        </>
  )
}


export default PostCard