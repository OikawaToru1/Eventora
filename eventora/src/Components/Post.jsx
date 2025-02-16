import React,{useEffect,useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from '../appwrite/config'
import '../App.css'
import {Container} from '../Components/index'
import parse from 'html-react-parser'
import { useSelector } from "react-redux";



function Post(){

  const [img, setImg] = useState(null)
  const [post, setPost] = useState()
  const {slug} = useParams()
  const navigate = useNavigate()
  const userData = useSelector((state)=> state.auth.userData);
  const [isAuthor, setIsAuthor] = useState(false);

  useEffect(()=>{
    if(slug)
    {
        appwriteService.getPost({slug})
        .then((post)=>{
          setPost(post);
        })
    }
    else{
      navigate('/')
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
  // if(post)
  // {
  //   appwriteService.getFilePreview(post.featuredImage).then((res)=> {setImg(res.href)});
  //   userData && (post.userId === userData.$id) ? setIsAuthor(true): setIsAuthor(false);
  // }

  useEffect(()=>{
    if(post)
    {
      appwriteService.getFilePreview(post.featuredImage).then((res)=> {setImg(res.href)});
    }
  },[post])

  useEffect(()=>{
    if(post && userData)
    {
      setIsAuthor(post.userId === userData.$id);
    }
  },[post, userData])
  
  
  return post ? (
    <div className="py-8">
        <Container>
            <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
            <img
                        src={img}
                        alt={post.title}
                        className="rounded-xl"
                    />

{isAuthor && (
                    
                    <div className="flex gap-8 justify-end pr-6 ">
                    <Link to={`/edit-form/${post.$id}`}>
                        <button className="text-center px-3 w-[120px] py-2 bg-gradient-to-r from-[#9232b8b4] to-[#cb7deb] text-white
rounded-3xl mt-2 font-medium hover:text-[#9232b8b4] hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:border hover:border-[#9232b8b4]">
                            Edit
                        </button>
                    </Link>
                    <button onClick={deletePost} className="text-center px-3 w-[120px] py-2 bg-gradient-to-r from-[#9232b8b4] to-[#cb7deb] text-white
rounded-3xl mt-2 font-medium hover:text-[#9232b8b4] hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:border hover:border-[#9232b8b4]">
                            Delete
                        </button>
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
) : <h1>Couldn't find post</h1>;
}

export default Post;