import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../store/authSlice'
import { useForm } from 'react-hook-form'
import { Input, Button } from './index'
import { authService } from '../appwrite/auth'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { 
        register,
        handleSubmit,
        formState : {errors}
        } = useForm()

    const Signup = async (data) => {
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getUserData()
                if(userData) dispatch(login(userData));
                navigate("/home")
            }
        } catch (error) {
            console.log("Error:; signup.jsx", error)
        }
    }



    return (
        <>
            <div className='signup-background relative md:bg-center'></div>
            <div className=' grid justify-items-center place-items-center'>
            <div className='absolute top-10 text-2xl font-semibold text-white'>Create an account to continue!!</div>
                <div className='absolute   top-24  w-[80vw] min-h-[52vh] sm:w-[60vw] lg:w-[40vw] rounded-2xl bg-[#7e7e7e50] z-10 border border-gray-500 '>
                    <form onSubmit={handleSubmit(Signup)}>
                        <Input
                            className='block text-white'
                            label="Username"
                            placeholder='Enter a username'
                            {...register("name", {
                                required: true,
                                maxLength: 30
                            })}
                        />
                        {errors.name && <span className=' text-red-600 px-20'>UserName is required</span>}

                        <Input
                            className="block text-white"
                            label="Email"
                            type="email"
                            placeholder='Enter your email'
                            {
                            ...register("email", {
                                required: true,
                                // pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            })
                            }
                        />
                        {errors.email && <span className=' text-red-600 px-20'>Email is required</span>}
                        <Input
                            label="Password"
                            type="password"
                            className='text-white'
                            placeholder='Enter your password'
                            {
                            ...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 25,
                                // pattern:/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/
                            })
                            }
                        />
                        {errors.password && <span className=' text-red-600 px-20'>Password is required</span>}
                        <Button type="submit" name={"SignUp"} />
                        <div className='w-full mx-auto flex justify-center mt-[6px] items-center'>
                            <span className='text-white text-[14px]'>Already have an account?</span>
                            
                            <span className='pl text-red-600 pl-2 cursor-pointer text-[16px] font-medium underlineRed hover:text-[#f50606] '>
                                <Link to={'/login'}>Login</Link>
                            </span>
                        </div>

                    </form>
                </div>
            </div>
        </>


    )
}

export default Signup