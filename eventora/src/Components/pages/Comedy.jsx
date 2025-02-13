import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import appwriteService from '../../appwrite/config';
import Container from '../Container/Container';
import PostCard from '../PostCard';
import Title from '../Title';
import ConcertPostCard from '../ConcertPostCard'
import ComedyPostCard from '../ComedyPostCard'

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

  return (
    <Container className=''>
        <Title text={"Comedy Shows Near you ..."}/>
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
  )
}

export default Text