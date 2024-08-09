import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Searchinput = () => {
  return (
    <form className="flex items-center gap-2 ">
    <input type="text" placeholder='search' className='p-2 input input-bordered rounded-lg h-10' />
    <button type='submit' className='btn btn-circle text-white'>
    <IoIosSearch className='h-10 w-8 outline-none'/>
    </button>
    </form>
  )
}

export default Searchinput
