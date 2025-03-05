import { useState} from "react";
import { Link } from "react-router-dom";
import { IoMdHome, IoMdClipboard, IoMdSettings, IoMdBook,IoMdMenu,IoMdExit} from "react-icons/io";
import { BiBell,BiUserCheck } from "react-icons/bi";

const Sidebar = ({ onSelect,isOpen,toggleSideBar }) => {
  const menuItems = [
    { name: "Dashboard", icon: IoMdHome },
    { name: "Exam Schedule", icon: IoMdClipboard },
    { name: "My Results", icon: IoMdBook },
    { name: "Attendance", icon: BiUserCheck },
    { name: "Notifications", icon: BiBell },
    { name: "Settings", icon: IoMdSettings },
  ];

  return (
    <div className={`fixed md:relative w-64 h-screen bg-gray-900 text-white p-4 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}>
      <h1 className="text-xl font-bold mb-6 flex justify-between items-center">Student Portal
        <span>
            <button onClick={toggleSideBar}
            className="lg:hidden"
            >
                <IoMdExit size={20}/>
            </button>
        </span>
      </h1>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {onSelect(item.name);toggleSideBar();}}
            className="flex items-center gap-2 p-3 w-full text-left hover:bg-gray-700 rounded-lg"
          >
            <item.icon size={20} />
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

const ContentArea = ({ page,toggleSideBar }) => {
  return (
    <div className="flex-1 p-6 bg-white">
       
        <img 
        src='/aditya.jpg'
        className="float-right lg:w-44 w-20 h-auto"
        alt='aditya-logo'
        ></img>
        
        <button 
        onClick={toggleSideBar}
        className="lg:hidden mb-4"
        >
            <IoMdMenu size={20}/>
        </button>
      <h2 className="text-2xl font-semibold mb-4">{page}</h2>
      <p>Content for {page} will be displayed here.</p>
    </div>
  );
};

export default function StudentDashboard() {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [isSidebarOpen,setIsSidebarOpen]=useState(false)
  const toggleSideBar=()=>setIsSidebarOpen(!isSidebarOpen)
  return (
    <div className="flex h-screen">
      <Sidebar onSelect={setSelectedPage} isOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />
      <div className="flex-1 md:ml-4">
        <ContentArea page={selectedPage} toggleSideBar={toggleSideBar} />
        </div>
    </div>
  );
}
