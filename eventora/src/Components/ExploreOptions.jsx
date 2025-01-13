import React from "react";
import ExploreIconData from '../assets/DiscovereventData/ExporeData'


function ExploreOptions() {
    const getIcons = ExploreIconData()
    return (
            
            <div className=" w-[100%] h-[180px] flex items-center pt-[20px] text-[#2d2d2e] relative ">
                <div className=" w-[100%] h-[100%] overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide pr-2">
                    {getIcons.map(icon =>(
                        <div key={icon.id} className=" h-[100%] inline-block py-7 px-5 mx-2  text-[16px]">
                            <div className="border-[1px] border-[#2d2d2e] rounded-[50%] w-[68px] h-[68px] flex items-center justify-center hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] cursor-pointer hover:scale-110 transition-all ">
                                <img src={icon.IconImage} alt={icon.title} className="w-[24px]" />
                            </div>
                            <div className="capitalize w-[100%] flex justify-center pt-1 cursor-pointer ">
                            <span className="w-[50px] text-wrap">{icon.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default ExploreOptions