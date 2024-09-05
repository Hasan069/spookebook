import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/signUp";
function App() {
  return (
    <div className="p-4 h-screen w-full items-center justify-center">
      {/* <Login/> */}
      <SignUp/>
    </div>
  );
}

export default App;