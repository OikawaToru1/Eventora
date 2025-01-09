import React,{useState} from "react";
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa";


function ImageCarousel({slides,CarouselTitle,CarouselDescrip}) {

  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    const isfirstImg = current === 0;
    const newIndex = isfirstImg ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  }
  const nextSlide = () => {
    const islastImg = current === slides.length - 1;
    const newIndex = islastImg ? 0 : current + 1;
    setCurrent(newIndex);
  }

  const goToSlide = (index) => {
    setCurrent(index);
  }

  const background ={
    backgroundImage: `url(${slides[current].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    cursor:'pointer',
    width:"100%",
    height:"100%",
    transition:'all linear 0.2s',
    };

  return (
    <div className="w-[84vw] h-[350px] mx-auto mt-3 lg:w-[88vw] ">
      <div className='relative w-[100%] h-[100%] rounded-[16px] shadow-lg shadow-[#5a5a5a]' style={background}>
        <div className="absolute top-12 left-[4%] text-[44px] text-white lg:w-[600px] lg:text-[50px] leading-[50px] lg:leading-[58px]">
          <span className="capitalize font-medium ">{CarouselTitle}</span>
          <h3 className="text-[26px] lg:text-[34px] pt-3">{CarouselDescrip}</h3>
        </div>
        <div onClick={prevSlide} className='left-arrow absolute z-[1] text-xl text-center pt-[6px] bottom-[4%] text-white border-[4px] border-white rounded-full w-[45px] h-[45px] cursor-pointer left-[1.5%] opacity-100 hover:opacity-70'><FaArrowLeft className="ml-2 mt-[2px]" /></div>
        <div onClick={nextSlide} className='right-arrow absolute z-[1] text-xl text-center pt-[6px] bottom-[4%] text-white  border-[4px] border-white rounded-full w-[45px] h-[45px] cursor-pointer right-[1.5%] opacity-100 hover:opacity-70' ><FaArrowRight className="ml-2 mt-[2px]" /></div>
        <div className="flex gap-[20px] absolute bottom-0 left-[50%] right-[50%]  ">
          {slides.map((image,index) => (
            <div className="text-[60px] text-white font-extrabold cursor-pointer hover:text-[#393939]" key={index} onClick={() =>  goToSlide(index)}>.</div>
          ))}
        </div>
      </div>  
    </div>
    
   

  )
}

export default ImageCarousel