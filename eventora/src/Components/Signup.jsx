import React from 'react'
import { useDispatch } from 'react-redux'
import {login as sliceLogin} from '../store/authSlice'
import { useForm } from 'react-hook-form'
import { Input, Button } from './index'
import { authService } from '../appwrite/auth'
// import { Link } from 'react-router-dom'




function Signup() {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const Signup = async (data) => {
        console.log("Im handled hai")
        try {
                const userData = await authService.createAccount(data);
                if(userData)
                {
                    const userDetails=  await authService.getUserData();
                    if(userDetails)dispatch(sliceLogin(userDetails));
                    // navigate?
                }

        }
        catch (error) {

            console.log("Oh no u cant cum");
        }
    }

    return (
        <>
            <div className='signup-background relative md:bg-center'></div>
            <div className=' grid justify-items-center place-items-center'>
            <div className='absolute top-10 text-2xl font-semibold text-white'>!! Welcome My Friend !!</div>
                <div className='absolute top-24 pt-1 w-[80vw] h-[68vh] sm:w-[60vw] lg:w-[40vw] rounded-2xl bg-[#7e7e7e50] z-10 border border-gray-500 '>
                    <form onSubmit={handleSubmit(Signup)}>
                        <Input
                            className='block'
                            label="Username"
                            placeholder='Enter a username'
                            {...register("name", {
                                required: true,
                                maxLength: 30
                            })}
                        />

                        <Input
                            className="block"
                            label="Email"
                            type="email"
                            placeholder='Enter email'
                            {
                            ...register("email", {
                                required: true,
                                // pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            })
                            }
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder='Enter password'
                            {
                            ...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 25,
                                // pattern:/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/
                            })
                            }
                        />
                        <Button type="submit" name={"SignUp"} />
                        <div className='w-full mx-auto flex justify-center mt-[6px] items-center'>
                            <span className='text-white text-[14px]'>Already have an account?</span>
                            <span className='text-green-600 underlineGreen pl-1 cursor-pointer text-[16px] font-medium'>Login</span>
                        </div>
                    </form>
                </div>
            </div>

        </>
        // </div>

    )
}

export default Signup