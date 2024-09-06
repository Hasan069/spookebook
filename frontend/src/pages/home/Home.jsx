import MessegeContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className=" flex rounded-xl bg-clip-padding p-1 backdrop-filter backdrop-blur-lg bg-opacity-50 max-h-[80vh] ">
      <Sidebar />
      <MessegeContainer />
    </div>
  );
};

export default Home;
