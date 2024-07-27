import React from "react";
import { FaUser, FaUnlock } from "react-icons/fa";
// import LoginPage from "/Users/Cyanider/Desktop/spookebook/src/LoginPage";


function app() {
  return (
    <body className="font-Roboto font-semibold m-0 p-0 box-border flex justify-center items-center min-h-screen  bg-[url('./assets/login-background.jpg')] bg-cover bg-center bg-no-repeat backdrop-blur-xl">
      <div class="wrapper" className="w-96 bg-transparent text-white rounded-xl pt-8 pb-8 pr-9 pl-9 border-2 border-y-red-400 border-x-purple-400">
        <form>
          <h1 className="text-3xl text-center ">Login</h1>


          <div className="w-full h-16 my-8" >
            <input type="text" placeholder="username" required className="relative w-full h-full bg-transparent border-solid border-2 divide-red-400 rounded-3xl placeholder:text-white text-base pt-5 pr-11 pb-5 pl-5" />
            <FaUser class="icon " className="absolute right-[43%] top-2/ -translate-y-11"/>
          </div>

          <div className="w-full h-16 my-8">
            <input type="text" placeholder="password" required className=" relative w-full h-full bg-transparent border-solid border-2 divide-red-400 rounded-3xl placeholder:text-white text-base pt-5 pr-11 pb-5 pl-5"></input>
            <FaUnlock class="icon " className="absolute right-[43%] top-2/ -translate-y-11"/>
          </div>



          <div class="remember-forget" className="flex justify-between text-sm -mt-4 mr-0 mb-4 ml-0">
            <label className="accent-white decoration-none"><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password</a>
          </div>

          <button type="submit" className="w-full h-11 bg-white border-none outline-none text-gray-700 rounded-3xl shadow-sm cursor-pointer font-semibold ">Login</button>

          <div class="register-link" className="text-sm text-center mt-5 mr-0 ml-0 mb-4 ">
            <p className="to-white decoration-none font-semibold ">Don't Have an accout?<a className="hover:underline decoration-1" href="#">Register</a></p>
          </div>
        </form>
      </div>
    </body>
  );
};

export default app;