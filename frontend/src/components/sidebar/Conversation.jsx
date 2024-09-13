import React from "react";
import avatar from "../../assets/avatar.jpeg";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import OnlineStatus from "./OnlineStatus";

const Conversation = ({ conversation, lastIdx }) => {
  const { setSelectedConversation, selectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center rounded-2xl p-2 py-4 cursor-pointer hover:bg-orange-800 
      ${isSelected ? "bg-orange-800 " : ""}
      `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar`}>
          <div
            className={`w-14 rounded-full ring-inset-2 ring-2 ring-orange-800  relative`}
          >
            <img
              src={conversation.profilePic}
              alt="Avatar"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 ">
          <div className="flex gap-3 justify-between">
            <p className="font-semibold text-white ">
              {" "}
              {conversation.fullName}
            </p>
          </div>
        </div>
      </div>

      {!lastIdx && (
        <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      )}
    </>
  );
};

export default Conversation;

{
  /* <img src={avatar} alt="Avatar" className="rounded-full" />
            <span class="absolute top-0 left-9 transform -translate-y-1/2 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */
}

// ${isOnline ? (
//   <span className="absolute top-0 left-9 transform -translate-y-1/2 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
// ) : (
//   ""
// )
// }

/* <span className="absolute top-0 left-9 transform -translate-y-1/2 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */

// ${
//   isOnline ? OnlineStatus : ""
// }
