import React from 'react'
import {Input, Button} from './index'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {authService} from '../appwrite/auth'
import {login as sliceLogin} from '../store/authSlice'
import { Navigate, useNavigate } from 'react-router-dom'


function Login() {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const login = async (data)=>{
        try {
            const user = await authService.login(data);
            if(user)
            {
                userData = await authService.getUserData()
                dispatch(sliceLogin(userData));
                alert("You're logged in mister")
                
            }
        } 
        catch (error) {
            console.log("Error :: login ", error)   
        }
    }
    
  return (

    <div className='w-full bg-gray-300 inline-block'>
       <form onSubmit={handleSubmit(login)}>
       <Input
            label = "Email"
            type = "email"
            placeholder = "Enter your email"
            {...register(
                "email",
                {
                    required: true,

                }
            )}
            
        />
        
        <Input
            label = "Password"
            type = "password"
            placeholder = "Enter your password"
            { ...register("password",
            {
                required: true,
            }
            )

            }
        />
        <Button
            type = "submit"
            name={"Login"}
        />
       </form>
    </div>
  )
}

export default Login