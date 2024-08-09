import Conversations from "./Conversations"
import Searchinput from "./Searchinput"
import Logoutbutton from "./Logoutbutton"

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-orange-400 px-3  ">
      <Searchinput />
      <div className="flex w-full flex-col">
        <div className="grid grid-cols-1 divide-y mt-5 ">
          <div></div>
          <div></div>
        </div>
      </div>
      <Conversations />
      <Logoutbutton />
    </div>
  )
}

export default Sidebar
