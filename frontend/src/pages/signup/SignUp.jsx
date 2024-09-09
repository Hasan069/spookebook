import { FaUser, FaUnlock } from "react-icons/fa";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="w-full font-semibold m-0 p-0 box-border flex justify-center items-center min-h-screen bg-cover bg-center  ">
      <div className=" w-1/4 bg-transparent backdrop-filter backdrop-blur-lg text-white rounded-xl pt-8 pb-8 pr-9 pl-9 border-2 border-y-red-400 border-x-purple-400">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl text-center ">SignUp</h1>

          <div className="flex">
            <div className="w-full h-16 mt-2 pr-1">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="relative w-full h-full bg-transparent border-solid border-2 divide-red-400 rounded-3xl placeholder:text-white text-base pt-5 pr-11 pb-5 pl-5"
                value={inputs.fullName}
                onChange={(e) => {
                  setInputs({ ...inputs, fullName: e.target.value });
                }}
              />
              <FaUser className=" icon absolute right-[12%] top-2/ -translate-y-11" />
            </div>
          </div>

          <div className="w-full h-16 my-8">
            <input
              type="text"
              placeholder="Username"
              required
              className="relative w-full h-full bg-transparent border-solid border-2 divide-red-400 rounded-3xl placeholder:text-white text-base pt-5 pr-11 pb-5 pl-5"
              value={inputs.username}
              onChange={(e) => {
                setInputs({ ...inputs, username: e.target.value });
              }}
            />
            <FaUser className="icon absolute right-[12%] top-2/ -translate-y-11" />
          </div>

          <div className="w-full h-16 my-8">
            <input
              type="text"
              placeholder="Create password"
              required
              className=" relative w-full h-full bg-transparent border-solid border-2 divide-red-400 rounded-3xl placeholder:text-white text-base pt-5 pr-11 pb-5 pl-5"
              value={inputs.password}
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
            />
            <FaUnlock className=" icon absolute right-[12%] top-2/ -translate-y-11" />
          </div>
          <div className="w-full h-16 my-8">
            <input
              type="text"
              placeholder="Confirm password"
              required
              className=" relative w-full h-full bg-transparent border-solid border-2 divide-red-400 rounded-3xl placeholder:text-white text-base pt-5 pr-11 pb-5 pl-5"
              value={inputs.confirmPassword}
              onChange={(e) => {
                setInputs({ ...inputs, confirmPassword: e.target.value });
              }}
            />
            <FaUnlock className="icon absolute right-[12%] top-2/ -translate-y-11" />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <button
            type="submit"
            className="my-3 w-full h-11 bg-white border-none outline-none text-gray-700 rounded-3xl shadow-sm cursor-pointer font-semibold "
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
              "Register"
            )}
          </button>

          <div className="flex m-2}">
            <div className=" signup-with-facebook-google items-center justify-center h-1">
              <button className=" px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500  hover:shadow transition duration-150 hover:bg-white hover:text-black">
                <img
                  className="w-6 h-10"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </button>
            </div>
            <button
              type="button"
              className="py-2 px-4 w-auto border border-slate-700 flex justify-center items-center  hover:bg-white hover:text-black focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 1792 1792"
                color="blue"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
              Sign in with Facebook
            </button>
          </div>

          <div className=" register-link text-sm text-center mt-5 mr-0 ml-0 mb-4 ">
            <p className="to-white decoration-none font-semibold ">
              Already have an accout?{" "}
              <Link
                to={"/login"}
                className="hover:underline decoration-1"
                href="#"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
