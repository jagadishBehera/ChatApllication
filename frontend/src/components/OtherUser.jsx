import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const { selectedUser, onlineUsers } = useSelector((store) => store.user);
    
    const isOnline = onlineUsers?.includes(user._id);
    const isSelected = selectedUser?._id === user?._id;

    const handleSelectUser = () => {
        dispatch(setSelectedUser(user));
    };

    return (
        <>
            <div
                onClick={handleSelectUser}
                className={`flex gap-2 items-center p-2 cursor-pointer rounded transition duration-300 
                    ${isSelected ? 'bg-zinc-200 text-black' : 'text-white hover:bg-zinc-200 hover:text-black'}`}
            >
                {/* User Avatar */}
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className='w-12 rounded-full overflow-hidden'>
                        <img src={user?.profilePhoto} alt={`${user?.fullName}'s profile`} />
                    </div>
                </div>

                {/* User Name */}
                <div className='flex-1'>
                    <p className='font-medium'>{user?.fullName}</p>
                </div>
            </div>

            {/* Divider */}
            <div className='divider my-0 h-1'></div>
        </>
    );
};

export default OtherUser;
