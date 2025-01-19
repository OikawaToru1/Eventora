import React from 'react'
import Card from './Card'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function CardSlide() {
  const slideLeft = () => {
    let slider = document.getElementById('sliderDis');
    slider.scrollLeft = slider.scrollLeft - 250;
  }

  const slideRight = () => {
    let slider = document.getElementById('sliderDis');
    slider.scrollLeft = slider.scrollLeft + 250;
  }
  return (
    <div className='w-[100%] flex '>
      <div onClick={slideLeft} className="z-10 absolute top-[42%] left-0 w-[32px] h-[54px] rounded-e-[50px] cursor-pointer transition-all"><span className="text-[32px] font-medium absolute top-[13px]"><FaChevronLeft /></span></div>
      <div onClick={slideRight} className="z-10 absolute top-[42%] right-0 w-[32px] h-[54px] rounded-s-[50px] cursor-pointer  transition-all"><span className="absolute top-[13px] text-[32px] font-medium  "><FaChevronRight /></span></div>
      <div className=" w-[100%] h-[100%] overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide flex lg:justify-center mx-auto" id="sliderDis">
        {/* <Link to={'/test'}><Card/></Link>
        <Link to={'/test'}><Card/></Link>
        <Link to={'/test'}><Card/></Link>
        <Link to={'/test'}><Card/></Link>
        <Link to={'/test'}><Card/></Link>
        <Link to={'/test'}><Card/></Link>
        <Link to={'/test'}><Card/></Link> */}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default CardSlide