import React from 'react'
import './index.js'
import { Header, CarousalSlider, Container, Title, CardSlide, Card } from './index.js'
import Bipul from '../assets/bipulChettri.webp';

function Category() {
    const slides = [
        { url: "https://images.pexels.com/photos/18465378/pexels-photo-18465378/free-photo-of-man-in-traditional-clothing-with-golden-hat-in-festival.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { url: "https://images.pexels.com/photos/2565715/pexels-photo-2565715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { url: "https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ]
    // const artists = [
    //     {
    //         id: crypto.randomUUID(),
    //         profileImg: Bipul,
    //         name: 'Bipul Chhetri',

    //     },
    //     {
    //         id:crypto.randomUUID(),
    //         profileImg:"https://i1.sndcdn.com/artworks-000108608853-5z3w2k-t500x500.jpg",
    //         name:"The edge band",
    //     },
        
    //     {
    //         id:crypto.randomUUID(),
    //         profileImg:"https://yt3.googleusercontent.com/ytc/AIdro_kVYjTfmLjxhGDTGFXDTVTl0FvGfJSzah8ciNhCWMLPOuI=s900-c-k-c0x00ffffff-no-rj",
    //         name:"Trishna Gurung",
    //     },
    //     {
    //         id: crypto.randomUUID(),
    //         profileImg: "https://i.scdn.co/image/ab6761610000e5ebfb35b58efb008a08151132f5",
    //         name: 'Sajjan Raj Vaidya',
    //     },
    //     {
    //         id:crypto.randomUUID(),
    //         profileImg:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ73BUs-JAc4Jw6silEty0jplDw3U_hxzGN8YD8WFueVxhg9HrPd5lUbgSIceAaEhg8R95hdB_Rhi5KmSP-45pQGQ",
    //         name:"Sujan Chapagain",
    //     },
       
    // ]
    return (
        <div className='h-screen'>
            <Container>
                <Title text={"Category: Culture"} />
                <CarousalSlider slides={slides} CarouselTitle='Discover Events Within Culture' />
            </Container>
            <div className='mt-14 ml-10 lg:ml-20 flex gap-6'>
                <div className='bg-black text-white py-2 rounded-2xl indent-3 w-40 '>
                    <label htmlFor="category">Event : </label>
                    <select name="category" id="category" className='bg-black outline-none'>                   
                        <option value="all">All</option>
                        <option value="music">Music</option>
                        <option value="culture">Culture</option>
                        <option value="exhibition">Exhibition</option>
                        <option value="business">Business</option>
                        <option value="nightlife">NightLife</option>
                        <option value=""></option>
                    </select>
                </div>
                <div className='py-2 rounded-2xl indent-2 border border-black'>
                    <label htmlFor="date" className=''>Date : <input type="date" className='outline-none bg-transparent' /> </label>
                </div>
            </div>

            <Container>
                <Title text={'Near By'} />
                <CardSlide>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardSlide>
            </Container>
            <Container>
                <Title text={'Popular'} />
                <CardSlide>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardSlide>
            </Container>
            {/* <Container>
                <Title text={'Artists to Follow'} />
                
                    <div className='w-[100%] h-[480px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 relative pl-6 pt-8 gap-10'>
                        {
                            artists.map(item => (
                                <div className='w-[180px] mx-auto' key={item.id}>
                                    <div className='flex w-full text-center'>
                                        <img src={item.profileImg} alt="profileImg" className='w-[180px] rounded-[14px] h-[240px]' />
                                    </div>
                                    <div className='flex justify-center font-medium text-[18px] pt-2 capitalize'>{item.name}</div>
                                    <div className='text-center mt-2'>
                                        <button className='bg-black text-white px-4 py-2 rounded-3xl hover:bg-[#7c7c7c] text-[18px] transition-all'>
                                            Follow 
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

            </Container> */}

        </div>
    )
}

export default Category