import React from "react";
import ExploreIconData from '../assets/DiscovereventData/ExporeData'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";

function ExploreOptions() {
    const getIcons = ExploreIconData()
    

    return (
        <div className="mb-56 w-[100%]">
            
            <div className="exploreIcons w-[100%] h-[240px] flex items-center py-[20px] text-[#2d2d2e] relative ">

                <div  className="absolute top-[28%] left-0 bg-[#000] opacity-100 w-[20px] h-[34px] rounded-e-[50px] cursor-pointer hover:opacity-50 transition-all "><span className="absolute top-[9px] text-[15px] font-normal text-white"><FaChevronLeft/></span></div>

                <div className="absolute top-[28%]  right-0 bg-[#d9d9d9d0] opacity-80 w-[20px] h-[34px] rounded-s-[50px] cursor-pointer hover:opacity-100 transition-all "><span className=" absolute top-[9px] pl-[5px] text-[15px] font-normal "><FaChevronRight/></span></div>
                <div className=" w-[100%] h-[100%] overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide pl-2 pr-2" id="slider">
                    {getIcons.map(icon => (
                        <div key={icon.id} className=" h-[100%] inline-block py-7 px-5 mx-2  text-[16px] ">
                            <div className="border-[1px] border-[#2d2d2e] rounded-[50%] w-[68px] h-[68px] flex items-center justify-center hover:border-[#5a45f7] hover:bg-[#a2d7f5] cursor-pointer">
                                <img src={icon.IconImage} alt={icon.title} className="w-[24px]" />
                            </div>
                            <span className="capitalize flex justify-center pt-1 hover:text-[#5a45f7] cursor-pointer">{icon.title}</span>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ExploreOptions