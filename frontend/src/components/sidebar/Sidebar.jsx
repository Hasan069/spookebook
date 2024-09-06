import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r-2 border-orange-800 px-3 ">
      <SearchInput />
      <div className="flex w-full flex-col outline-4 outline-orange-800">
        <div className="grid grid-cols-1 divide-y mt-9  "></div>
      </div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
