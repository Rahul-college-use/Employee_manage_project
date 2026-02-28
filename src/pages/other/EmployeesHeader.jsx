import React from 'react';

const EmployeesHeader = ({data}) => {
    // console.log(data);
    const Handlelogout =()=>{
        localStorage.setItem('loggedInUser','')
        window.location.reload()
    }
    return (
        <div className='flex justify-between p-13'>
            <h1 className='font-bold text-1xl text-white'>Hello <br /><span className='text-2xl'>{data.name} 👋</span></h1>
            <button onClick={Handlelogout} className='py-2 px-4 rounded bg-red-600 text-sm text-white cursor-pointer active:scale-95 font-semibold'>Logout</button>
        </div>

    );
}

export default EmployeesHeader;
