import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";

const Message = ({ message }) => {
    const scrollRef = useRef();
    const { authUser, selectedUser } = useSelector(store => store.user);
    const isSentByAuthUser = message?.senderId === authUser?._id;

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <div ref={scrollRef} className={`flex items-start gap-2 mb-4 ${isSentByAuthUser ? 'justify-end' : 'justify-start'}`}>
            {/* Profile Image */}
            {!isSentByAuthUser && (
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-500">
                    <img 
                        src={selectedUser?.profilePhoto} 
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Message Bubble */}
            <div className={`max-w-xs px-4 py-2 rounded-lg text-sm shadow-md ${isSentByAuthUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'}`}>
                {message?.message}
                <div className="text-xs  text-right mt-1">12:45</div>
            </div>

            {/* Profile Image for Sent Messages */}
            {isSentByAuthUser && (
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-500">
                    <img 
                        src={authUser?.profilePhoto} 
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </div>
    );
};

export default Message;
