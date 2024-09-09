import { useState } from "react";
import { FaUser, FaUnlock } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {loading,login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="font-Roboto font-semibold m-0 p-0 box-border flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat ">
      <div className="wrapper w-96 backdrop-filter backdrop-blur-lg text-white rounded-xl pt-8 pb-8 pr-9 pl-9 border-2  border-orange-800">
        <form onSubmit={handleSubmit}>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            disabled={loading}
          >
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              "Login"
            )}
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
    </div>
  );
};
export default Login;
