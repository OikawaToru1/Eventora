import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import appwriteService from '../../appwrite/config';
import Container from '../Container/Container';
import PostCard from '../PostCard';
import Title from '../Title';
import ConcertPostCard from '../ConcertPostCard';
import ComedyPostCard from '../ComedyPostCard'
import CardSlide from '../Card/CardSlide';
import { CarousalSlider } from '../index';

function Text() {
    const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    appwriteService.getComedyPosts().then((posts)=>{
      if(posts)
      {
        setPosts(posts.documents);
        console.log("post cha")
      }
    })
  },[setPosts,navigate])

  const slides = [
    { url: "https://english.nepalpress.com/wp-content/uploads/2022/05/magne-buda-commedy.jpg" },
    { url: "https://i.ytimg.com/vi/74FUqzT3iRs/maxresdefault.jpg" },
    { url: "https://english.onlinekhabar.com/wp-content/uploads/2018/08/Comedy-Circle-4-1.jpg" },
  
  ];

  return (
    <>
    <Container>
        <Title text={"Category: Comedy"} />
        <CarousalSlider slides={slides} CarouselTitle='Discover Events Within Comedy' />
      </Container>
    <Container className='mt-20'>
        <Title text={"Comedy Shows Near you "}/>
        {/* <CardSlide/> */}
        <div className='flex w-full mb-60'>
        <div className='w-full h-20 flex mb-10'>
          {
            posts.map((post)=>(
              <div key={post.$id} > 
              <ComedyPostCard {...post}/>
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