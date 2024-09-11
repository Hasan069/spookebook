import avatar from "../../assets/avatar.jpeg";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "item-end" : "item-end";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-orange-800" : " ";

  return (
    <>
      <div className={`m-2 flex items-start space-x-2 ${chatClassName}`}>
        <div className="  w-14 rounded-full ring-inset-2 ring-2 ring-orange-800">
          <img src={profilePic} alt="Avatar" className="rounded-full" />
        </div>
        <div
          className={`bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs ${bubbleBgColor}`}
        >
          {message.message}
        </div>
        <span className="text-sm font-normal  dark:text-gray-400">11:46</span>
      </div>
    </>
  );
};

export default Message;

{
  /* <>
  <div className="flex gap-2 items-center rounded-2xl p-2 py-4 cursor-pointer ">
  <div className="avatar">
  <div className="  w-14 rounded-full ring-inset-2 ring-2 ring-orange-800">
  <img src={avatar} alt="Avatar" className="rounded-full" />
  </div>
  </div>
  <div className="flex flex-col w-full min-w-[420px] max-w-[420px] leading-1.5 p-4 border-gray-200 bg-orange-800 rounded-e-3xl rounded-es-3xl ">
  <div className="flex items-center space-x-2 rtl:space-x-reverse ">
  <span className="text-sm font-semibold text-gray-900 dark:text-white hover:text-black">
  Tanvir Hasan Serazy
  </span>
  <span className="text-sm font-normal  dark:text-gray-400">11:46</span>
  </div>
  <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white text-justify">
  Press Win_key + : for Emojis 🐸
  </p>
  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
  Delivered
  </span>
  </div>
  </div>
  </> */
}

{
  /* <img src={avatar} alt="Avatar" class="w-10 h-10 rounded-full" /> */
}

{
  /* <div class="flex justify-end items-end space-x-2 mt-4">
  <div class="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
    <div className="  w-14 rounded-full ring-inset-2 ring-2 ring-orange-800">
      <img src={profilePic} alt="Avatar" className="rounded-full" />
    </div>
    You underestimate my power!
  </div>
  <span className="text-sm font-normal  dark:text-gray-400">11:46</span>
</div> */
}
