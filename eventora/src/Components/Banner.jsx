import React from 'react'

function Banner() {
  return (
    <div className="bg-black w-[84vw] lg-[88vw] lg:h-[340px] h-auto mx-auto rounded-[18px] text-white  mb-[120px] pb-10 ">
    <div className=" lg:pt-[56px] pt-[40px] w-[88%] pl-14">
        <span className="lg:text-[34px] text-[28px]">Let’s Discover Events That Bring Us Together!</span>
        <div className="lg:text-[26px] text-[18px] pt-1 pl-4  leading-9">From sports and concerts to entertainment and culture, explore events that connect people, spark fun, and create lasting memories. Whatever your interest, there's an event waiting for you!</div>
        <div className="pt-6 pl-6">
            <button className="bg-white text-black py-3 px-8 rounded-[40px]  text-[18px] font-medium hover:drop-shadow-[0_5px_5px_rgba(200,200,200,0.25)] transition-all
            "><span className=''>Post Event</span></button>
        </div>
    </div>
    
</div>
  )
}

export default Banner