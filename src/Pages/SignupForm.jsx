import { Input } from "@/Component/UI/Input"; // Ensure correct import
import React, { useState } from "react";
import { Button1 } from "../Component/UI/Button";
import { motion } from "framer-motion";
import { buttonVariants } from "../Component/Animation/HomePageAnimation";
import { Link } from "react-router-dom";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    primaryConcern: "",
    otherConcern: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex justify-center  bg-gradient-to-bl  from-rose-100 via-gray-100 to-gray-200  rounded-lg h-fit py-10 ">  
        <div className="   w-3xl shadow-2xl  bg-gray-100">
     
      <div className="bg-white p-4 flex justify-center  rounded-lg shadow-lg w-full ">
      
        <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-semibold text-center ">Create an Account</h2>

          <label className="block w-xl">Full Name:</label>
          <Input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block  w-xl mb-2">Email Address:</label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block  w-xl mb-2">Username:</label>
          <Input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block  w-xl mb-2">Password:</label>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block  w-xl mb-2">Confirm Password:</label>
          <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block  w-xl mb-2">Date of Birth:</label>
          <Input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block  w-xl mb-2">Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded mb-4" required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Other">Other</option>
          </select>
          
          <label className="block  w-xl mb-2">Primary Concern:</label>
          <select name="primaryConcern" value={formData.primaryConcern} onChange={handleChange} className="w-full p-2 border rounded mb-4" required>
            <option value="" className=" focus:bg-emerald-900 focus:text-white ">Select</option>
            <option value="Anxiety" >Anxiety</option>
            <option value="Depression">Depression</option>
            <option value="Stress">Stress</option>
            <option value="Relationship Issues">Relationship Issues</option>
            <option value="Other">Other</option>
          </select>
          
          {formData.primaryConcern === "Other" && (
            <div>
              <label className="block  w-xl mb-2">Please specify:</label>
              <Input type="text" name="otherConcern" value={formData.otherConcern} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
            </div>
          )}
           <motion.div
              className="w-full mt-10"
              variants={buttonVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
          <Button1 type="submit" className="w-full p-3 text-bg-emerald-800 hover:text-white border border-zinc-500  hover:bg-emerald-800 py-2 ">Sign Up</Button1>
          </motion.div>
          <p className="text-center mt-4">Already have an account? <Link to="/Login" className="text-emerald-900 hover:underline">Login</Link></p>

        </form>
      </div>
    </div>
    </div>

  );
};

export default SignupForm;
