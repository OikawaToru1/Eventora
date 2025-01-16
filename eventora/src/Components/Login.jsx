import React from 'react'
import { Input, Button } from './index'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { authService } from '../appwrite/auth'
import { login as sliceLogin } from '../store/authSlice'
import { Navigate, useNavigate } from 'react-router-dom'


function Login() {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const login = async (data) => {
        try {
            const user = await authService.login(data);
            if (user) {
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
                    <Button
                        type="submit"
                        name={"Login"}
                       
                    />
                    <div className='w-full mx-auto flex justify-center mt-[6px] items-center'>
                            <span className='text-white text-[14px]'>Don't have an account?</span>
                            <span className='text-green-600 pl-1 cursor-pointer text-[16px] font-medium underlineRed hover:text-[#f50606] '>Register</span>
                        </div>
                </form>
            </div>

        </div>
        </>
    )
}

export default Login