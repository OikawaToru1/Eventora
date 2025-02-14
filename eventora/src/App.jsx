import React,{ useState,useEffect } from 'react'
import appwriteService from './appwrite/config'
import PostCard from './Components/PostCard'
import {Header, Footer, CarousalSlider, Title, DiscoverIcons, ExploreOptions,Container,CardSlide,Banner,ConcertCardSlide,ComedyCardSlide} from './Components/index'
import { useNavigate } from 'react-router-dom'




function App() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  // useEffect(()=>{
  //   appwriteService.getPosts().then((posts)=>{
  //     if(posts)
  //     {
  //       setPosts(posts.documents);
  //       console.log("post cha")
  //     }
  //   })
  // },[setPosts,navigate])

  
  const slides = [
    { url: "https://images.pexels.com/photos/18465378/pexels-photo-18465378/free-photo-of-man-in-traditional-clothing-with-golden-hat-in-festival.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { url: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { url: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  
  ];
 
//   if(posts.length===0)
//     {
//       return ( <div className='bg-pink h-8 w-full'>
//         No posts here haha
//       </div>)
//     }
// else
    return (
      <div>
    <div className="w-[100%]">
            <CarousalSlider slides={slides} CarouselTitle='Discover Unforgettable Events' CarouselDescrip='A place where experiences come to life' />
        
      </div>
      <Container className='w-[100%] mt-12 lg:mt-20 '>
      <Title text={"Explore event that matches your vibe!!"}/>
      <ExploreOptions/>
      </Container>

      <Container className='mt-16'>
        <Title text={"Discover Events"}/>
        <CardSlide/>
      </Container>

      <Container className='mt-16'>
        <Title text={"Events for You"}/>
       
        <CardSlide showPost={"all"}/>
        
      </Container>
      <Container className='mt-16'>
        <Title text={"Events near you"}/>
       
        <ConcertCardSlide showPost={"concert"}/>
        
      </Container>
      <Container className='mt-16'>
        <Title text={"Comedy"}/>
       
        <ComedyCardSlide showPost={"comedy"}/>
        
      </Container>
      
      <Banner/>
  
    </div>
  )
}

export default App
