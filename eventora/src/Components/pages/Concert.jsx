import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import appwriteService from '../../appwrite/config';
import Container from '../Container/Container';
import PostCard from '../PostCard';
import Title from '../Title';
import CardSlide from '../Card/CardSlide';
import ConcertPostCard from '../ConcertPostCard';
import { CarousalSlider } from '../index';


function Text() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    appwriteService.getConcertPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        console.log("post cha")
      }
    })
  }, [setPosts, navigate])
  const slides = [
    { url: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { url: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { url: "https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  
  ];
  return (
    <>
      <Container>
        <Title text={"Category: Concert"} />
        <CarousalSlider slides={slides} CarouselTitle='Discover Events Within Concerts' />
      </Container>
      <Container className='mt-20'>
        <Title text={"Concerts Near you "} />
        {/* <CardSlide/> */}
        <div className='flex w-full mb-60'>
          <div className='w-full h-20 flex mb-10'>
            {
              posts.map((post) => (
                <div key={post.$id} >
                  <ConcertPostCard {...post} />
                </div>
              ))
            }
          </div>
        </div>
      </Container>
    </>

  )
}

export default Text