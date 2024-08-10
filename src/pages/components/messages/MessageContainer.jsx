import Messages from "./Messages"
import MessageInput from "./MessageInput"
import { TiMessages } from "react-icons/ti";
const MessegeContainer = () => {
  const noChatSelected = false;
  return (
    <div className="flex flex-col min-w-[420px]">
      {noChatSelected ? <NoChatSelected /> : (
        <>
        {/* header */}
        <div className="bg-orange-900 px-4 py-2 mb-2 rounded-lg ">
          <span className="lebel-text font-bold">To:<span className="text-white font-bold"> Tanvir Hasan Serazy</span>
          </span>
        </div>
        <Messages />
        <MessageInput />
      </>

      )}
    </div>
  )
}
export default MessegeContainer


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
