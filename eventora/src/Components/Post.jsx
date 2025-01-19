import React,{useEffect,useState} from "react";
import Header from "./Header/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from '../appwrite/config'
import '../App.css'
import {Button,Container} from '../Components/index'
import parse from 'html-react-parser'
import { useSelector } from "react-redux";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiShare2 } from "react-icons/fi";



function Post(){

  const [post, setPost] = useState(null)
  const {slug} = useParams()
  console.log(slug);
  const navigate = useNavigate()

  const userData = useSelector((state)=> state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(()=>{
    if(slug)
    {
      appwriteService.getPost(slug).then((post)=>{
        if(post) setPost(post);
        
        else{
          console.log("Couldnt find it");
        }

      })    
    }
  },[slug,navigate]);

  const deletePost = ()=>{
    appwriteService.deletePost(post.$id)
    .then((status)=>{
      if(status){
        appwriteService.deleteFile(post.featuredImage);
        navigate('/home')
      }
    })
  }
  
  return post ? (
    <div className="py-8">
        <Container>
            <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                <img
                    src={appwriteService.getPreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-xl"
                />

                {isAuthor && (
                    <div className="absolute right-6 top-6">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-green-500" className="mr-3">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-500" onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
            </div>
            <div className="w-full mb-6">
                <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
            <div className="browser-css">
                {parse(post.content)}
                </div>
        </Container>
    </div>
) : <h1>COuldnt find</h1>;
}

export default Post;