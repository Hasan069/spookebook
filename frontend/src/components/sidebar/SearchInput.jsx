import React from "react";
import { IoIosSearch } from "react-icons/io";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2 mt-8">
      <input
        type="text"
        placeholder="search"
        className="p-2 input input-bordered rounded-lg h-10 bg-orange-800"
      />
      <button
        type="submit"
        className="btn btn-circle text-white hover:text-orange-800"
      >
        <IoIosSearch className="h-10 w-8 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
