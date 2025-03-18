import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { setAuthUser, setOtherUsers, setSelectedUser } from '../redux/userSlice';
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';
 
const Sidebar = () => {
    const [search, setSearch] = useState("");
    const {otherUsers} = useSelector(store=>store.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/user/logout`);
            navigate("/login");
            toast.success(res.data.message);
            dispatch(setAuthUser(null));
            dispatch(setMessages(null));
            dispatch(setOtherUsers(null));
            dispatch(setSelectedUser(null));
        } catch (error) {
            console.log(error);
        }
    }
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const conversationUser = otherUsers?.find((user)=> user.fullName.toLowerCase().includes(search.toLowerCase()));
        if(conversationUser){
            dispatch(setOtherUsers([conversationUser]));
        }else{
            toast.error("User not found!");
        }
    }
    return (
        <div className='border-r border-gray-600 p-4 flex flex-col  bg-gray-900 text-white h-full'>
            <form onSubmit={searchSubmitHandler} action="" className='flex items-center gap-2 mb-4'>
                <input
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className='w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white' type="text"
                    placeholder='Search users...'
                />
                <button type='submit' className='p-2 rounded-md bg-blue-600 hover:bg-blue-700 transition'>
                    <BiSearchAlt2 className='w-6 h-6 '/>
                </button>
            </form>
            <div className="divider border-gray-600"></div> 
            <OtherUsers/> 
            <div className='mt-auto'>
                <button onClick={logoutHandler} className='w-full py-2 mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition duration-300'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar