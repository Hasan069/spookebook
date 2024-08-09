import React from "react";
import LoginPage from "./pages/home/login/LoginPage";
import SignupPage from "./pages/home/signup/SignupPage";
import Home from "./pages/home/Home";



function app() {
  return (
    <div className="p-4 flex items-center justify-center h-screen">
      <Home/>
    </div>
  )
};

export default app;