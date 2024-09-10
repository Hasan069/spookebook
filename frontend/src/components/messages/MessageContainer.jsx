import Messages from "../messages/Messages";
import MessageInput from "../messages/MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";

const MessegeContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col min-w-[450px]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className="bg-orange-900 px-4 py-2 mb-2 rounded-lg ">
            <span className="lebel-text font-bold">
              To:
              <span className="text-white font-bold">
                {" "}
                {selectedConversation.fullName}
              </span>
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessegeContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="px-4 text-center text-white font-semibold flex flex-col items-center gap-2 text-xl">
        <p>Welcome 👋🏼</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl text-center" />
      </div>
    </div>
  );
};
