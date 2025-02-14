import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] =  useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
            <div className='bg-gray-900 py-2 px-4 mb-2 flex justify-between rounded'>
                <h2 className='w-1/5 '>Employee Name</h2>
                <h3 className='w-1/5 '>New Task</h3>
                <h5 className='w-1/5 '>Active Task</h5>
                <h5 className='w-1/5 '>Completed Task</h5>
                <h5 className='w-1/5 '>Failed Task</h5>
            </div>
        <div className='overflow-auto'>
        {userData.map(function(elem, idx){
            return(
                <div key={idx} className='border-[1px] border-emerald-500 py-2 px-4 mb-2 flex justify-between rounded'>
                    <h2 className='w-1/5'>{elem.firstName}</h2>
                    <h3 className='w-1/5 text-blue-500'>{elem.taskCounts.newTask}</h3>
                    <h5 className='w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
                    <h5 className='w-1/5 text-green-600'>{elem.taskCounts.completed}</h5>
                    <h5 className='w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
                </div>
                )
            })}
        </div>

    </div>
  )
}

export default AllTask