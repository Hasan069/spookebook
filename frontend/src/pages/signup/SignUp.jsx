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
          >
            Register
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
