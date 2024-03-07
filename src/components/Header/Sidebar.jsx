import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import "./header.css"
import { Text } from "components";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="flex justify-end px-4 py-2">
        <button onClick={toggleSidebar}>
          <RiCloseLine className="text-white-A700 mt-5 text-4xl " />
        </button>
      </div>
      <ul className="py-4 mt-16">
        <li className="text-center p-4 text-[22px]  flex items-center justify-center text-white-A700" onClick={() => navigate('/')}>
          <span className="hover:text-[#070710]">Home →</span>
        </li>
        <li className="p-4 flex items-center text-[22px]   justify-center text-white-A700" onClick={() => navigate('/aboutus')}>
          <span className="hover:text-[#070710]">About Us →</span>
        </li>
        <li className="p-4 flex items-center text-[22px]  hover:text-[#070710] justify-center text-white-A700" onClick={() => navigate('/services')}>
          <span className="hover:text-[#070710]">Services →</span>
        </li>
        <li className="p-4 flex items-center text-[22px]  justify-center text-white-A700" onClick={() => navigate('/gallery')}>
          <span className="hover:text-[#070710]">Gallery →</span>
        </li>
        <li className="p-4 flex items-center text-[22px]  justify-center text-white-A700" onClick={() => navigate('/contactform')}>
          <span className="hover:text-[#070710]">Contact Us →</span>
        </li>
      </ul>

      <Text className="flex flex-col justify-center items-center text-2xl absolute bottom-20 left-10 text-white-A700">
      <IoCallOutline className="text-3xl mb-6 " />
      <p>+91 91007 92007</p>
      </Text>
    </div>
  );
};

export default Sidebar;
