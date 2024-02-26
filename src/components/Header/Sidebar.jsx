import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className={`fixed inset-y-0 right-0 z-50 bg-[#1A1313] w-[75%] transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex justify-end px-4 py-2">
        <button onClick={toggleSidebar}>
          <RiCloseLine className="text-white-A700 mt-5 text-4xl " />
        </button>
      </div>
      <ul className="py-4 mt-16">
        <li className="text-center p-4 flex items-center justify-between text-white-A700" onClick={() => navigate('/')}>
          <span className="hover:text-[#fcb131]">Home →</span>
        </li>
        <li className="p-4 flex items-center justify-between text-white-A700" onClick={() => navigate('/aboutus')}>
          <span className="hover:text-[#fcb131]">About Us →</span>
        </li>
        <li className="p-4 flex items-center hover:text-[#fcb131] justify-between text-white-A700" onClick={() => navigate('/services')}>
          <span className="hover:text-[#fcb131]">Services →</span>
        </li>
        <li className="p-4 flex items-center justify-between text-white-A700" onClick={() => navigate('/gallery')}>
          <span className="hover:text-[#fcb131]">Gallery →</span>
        </li>
        <li className="p-4 flex items-center justify-between text-white-A700" onClick={() => navigate('/contactform')}>
          <span className="hover:text-[#fcb131]">Contact Us →</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
