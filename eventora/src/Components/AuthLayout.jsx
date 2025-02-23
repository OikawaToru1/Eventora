import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from '../store/authSlice'


function AuthLayout({children, authentication = true}) {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state=> state.auth.status)

    useEffect(()=>{
       if(authentication && authStatus !== authentication)
       {
            navigate('/login')
            
       }
       else if(!authentication && authStatus !== authentication)
       {
            navigate('/home')
            // !false = true, true !== false == true ==> executes.
       }
        setLoader(false);
    },[authStatus, navigate, authentication])

    
  return loader ? <h1>Loading...</h1> : <div>{children}</div>
}

export default AuthLayout