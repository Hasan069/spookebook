import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";


const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("insufficient character");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-8">
      <input
        type="text"
        placeholder="search"
        className="p-2 input input-bordered rounded-lg h-10 bg-orange-800"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
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
