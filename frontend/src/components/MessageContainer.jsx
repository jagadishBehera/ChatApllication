import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector } from "react-redux";

const MessageContainer = () => {
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
    const isOnline = onlineUsers?.includes(selectedUser?._id);

    return (
        <div className="md:min-w-[550px] flex flex-col h-full">
            {selectedUser ? (
                <>
                    {/* Chat Header */}
                    <div className="flex items-center gap-3 bg-zinc-800 text-white px-4 py-3 border-b border-gray-700">
                        <div className={`avatar ${isOnline ? 'online' : ''}`}>
                            <div className="w-12 rounded-full overflow-hidden">
                                <img src={selectedUser?.profilePhoto} alt="User Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-lg font-semibold">{selectedUser?.fullName}</p>
                            <p className="text-sm text-gray-400">{isOnline ? 'Online' : 'Offline'}</p>
                        </div>
                    </div>

                    {/* Messages Section */}
                    <div className="flex-1 overflow-y-auto p-4 scrollable">
                        <Messages />
                    </div>

                    {/* Input Field */}
                    <div className="border-t border-gray-700">
                        <SendInput />
                    </div>
                </>
            ) : (
                <div className="flex flex-col justify-center items-center flex-1 text-center">
                    <h1 className="text-4xl text-white font-bold">Hi, {authUser?.fullName}</h1>
                    <h2 className="text-2xl text-gray-400">Let's start a conversation</h2>
                </div>
            )}
        </div>
    );
};

export default MessageContainer;
