import React from "react";
import getEventsData  from "../assets/DiscovereventData/DiscoverEventsData.js";
// import { getDiscoverImages } from "../data/DiscoverImages";
// import Traditional2 from "../assets/DiscovereventData/traditional.png";
import {Header, Footer, CarousalSlider, Title, DiscoverIcons, ExploreOptions,Container,CardSlide,Banner} from '../Components/index'
import '../App.css'
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";
import Traditional from '../assets/DiscovereventData/traditional.png'
import EventOrganized from "../Components/EventOrganized";
import AboutEvent from "../Components/AboutEvent";


function EventDetail() {
    const getEventData = getEventsData()
    // const [current, setCurrent] = useState(0);
   
    return (
        <div className="w-[100vw]">
         

            <div className="mt-8 w-[100%] h-[400px] relative" >
                <div className="w-[98%] h-[100%] relative">
                    <img src={Traditional}  className="w-[100%] h-[100%] object-cover object-center blur-lg opacity-80" />

                    <div className="w-[100%] absolute top-8 pl-[5%] flex flex-col gap-2 lg:text-[22px] text-white capitalize">
                        <div className="text-[19px] lg:text-[25px] cursor-pointer">
                            {"Cultural Dance"}
                        </div>
                        <div className="flex items-center gap-[6px] cursor-pointer ">
                            <span><MdOutlineDateRange size={26} /></span>
                            <span className="pt-[6px]">{"December 22"}</span>
                        </div>
                        <div className="flex items-center gap-[6px] cursor-pointer">
                            <span><FaRegClock size={24} /></span>
                            <span className="pt-[6px] lowercase">{"7pm onwards"}</span></div>
                        <div className="flex items-center gap-[6px] cursor-pointer">
                            <span><IoLocationOutline size={24} /></span>
                            <span className="pt-[6px]">{"Lakeside, Pokhara"}</span>
                        </div>
                    </div>
                    <div className="absolute top-[70%] left-[10%] flex gap-10">
                        <div className="cursor-pointer bg-white px-[32px] py-[9px] rounded-[18px] flex justify-center items-center gap-2">
                            <span className="text-[17px] font-normal">Price:</span>
                            <span className="font-medium text-[20px]">{"Free"}</span>
                        </div>
                    </div>

                    <div className="w-[160px] h-[180px] absolute top-11 right-[8%] border border-[#fffdfd] rounded-[15px] md:w-[240px] md:h-[280px]
                md:right-[4%]">
                        <img src={Traditional}  className="object-fit w-[100%] h-[100%] rounded-[15px]" />
                    </div>
                    <div className="flex items-center gap-2 absolute top-[60%] md:top-[88%] right-[8%] md:right-[5.5%] text-white md:text-xl font-medium">
                        <span>Share with others:</span>
                        <span className="cursor-pointer text-[18px] md:text-3xl"><FiShare2 /></span>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-between mt-3 w-[100%] px-14
             ">
            <EventOrganized/>
            <AboutEvent/>   
            </div>
            <div className="mx-auto w-[90%] flex justify-center border-t border-[#a7a7a7] pt-9 mt-9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1543.243149941013!2d83.95791130966269!3d28.21848454335478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595c5e0a9d091%3A0x6a3b91c084de6188!2sClub%20Catwalk!5e0!3m2!1sen!2snp!4v1737122440878!5m2!1sen!2snp"  height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-[84vw] lg:w-[88vw]"></iframe>
            </div>
            
            <div>
        <Container className='mt-10'>
        <Title text={"Discover Events"}/>
        <CardSlide/>
      </Container>
        </div>
        </div>

    )
}

export default EventDetail