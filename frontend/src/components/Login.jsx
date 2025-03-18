import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from '../redux/userSlice';
import { BASE_URL } from '..';

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/v1/user/login`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      navigate("/");
      console.log(res);
      dispatch(setAuthUser(res.data));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: ""
    })
  }
  return (
    <div className="min-w-96 mx-auto bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-700">
      <div className='w-full max-w-md p-6 rounded-lg shadow-lg bg-gray-900 bg-opacity-70 backdrop-blur-md border border-gray-700'>
        <h1 className='text-3xl font-bold text-center text-white mb-4'>Login</h1>
        <form onSubmit={onSubmitHandler} action="">

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-300'>Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              type="text"
              placeholder='Username' />
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
              placeholder='Password' />
          </div>
          <p className='text-center my-2 text-gray-400'>Don't have an account? <Link to="/signup" className='text-blue-400 hover:underline'> signup </Link></p>
          <div>
            <button type="submit" className='w-full py-2 mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login