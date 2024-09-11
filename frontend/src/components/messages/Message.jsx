import avatar from "../../assets/avatar.jpeg";
import { useAuthContext } from "../../context/AuthContext";

const Message = (message) => {

  const {authUser} = useAuthContext();
  

  return (
    <div>
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
    </div>
  );
};

export default Message;
