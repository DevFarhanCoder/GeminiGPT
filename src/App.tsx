import SideBar from "./components/SideBar"
import './App.css'
import ChatWindow from "./components/ChatWindow"

export default function App() {
  return (
    <div className="
      text-neutral-300
      h-screen bg-neutral-800
      flex
      w-full
      flex-col md:flex-row">
      <div className="
        hidden md:block
        md:w-64 lg:w-1/4 xl:w-1/5
        bg-neutral-900
        overflow-auto
        scroll-smooth
        p-3 md:p-4
        h-full
        ">
        <SideBar />
      </div>
      <div className="
        h-screen flex-grow
        bg-neutral-800
        w-full
        p-3 md:p-4
        ">
        <ChatWindow />
      </div>
    </div>
  );
  
  
}