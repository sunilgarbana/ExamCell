import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome, IoMdClipboard, IoMdSettings, IoMdBook ,IoMdBriefcase,IoMdCalendar,IoMdMenu, IoMdExit} from "react-icons/io";
import { BiBell,BiUserCheck,BiUser} from "react-icons/bi";

const Sidebar = ({ onSelect, isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: "Dashboard", icon: IoMdHome },
    { name: "Exam Schedule", icon: IoMdClipboard },
    { name: "Student Management", icon: BiUser },
    { name: "Attendance", icon: BiUserCheck },
    { name: "Faculty Assignments", icon: IoMdBriefcase },
    { name: "Invigilation Duties", icon: IoMdCalendar },
    { name: "Notifications", icon: BiBell },
    { name: "Settings", icon: IoMdSettings },
  ];

  return (
   
        
    <div className={`fixed md:relative w-64 h-screen bg-gray-900 text-white p-4 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}>
      <h1 className="text-xl font-bold mb-6 flex justify-between items-center">Faculty Portal<span>
      <button className="md:hidden" onClick={toggleSidebar}>
          <IoMdExit size={24} />
        </button>
        </span>
        </h1>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {onSelect(item.name);toggleSidebar();}}
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

const ContentArea = ({ page ,toggleSidebar}) => {
  return (
    <div className="flex-1 p-6 bg-white">
        
        <img 
        src='/aditya.jpg'
        className="float-right lg:w-44 w-20 h-auto"
        alt='aditya-logo'
        ></img>
        <button 
        className="md:hidden mb-4" 
        onClick={toggleSidebar}>
        <IoMdMenu size={24} />
      </button>
      <h2 
      className="text-2xl font-semibold mb-4">
        {page}</h2>
      <p>
        Content for {page} will be displayed here.
        </p>
      
    </div>
  );
};

export default function FacultyDashboard() {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [isSidebarOpen,setIsSidebarOpen]=useState(false)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div 
    className="flex h-screen">
    <Sidebar onSelect={setSelectedPage} 
    isOpen={isSidebarOpen} 
    toggleSidebar={toggleSidebar} />
      <div 
      className="flex-1 lg:ml-4">
        <ContentArea page={selectedPage} 
        toggleSidebar={toggleSidebar} />
        </div>
    </div>
  );
}
