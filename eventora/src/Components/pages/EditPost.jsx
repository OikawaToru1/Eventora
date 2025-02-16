import React,{useEffect,useCallback, useState} from 'react'
import {Container, PostForm} from '../index'
import appwriteService from '../../appwrite/config'
import { useParams, useNavigate } from 'react-router-dom'

function EditPost() {
    const navigate = useNavigate()
    const {slug} = useParams();
    const [post, setPost] = useState(null)

    useEffect(()=>{
        if(slug)
        {
            appwriteService.getPost({slug})
            .then((post)=>{
                if(post)
                {
                    setPost(post);
                }
            })
        }
        else{
            navigate('/home')
        }
    },[slug,navigate])
  return post? (<div>
    <Container>
        <PostForm post={post}/>
    </Container>
  </div>) : null
}

export default EditPost