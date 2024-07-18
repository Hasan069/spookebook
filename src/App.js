import React from "react";
import { FaUser, FaUnlock } from "react-icons/fa";
// import LoginPage from "/Users/Cyanider/Desktop/spookebook/src/LoginPage";


function app() {
  return (
    <body className="font-Roboto font-semibold m-0 p-0 box-border flex justify-center items-center min-h-screen bg-green-500">
      <div class="wrapper" className="w-96 bg-new text-white">
      <form>
        <h1 className="text-3xl text-center">Login</h1>
        <div class="input-box" >
          <input type="text" placeholder="username" required/><FaUser class ="icon"/>
        </div>
        
        <div class="input-box">
          <input type="text" placeholder="password" required></input> <FaUnlock class ="icon"/>
        </div>
        

        <div class="remember-forget">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password</a>
        </div>

        <button type="submit">Login</button>

        <div class="register-link">
          <p>Don't Have an accout?<a href="#">Register</a></p>
        </div>
      </form>
    </div>
    </body>
  );
};

export default app;