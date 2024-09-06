import React from "react";
import avatar from "../../assets/avatar.jpeg";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center rounded-2xl p-2 py-4 cursor-pointer hover:bg-orange-800 ">
        <div className="avatar">
          <div className="  w-14 rounded-full ring-inset-2 ring-2 ring-orange-800  relative">
            <img src={avatar} alt="Avatar" className="rounded-full" />
            <span class="absolute top-0 left-9 transform -translate-y-1/2 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="flex gap-3 justify-between">
            <p className="font-semibold text-white "> Tanvir Hasan Serazy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
