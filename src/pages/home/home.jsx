import Sidebar from "../components/sidebar/Sidebar"
import MessegaContainer from "../components/messages/MessageContainer";


const Home = () => {
  return (
    <div className=" flex rounded-xl bg-clip-padding p-1 backdrop-filter backdrop-blur-lg bg-opacity-50 max-h-[80vh] ">

      <Sidebar />
      <MessegaContainer/>
    </div>
  )

}

export default Home;
