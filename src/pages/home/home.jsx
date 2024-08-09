import Sidebar from "../components/sidebar/Sidebar"
import MessegeContainer from "../components/messeges/MessegeContainer";

const Home = () => {
  return (
    <div className=" flex rounded-lg bg-clip-padding p-1 backdrop-filter backdrop-blur-lg bg-opacity-50">

      <Sidebar />
      <MessegeContainer/>
    </div>
  )

}

export default Home;
