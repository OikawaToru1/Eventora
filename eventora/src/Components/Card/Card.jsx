import React from 'react'
import getEventsData from '../../assets/DiscovereventData/DiscoverEventsData';
import Calender from '../../assets/DiscovereventData/calender.png'
import '../../App.css'


function Card() {
  const getEventData = getEventsData()
  return (
      <div className="text-[19px] w-[100%] h-[480px] flex justify-evenly items-center relative px-auto">
          {getEventData.map(item => (
            <div className=" h-[100%] inline-block p-7 lg:p-6" >
              <div className="hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] rounded-t-[16px] rounded-b-[16px] transition-all cursor-pointer" key={item.id} >
                <img src={item.discoverImage} alt={item.imageTitle} className="w-[220px] h-[190px] object-cover rounded-t-[16px]" />
                <div className="bg-[#f3f3f3] w-[220px] rounded-b-[16px] pl-3 py-3">
                  <span className="underlineGray">{item.imageTitle}</span>
                  <div className="flex items-center gap-2">
                    <img src={Calender} alt="calender" className="w-5 h-5 "/>
                    <div className="underlineGray ">{item.eventdate}</div>
                  </div>
                  <span className="capitalize underlineGray">{item.eventLocation}</span>
                  <div className="flex justify-end pr-4 text-[22px]">{item.eventPrice}</div>
                </div>

              </div>

            </div>
          ))}

        </div>

  )
}

export default Card