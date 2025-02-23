import React,{useEffect,useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from '../../appwrite/config.js'
import '../../App.css'
import parse from 'html-react-parser'
import { useSelector } from "react-redux";
import getEventsData from "../../assets/DiscovereventData/DiscoverEventsData.js";

import {CarousalSlider, Title,Container,CardSlide} from '../../Components/index.js'
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import EventOrganized from "../EventOrganized.jsx";
import AboutEvent from "../AboutEvent.jsx";
import { isExpired } from "./dateValidate.js";
import { copyToClipboard } from "./copyToClipboard.js";


function Post(){

  const [img, setImg] = useState(null)
  const [post, setPost] = useState()
  const {slug} = useParams()
  const navigate = useNavigate()
  const userData = useSelector((state)=> state.auth.userData);
  const [isAuthor,setIsAuthor] = useState(false)

  useEffect(()=>{
    if(slug)
    {
        appwriteService.getPost({slug})
        .then((post)=>{
          setPost(post);
        })
    }
    else{
      navigate('/')
    }
  },[slug,navigate]);

  const deletePost = ()=>{
    appwriteService.deletePost(post.$id)
    .then((status)=>{
      if(status){
        appwriteService.deleteFile(post.featuredImage);
        navigate('/home')
      }
    })
  }
  useEffect(()=>{
    if(post)
    {
      appwriteService.getFilePreview(post.featuredImage).then((res)=> {setImg(res.href)});

    }
  },[post])

  useEffect(()=>{
    if(post && userData)
    {
      setIsAuthor(post.userId === userData.$id);

    }
  },[post, userData])
  
  
  return post ? (

    <div className="w-[100vw]">
        {isAuthor && (
                    
                    <div className="flex gap-8 justify-end pr-6 ">
                    <Link to={`/edit-form/${post.$id}`}>
                        <button className="text-center px-3 w-[120px] py-2 bg-gradient-to-r from-[#9232b8b4] to-[#cb7deb] text-white
rounded-3xl mt-2 font-medium hover:text-[#9232b8b4] hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:border hover:border-[#9232b8b4]">
                            Edit
                        </button>
                    </Link>
                    <button onClick={deletePost} className="text-center px-3 w-[120px] py-2 bg-gradient-to-r from-[#9232b8b4] to-[#cb7deb] text-white
rounded-3xl mt-2 font-medium hover:text-[#9232b8b4] hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:border hover:border-[#9232b8b4]">
                            Delete
                        </button>
                    </div>
            
            )}
         

            <div className="mt-8 w-[100%] h-[400px] relative" >
                <div className="w-[98%] h-[100%] relative">
                    <img src={img} alt={post.title}  className="w-[100%] h-[100%] object-cover object-center blur-lg opacity-80" />

                    <div className="w-[100%] absolute top-8 pl-[5%] flex flex-col gap-2 lg:text-[22px] text-white capitalize">
                        <div className="text-[19px] lg:text-[25px] cursor-pointer">
                            {post.title}
                        </div>
                        <div className="flex items-center gap-[6px] cursor-pointer ">
                            <span><MdOutlineDateRange size={26} /></span>
                            <span className="pt-[6px]">{post.date ? post.date :"December 22"}</span>
                        </div>
                        <div className="flex items-center gap-[6px] cursor-pointer">
                            <span><FaRegClock size={24} /></span>
                            <span className="pt-[6px] lowercase">{"7pm onwards"}</span></div>
                        <div className="flex items-center gap-[6px] cursor-pointer">
                            <span><IoLocationOutline size={24} /></span>
                            <span className="pt-[6px]">{post.location}</span>
                        </div>
                        <div className="flex items-center gap-[6px] cursor-pointer">
                        {isExpired(post.date) &&<div><span className='bg-red-700 p-1 rounded-md'>Expired Event</span></div>}
                        </div>
                    </div>
                    <div className="absolute top-[78%] left-[10%] flex gap-10">
                        <div className="cursor-pointer bg-white px-[32px] py-[9px] rounded-[18px] flex justify-center items-center gap-2">
                            <span className="text-[17px] font-normal">Price(Rs):</span>
                            <span className="font-medium text-[20px]">{post.price ? post.price : "Free"}</span>
                        </div>
                        {post.ticketUrl ? <Link to={post.ticketUrl}><div className="cursor-pointer bg-white px-[32px] py-[9px] rounded-[18px] flex justify-center items-center gap-2">
                            <span className="text-[17px] font-normal">Ticket here</span>
                        </div></Link> : ""}
                        
                    </div>

                    <div className="w-[160px] h-[180px] absolute top-11 right-[8%] border border-[#fffdfd] rounded-[15px] md:w-[240px] md:h-[280px]
                md:right-[4%]">
                        <img src={img} alt={post.title}  className="object-fit w-[100%] h-[100%] rounded-[15px]" />
                    </div>
                   <div className="flex items-center gap-2 absolute top-[60%] md:top-[88%] right-[8%] md:right-[5.5%] text-white md:text-xl font-medium">
                        <span>Share with others:</span>
                       <button onClick={()=> copyToClipboard(window.location.href)}> <span className="cursor-pointer text-[18px] md:text-3xl hover:bg-red-800 "><FiShare2 /></span></button>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-between mt-3 w-[100%] px-14
             ">
            <EventOrganized />
            <AboutEvent data={parse(post.content)}/>   
            {/* <div className="browser-css">
                {parse(post.content)}
                </div> */}
            </div>
            <div className="mx-auto w-[90%] flex justify-center border-t border-[#a7a7a7] pt-9 mt-9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1543.243149941013!2d83.95791130966269!3d28.21848454335478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595c5e0a9d091%3A0x6a3b91c084de6188!2sClub%20Catwalk!5e0!3m2!1sen!2snp!4v1737122440878!5m2!1sen!2snp"  height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-[84vw] lg:w-[88vw]"></iframe>
            </div>
            
            <div>
        {/* <Container className='mt-10'>
        <Title text={"Discover Events"}/>
        <CardSlide/>
      </Container> */}
        </div>
        </div>
        
) : <h1 className="flex justify-center align-middle text-4xl h-full -mb-80">Loading ...</h1>;
}

export default Post;