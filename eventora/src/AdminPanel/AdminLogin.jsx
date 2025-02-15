import React from "react";
import { Input, Button } from "../Components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authService } from "../appwrite/auth";
import { login as authLogin } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import AdminLoginIamge from "../assets/AdminLoginImage.png"
import "../App.css"

import { PiStarFourFill } from "react-icons/pi";
function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    try {
      const loginSession = await authService.login(data);

      if (loginSession) {
        const userData = await authService.getUserData();
        if (userData) {
          dispatch(authLogin(userData));
          console.log("I got the data yayyyy");
          console.log(userData.$id);
          navigate("/home");
        } else {
          console.log("No user data");
        }
      }
    } catch (error) {
      console.log("Error:: login jsx ", error);
    }
  };

  return (
    <>
      <div className="relative w-[100vw] h-[100vh] flex justify-between ">
        <section className="">
                <div className="w-[60vw] ">
                    <img src={AdminLoginIamge} alt="" className="w-[500px] h-[60vh] object-cover mx-auto mt-32" />
                </div>
                
        </section>
        <section className="w-[440px] mr-20 bg-gray-50 rounded-2xl h-[96%] mt-3">
            <div className="pt-16 flex justify-center w-full">
                <div className="AdminLogin_Star ">
                    <PiStarFourFill size={30}/>
                </div>
                
            </div> 
          <div className="text-center text-3xl font-semibold pt-14">
            Welcome back !
            <div className="text-gray-500 text-center text-[14px] font-normal">
              Please enter your details
            </div>
          </div>
          <div className="text-black relative ">
            <form onSubmit={handleSubmit(login)}>
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                className="text-[#000] border-[#9232b8b4] placeholder:text-[#afafaf]"
                {...register("email", {
                  required: true,
                })}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                className="text-[#000] border-[#9232b8b4] placeholder:text-[#afafaf]"
                {...register("password", {
                  required: true,
                })}
              />
              <Button type="submit" name={"Login"} />
              {/* <div className="w-full mx-auto flex justify-center mt-[6px] items-center">
                <span className="text-[14px]">
                  Don't have an account?
                </span>
                <span className="text-green-600 underlineGreen pl-1 cursor-pointer text-[16px] font-medium">
                  <Link to={"/signup"}>Register</Link>
                </span>
              </div> */}
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default AdminLogin;
