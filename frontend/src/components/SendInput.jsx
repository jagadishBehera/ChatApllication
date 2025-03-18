import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';

const SendInput = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(store => store.user);
    const { messages } = useSelector(store => store.message);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!message.trim()) return; // Prevent sending empty messages

        try {
            const res = await axios.post(`${BASE_URL}/api/v1/message/send/${selectedUser?._id}`, { message }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            dispatch(setMessages([...messages, res?.data?.newMessage]));
            setMessage(""); // Clear input after sending
        } catch (error) {
            console.error("Message sending failed:", error);
        }
    };

    return (
        <form onSubmit={handleSendMessage} className='px-4 py-2'>
            <div className='relative w-full'>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    placeholder='Type a message...'
                    className='border text-sm rounded-lg block w-full p-3 pr-10 border-gray-500 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button 
                    type="submit" 
                    className='absolute inset-y-0 right-3 flex items-center text-blue-400 hover:text-blue-600 transition duration-300'
                >
                    <IoSend size={20} />
                </button>
            </div>
        </form>
    );
};

export default SendInput;
