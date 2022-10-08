import React from 'react';

const suggestion = ({ username, userImage, workPlace }) => {
    return (
        <div className='flex items-center justify-between mt-3'>
            <img 
                className='w-10 h-10 rounded-full border p-[2px]'
                src={userImage}
                alt="profile pic"
            /> 
            <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm'>{username}</h2>
                <h3 className='text-sm text-gray-400'>Works at {workPlace}</h3>
            </div>
            <button className='text-blue-400 text-sm font-semibold'>Follow</button>
        </div>
    );
};

export default suggestion;
