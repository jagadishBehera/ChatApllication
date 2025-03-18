import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from '..';


const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/register`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    })
  }
  return (
    <div className="min-w-96 mx-auto  bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-700">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 border border-gray-700'>
        <h1 className='text-3xl font-bold text-center text-white mb-4'>Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-300'>Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className='w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder='Full Name' required/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-300'>Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder='Username' required/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-300'>Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className='w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="password"
              placeholder='Password' required/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-300'>Confirm Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              className='w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="password"
              placeholder='Re-enter Password' required/>
          </div>
          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p className='text-gray-300'>Male</p>
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                defaultChecked
                className="checkbox mx-2 bg-white" />
            </div>
            <div className='flex items-center'>
              <p className='text-gray-300'>Female</p>
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                defaultChecked
                className="checkbox mx-2 bg-white" />
            </div>
          </div>
          <p className='text-center my-2 text-gray-400'>Already have an account? <Link to="/login" className='text-blue-400 hover:underline'> login </Link></p>
          <div>
          <button
            type="submit"
            className={`w-full py-2 mt-3 font-semibold rounded-md transition duration-300 ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup