import React,{useState,useEffect} from 'react'
import appwriteService from '../../appwrite/config'
import Card from './Card'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link,useNavigate } from 'react-router-dom';
import {PostCard, ComedyPostCard, ConcertPostCard} from '../index'
function CardSlide({showPost}) {
  const slideLeft = () => {
    let slider = document.getElementById('sliderDis');
    slider.scrollLeft = slider.scrollLeft - 250;
  }

  const slideRight = () => {
    let slider = document.getElementById('sliderDis');
    slider.scrollLeft = slider.scrollLeft + 250;
  }

  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    appwriteService.getPosts().then((posts)=>{
      if(posts)
      {
        setPosts(posts.documents);
        console.log("post cha")
      }
    })
  },[setPosts,navigate])
  return (
    <div className='w-[100%] flex '>
      <div onClick={slideLeft} className="z-10 absolute top-[42%] left-0 w-[32px] h-[54px] rounded-e-[50px] cursor-pointer transition-all"><span className="text-[32px] font-medium absolute top-[13px]"><FaChevronLeft /></span></div>
      <div onClick={slideRight} className="z-10 absolute top-[42%] right-0 w-[32px] h-[54px] rounded-s-[50px] cursor-pointer  transition-all"><span className="absolute top-[13px] text-[32px] font-medium  "><FaChevronRight /></span></div>
      {showPost ? 
      <div className=" w-[100%] h-[100%] overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide flex lg:justify-center mx-auto" id="sliderDis">

        <div className='w-full  flex mb-10'>
          {
            posts.map((post)=>(
              <div key={post.$id} > 
              <PostCard {...post}/>
              </div>
            ))
          }

        </div>
      </div>
       :
      <div className=" w-[100%] h-[100%] overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide flex lg:justify-center mx-auto" id="sliderDis">
        <div className='flex w-full'>
          <div className=''>
          <Card/>  
          </div>
        </div>
    </div>}
    </div>
  )
}

export default CardSlide