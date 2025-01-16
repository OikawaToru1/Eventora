import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from '../store/authSlice'


function AuthLayout({children, authentication = true}) {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state=> state.auth.status)
    // console.log("Im the auth status ",authStatus)

    // useEffect(()=>{
    //     if(authentication && authStatus !== authentication)
    //     {
    //         navigate('/signup');
    //     }
    //     else if(authentication && authStatus === authentication)
    //     {
    //         navigate('/home');
    //     }
    //     setLoader(false);
    // },[authStatus, navigate, authentication])

    useEffect(()=>{
        if(authStatus)
        {
            navigate('/home')
        }
        else{
            navigate('/signup')
        }
        setLoader(false)
    },[])
  return loader ? <h1>Loading...</h1> : <div>{children}</div>
}

export default AuthLayout