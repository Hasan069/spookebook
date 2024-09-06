import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";

const LogoutButton = () => {
  return (
    <div>
      <div className="mt-auto">
        <RiLogoutCircleLine className="h-10 w-10 bg-transparent text-gray-800  m-2 rounded-2xl hover:bg-red-800 cursor-pointer" />
      </div>
    </div>
  );
};

export default LogoutButton;
