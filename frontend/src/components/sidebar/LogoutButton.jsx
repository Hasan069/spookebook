import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div>
      <div className="mt-auto">
        {!loading ? (
          <RiLogoutCircleLine
            className="h-10 w-10 bg-transparent text-gray-800  m-2 rounded-2xl hover:bg-red-800 cursor-pointer"
            onClick={logout}
          />
        ) : (
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
        )}
      </div>
    </div>
  );
};

export default LogoutButton;
