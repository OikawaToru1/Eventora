import React from 'react'
import {Button} from '../index'
import { useSelector, useDispatch } from 'react-redux'
import {logout } from '../../store/authSlice'
import { authService } from '../../appwrite/auth';

function LogoutBtn({children}) {

    const dispatch = useDispatch();
    const logoutHandler = ()=>{
       authService.logout()
       .then(()=>{
        dispatch(logout())
        console.log("Im logged out hai");
       })
    }

  return (
    <button onClick={()=>{logoutHandler}}>
      {children}
    </button>
  )
}

export default LogoutBtn