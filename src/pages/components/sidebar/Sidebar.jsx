import Conversations from "./Conversations"
import Searchinput from "./Searchinput"
import Logoutbutton from "./Logoutbutton"

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r-2 border-orange-800 px-3 ">
      <Searchinput />
      <div className="flex w-full flex-col outline-4 outline-orange-800">
        <div className="grid grid-cols-1 divide-y mt-9  ">
        </div>
      </div>
      <Conversations />
      <Logoutbutton />
    </div>
  )
}

export default Sidebar
