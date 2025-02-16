import React, { useState } from "react";

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block mb-2">Email Address:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block mb-2">Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block mb-2">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block mb-2">Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block mb-2">Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />
          
          <label className="block mb-2">Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded mb-4" required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Other">Other</option>
          </select>
          
          <label className="block mb-2">Primary Concern:</label>
          <select name="primaryConcern" value={formData.primaryConcern} onChange={handleChange} className="w-full p-2 border rounded mb-4" required>
            <option value="">Select</option>
            <option value="Anxiety">Anxiety</option>
            <option value="Depression">Depression</option>
            <option value="Stress">Stress</option>
            <option value="Relationship Issues">Relationship Issues</option>
            <option value="Other">Other</option>
          </select>
          
          {formData.primaryConcern === "Other" && (
            <div>
              <label className="block mb-2">Please specify:</label>
              <input type="text" name="otherConcern" value={formData.otherConcern} onChange={handleChange} className="w-full p-2 border rounded mb-4" />
            </div>
          )}
          
          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600">Sign Up</button>
        </form>
        <p className="text-center mt-4">Already have an account? <a href="/Login" className="text-blue-500">Login</a></p>
      </div>
    </div>
  );
};

export default SignupForm;
