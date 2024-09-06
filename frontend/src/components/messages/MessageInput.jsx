import { IoSendSharp } from "react-icons/io5";

const MessageInput = () => {
  return (
    <div>
      <form className="px-4 my-3">
        <div className="w-full relative">
          <input
            type="text"
            className=" w-full h-12 border text-sm  block text-white border-orange-950 bg-orange-950 rounded-lg p-2"
            placeholder="Type a message"
          />
          <button className="flex absolute inset-y-0 end-0 items-center pe-3">
            <IoSendSharp className="h-7 w-7" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
