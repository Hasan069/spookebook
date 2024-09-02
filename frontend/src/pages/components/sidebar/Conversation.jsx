import React from 'react'
import avatar from "/Users/Cyanider/Desktop/spookebook/src/assets/avatar.jpeg"
const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center rounded-2xl p-2 py-4 cursor-pointer hover:bg-orange-800 ">
        <div className="avatar">
          <div className="  w-14 rounded-full ring-inset-2 ring-2 ring-orange-800 ">
            <img src={avatar} alt="Avatar" className='rounded-full' />
          </div>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="flex gap-3 justify-between">
            <p className="font-semibold text-white "> Tanvir Hasan Serazy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Conversation
