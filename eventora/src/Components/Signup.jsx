import React from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../store/authSlice'
import { useForm } from 'react-hook-form'
import {Input, Button} from './index'
import {authService} from '../appwrite/auth'




function Signup() {

    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const Signup = async (data)=>{
        console.log("Im handled hai")
        try {
                const userData = await authService.createAccount(data);
                if(userData)
                {
                    userDetails=  await authService.getUserData();
                    console.log(userData);
                    dispatch(login(userDetails))
                    alert("You're now a user haha")
                }

             } 
        catch (error) {
            
            console.log("Oh no u cant cum");
        }
    }




  return (
   <div className='w-full block'>
     <form onSubmit={handleSubmit(Signup)}>
       <Input
       className = 'block'
       label = "Name"
       {...register("name",{
        required: true,
        maxLength: 30
       })}
         />
        
        <Input
            className = "block"
            label = "Email"
            type = "email"
            {
                ...register("email",{
                    required: true,
                    // pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })
            }
        />
        <Input
        label = "Password"
        type = "password"
        {
            ...register("password",{
                required: true,
                minLength: 4,
                maxLength:25,
                // pattern:/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/
            })
        }
        />
        <Button type = "submit"  name={"SignUp"}/>
    </form>
   </div>

  )
}

export default Signup