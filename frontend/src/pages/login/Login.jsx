import { useState } from "react";
import { FaUser, FaUnlock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <body className="font-Roboto font-semibold m-0 p-0 box-border flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat ">
      <div className="wrapper w-96 backdrop-filter backdrop-blur-lg text-white rounded-xl pt-8 pb-8 pr-9 pl-9 border-2  border-orange-800">
        <form>
          <h1 className="text-3xl text-center ">Login</h1>

          <div className="w-full h-16 my-8">
            <input
              type="text"
              placeholder="Username"
              required
              className="relative w-full h-full bg-transparent border-solid border-2 divide-red-400 rounded-3xl placeholder:text-white text-base pt-5 pr-11 pb-5 pl-5 border-orange-800"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="absolute right-[15%] top-2/ -translate-y-11 hover:text-orange-800" />
          </div>

          <div className="w-full h-16 my-8">
            <input
              type="text"
              placeholder="Password"
              required
              className=" relative w-full h-full bg-transparent border-solid border-2 border-orange-800 rounded-3xl placeholder:text-white text-base pt-5 pr-11 pb-5 pl-5"
            ></input>
            <FaUnlock className="absolute right-[15%] top-2/ -translate-y-10 hover:text-orange-800" />
          </div>

          <div className="remember-forget flex justify-between text-sm -mt-4 mr-0 mb-4 ml-0">
            <label className="accent-white decoration-none">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>

          <button
            type="submit"
            className="w-full h-11 bg-white border-none outline-none text-gray-700 rounded-3xl shadow-sm cursor-pointer font-semibold hover:bg-orange-800"
          >
            Login
          </button>

          <div className="register-link text-sm text-center mt-5 mr-0 ml-0 mb-4 ">
            <p className="to-white decoration-none font-semibold ">
              {"Don't"} Have an accout?
              <Link
                to={"/signup"}
                className="hover:underline decoration-1"
                href="#"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </body>
  );
};
export default Login;
