import React from 'react'
import { Input, Button } from './index'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { authService } from '../appwrite/auth'
import {login as authLogin} from '../store/authSlice'      
import { Link, useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { 
            register,
            handleSubmit,
            formState : {errors}
        } = useForm()
    

    const login = async (data) => {
        try {
            const loginSession = await authService.login(data)
            
            if (loginSession) {
                const userData = await authService.getUserData()
                if(userData) {
                    dispatch(authLogin(userData))
                    console.log("I got the data yayyyy")
                    console.log(userData.$id);
                    navigate("/home")
                }
                else{
                    console.log("No user data");
                }
                
            }
        } catch (error) {
            console.log("Error:: login jsx ", error);
        }
    }

    return (
        <>
        
        <div className='signup-background relative md:bg-center'></div>

        <div className=' grid justify-items-center place-items-center'>
            <div className='absolute top-10 text-2xl font-semibold text-white'>!! Welcome Back !!</div>
            <div className='absolute top-24 w-[80vw] h-[60vh] sm:w-[60vw] lg:w-[40vw] rounded-2xl bg-[#7e7e7e50] border border-gray-500 '>
                <form onSubmit={handleSubmit(login)}>
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register(
                            "email",
                            {
                                required: true,

                            }
                        )}

                    />
                     {errors.email && <span className=' text-red-600 px-20'>Email is invalid</span>}

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password",
                            {
                                required: true,
                            }
                        )

                        }
                    />
                     {errors.password && <span className=' text-red-600 px-20'>Password```` is required</span>}
                    <Button
                        type="submit"
                        name={"Login"}
                       
                    />
                    <div className='w-full mx-auto flex justify-center mt-[6px] items-center'>
                            <span className='text-white text-[14px]'>Don't have an account?</span>
                            <span className='text-green-600 underlineGreen pl-1 cursor-pointer text-[16px] font-medium'>
                                <Link to={'/signup'}>Register</Link>
                            </span>
                        </div>
                </form>
            </div>

        </div>
        </>
    )
}

export default Login