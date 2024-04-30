import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Img, Text } from "components";
import { CiMenuFries } from "react-icons/ci";
import Sidebar from "./Sidebar";

 import "./header.css"
import { Dropdown } from "rsuite";
const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const div = document.querySelector('.bouncingDiv');
    if (div) {
      div.classList.add('bounceAnimation');
      // Remove the animation class after the animation completes to prevent repeating the animation
      div.addEventListener('animationend', () => {
        div.classList.remove('bounceAnimation');
      });
    }
  }, []);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <>
      <header className={props.className}>
        <NavLink to="/" className="nav-link">
          {/* <Img
            className="h-[27px] sm:h-auto object-cover w-full "
            src="images/img_rectangle21748_27x1440.png"
            alt="rectangle21748"
          /> */}
        </NavLink>
        <div className="bg-white-A700_11 flex md:flex-col  flex-row md:gap-5 items-center justify-start p-[30px] sm:px-5 shadow-bs1 w-full">
          <div className="flex items-center sm:w-full w-[30%] ">
            <NavLink to="/" className="nav-link">
              <Img
                onClick={() => navigate("/")}
                className="cursor-pointer h-[65px] sm:h-[40px] w-[65px] sm:w-[40px]  md:ml-[0] object-cover "
                src="images/logo.svg"
                alt="whatsappimageTwenty"
              />
            </NavLink>
            <Text onClick={()=>navigate('/')}
              className={` sm:mt-[-0.5%] cursor-pointer bg-clip-text text-orange-400 bg-gradient sm:text-base capitalize ml-2 text-xl tracking-[0.25px] sm:w-[80%] ${
                location.pathname === "/" ? "active-link" : ""
              }`}
              size="txtPoppinsRegular20"
            >
              FLANKER SECURITY
            </Text>
            <div className="p-0.5 bg-transparent static z-10 right-5 top-[29px]  rounded-md sm:block hidden">
              
    <CiMenuFries  className="text-white-A700 cursor-pointer text-4xl" onClick={toggleSidebar}/>
    
            </div>
           
          </div>
          
          <ul className=" flex md:flex-1    sm:flex-col flex-row gap-8 sm:hidden items-start justify-center md:ml-[0] ml-[-32px] w-[40%] md:w-full common-row-list">
            <NavLink
              to="/aboutus"
              className={`nav-link ${
                location.pathname === "/aboutus"
                  ? "border-b-2 border-yellow-500"
                  : ""
              }`}
            >
              <li>
                <Text
                  className={`capitalize  mb-0.5 text-base text-white-A700 tracking-[0.16px] hover:text-orange-400 ${
                    location.pathname === "/aboutus" ? "active-link" : "breadcrumb-link"
                  }`}
                  size="txtPoppinsMedium16"
                >
                  about us
                </Text>
              </li>
            </NavLink>
            <NavLink
              to="/services"
              className={`nav-link ${
                location.pathname === "/services" 
                  ? "border-b-2 border-yellow-500"
                  : ""
              }`}
            >
              <li className="relative" 
               onMouseEnter={() => setIsDropdownOpen(true)}
              
              >
             
                <Text
                  className={`capitalize  mb-0.5 hover:text-orange-400 text-base text-white-A700 tracking-[0.16px] ${
                    location.pathname === "/services"  ? "active-link" : "breadcrumb-link"
                  }`}
                  size="txtPoppinsMedium16"
                 
                >
                  Services
                </Text>
                {isDropdownOpen && (
                 <ul
                 onMouseLeave={() => setIsDropdownOpen(false)}
                 className="absolute left-50 top-10 bg-black-900 shadow-md rounded-md py-2  w-52">
                 <NavLink to="/guards" onClick={closeDropdown}>
                   <li className="hover:text-orange-400 text-white-A700 cursor-pointer pl-6  py-2  transition-colors duration-300" >
                   Security Guards
                   </li>
                 </NavLink>
                 <NavLink to="/infrastructure" onClick={closeDropdown}>
                   <li className="hover:text-orange-400 text-white-A700 cursor-pointer px-4 py-2  transition-colors duration-300 pl-6">
                     Security Infra
                   </li>
                 </NavLink>
                 <NavLink to="/training" onClick={closeDropdown}>
                   <li className="hover:text-orange-400 text-white-A700 cursor-pointer px-4 py-2  transition-colors duration-300 pl-6">
                     Security Training
                   </li>
                 </NavLink>
                 <NavLink to="/Audits" onClick={closeDropdown}>
                   <li className="hover:text-orange-400 text-white-A700 cursor-pointer px-4 py-2  transition-colors duration-300 pl-6">
                     Security Audits
                   </li>
                 </NavLink>
                 <NavLink to="/drones" onClick={closeDropdown}>
                   <li className="hover:text-orange-400 text-white-A700 cursor-pointer px-4 py-2  transition-colors duration-300 pl-6">
                     Drones
                   </li>
                 </NavLink>
                 <NavLink to="/investigation" onClick={closeDropdown}>
                   <li className="hover:text-orange-400 text-white-A700 cursor-pointer px-4 py-2  transition-colors duration-300 pl-6">
                    Investigation
                   </li>
                 </NavLink>
                 <NavLink to="/risk-assessment" onClick={closeDropdown}>
                   <li className="hover:text-orange-400 text-white-A700 cursor-pointer px-4 py-2  transition-colors duration-300 pl-6">
                     Risk-Assessment
                   </li>
                 </NavLink>
                 <NavLink to="/risk-assessment" onClick={closeDropdown}>
                   <li className="hover:text-orange-400 text-white-A700 cursor-pointer px-4 py-2  transition-colors duration-300 pl-6">
                     Housekeeping
                   </li>
                 </NavLink>
                 <NavLink to="/risk-assessment" onClick={closeDropdown}>
                   <li className="hover:text-orange-400 text-white-A700 cursor-pointer px-4 py-2  transition-colors duration-300 pl-6">
                     NRI Properties
                   </li>
                 </NavLink>
               </ul>
               
                )}
              </li>
            </NavLink>
            <NavLink
              to="/gallery"
              className={`nav-link ${
                location.pathname === "/gallery"
                  ? "border-b-2 border-yellow-500"
                  : ""
              }`}
            >
              <li>
                <Text
                  className={`capitalize mb-0.5 hover:text-orange-400 text-base text-white-A700 tracking-[0.16px] ${
                    location.pathname === "/gallery" ? "active-link" : " breadcrumb-link"
                  }`}
                  size="txtPoppinsMedium16"
                >
                  Gallery
                </Text>
              </li>
            </NavLink>
            <NavLink
              to="/contactform"
              className={`nav-link ${
                location.pathname === "/contactform"
                  ? "border-b-2 border-yellow-500"
                  : ""
              }`}
            >
              <li>
                <Text
                  className={`capitalize  hover:text-orange-400 mb-0.5 text-base text-white-A700 tracking-[0.16px] ${
                    location.pathname === "/contactform" ? "active-link" : "breadcrumb-link"
                  }`}
                  size="txtPoppinsMedium16"
                >
                  Contact Us
                </Text>
              </li>
            </NavLink>
          </ul>
      
        
        </div>
        
      </header>
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen}/>}
    </>
  );
};

Header.defaultProps = {};

export default Header;
