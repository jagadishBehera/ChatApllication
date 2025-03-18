import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, []);
  return (
    <div className='flex h-screen md:h-[550px] rounded-lg overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-700 backdrop-blur-md'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default HomePage