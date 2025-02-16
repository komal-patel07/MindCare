import React, { useState } from "react";
import { Button1 } from "@/Component/UI/Button";
import Button from "@/Component/UI/Button";
import { Input } from "@/Component/UI/Input"; // Ensure correct import
import Image from "@/assets/Nurse.png";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { buttonVariants } from "@/Component/Animation/HomePageAnimation";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import { GoogleLogin,GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
export default function Login() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //put backend URL Path!!!
        // await axios.post(`http://localhost:5000/api/login`, formState);
      toast.success("Form is submitted successfully!");
    } catch (error) {
      toast.error("Error while submitting the form!");
    }
    //   // Reset form state after submission
    setFormState({
      username: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSucess = (credentialResponse) => {
  const decode = jwtDecode(credentialResponse?.credential)
  setFormState.username=credentialResponse.name;
    console.log(decode);  
  }
  const handleError = (error) => {
  console.log(error);
  }
  return (
    <div className="flex items-center justify-center min-h-170 ">
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-lg overflow-hidden shadow-xl bg-white">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10  bg-gray-50">
          <div className="text-center flex flex-col justify-center items-center  ">
            <img
              width={300}
              src={Image} // Ensure this file is in the public folder
              alt="Student studying"
              className="mx-auto mb-1 w-50 md:w-100"
            />
            <p className="text-gray-600 py-20 text-sm md:text-base ">
              " Don't let your mind bully your body into believing it must
              carrry the burden of it's worries."
            </p>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-t-4">
            <div>
              <label
                htmlFor="username"
                className="block text-gray-600 mb-2 text-sm md:text-base"
              >
                Username or email
              </label>
              <Input
                id="username"
                name="username"
                required
                value={formState.username}
                onChange={handleChange}
                type="text"
                placeholder="johnsmith007"
                className="w-full"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-600 mb-2 text-sm md:text-base"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                required
                value={formState.password}
                onChange={handleChange}
                type="password"
                placeholder="********"
                className="w-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className="text-sm text-emerald-900 hover:underline">
                Forgot password?
              </a>
            </div>
            <motion.div
              className="w-55 mt-10"
              variants={buttonVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button1 className=" w-107  text-bg-emerald-800 hover:text-white border border-zinc-500  hover:bg-emerald-800 py-2">
                Login
              </Button1>
            </motion.div>
          </form>
          <div className="text-center my-4 text-gray-500 text-sm md:text-base">
            or
          </div>
            <GoogleOAuthProvider 
            clientId="1095836248937-ea1hjrtusaquuigbst6dm9s2s91dpk8s.apps.googleusercontent.com">
              <GoogleLogin
              className="border-black"
              onSuccess={handleSucess}
              onError={handleError}>
              </GoogleLogin>
            </GoogleOAuthProvider>
          <p className="text-center mt-6 text-sm text-gray-600">
            Are you new?

            <Link
            to="/SignupForm"
            id="Condition"
            className="text-emerald-900 hover:underline"          >
              Create an Account
              </Link>

          </p>
        </div>
        <Toaster richColors />
      </div>
    </div>
  );
}
