import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Img, Text } from "components";

const Header = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
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
        <div className="bg-white-A700_11 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[30px] sm:px-5 shadow-bs1 w-full">
          <div className="flex items-center">
            <NavLink to="/" className="nav-link">
              <Img
                onClick={() => navigate("/")}
                className="cursor-pointer h-[65px] sm:h-[40px] w-[65px] sm:w-[40px] ml-5 md:ml-[0] object-cover sm:ml-[-155%]"
                src="images/logo.svg"
                alt="whatsappimageTwenty"
              />
            </NavLink>
            <Text onClick={()=>navigate('/')}
              className={`sm:ml-[-25%] sm:mt-[-2.5%] cursor-pointer bg-clip-text bg-gradient capitalize ml-2 text-transparent text-xl tracking-[0.25px] ${
                location.pathname === "/" ? "active-link" : ""
              }`}
              size="txtPoppinsRegular20"
            >
              FLANKER SECURITY
            </Text>
          </div>
          <ul className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-start justify-center md:ml-[0] ml-[132px] w-[30%] md:w-full common-row-list">
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
                  className={`capitalize mb-0.5 text-base text-white-A700 tracking-[0.16px] ${
                    location.pathname === "/aboutus" ? "active-link" : ""
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
              <li>
                <Text
                  className={`capitalize mb-0.5 text-base text-white-A700 tracking-[0.16px] ${
                    location.pathname === "/services" ? "active-link" : ""
                  }`}
                  size="txtPoppinsMedium16"
                >
                  Services
                </Text>
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
                  className={`capitalize mb-0.5 text-base text-white-A700 tracking-[0.16px] ${
                    location.pathname === "/gallery" ? "active-link" : ""
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
                  className={`capitalize mb-0.5 text-base text-white-A700 tracking-[0.16px] ${
                    location.pathname === "/contactform" ? "active-link" : ""
                  }`}
                  size="txtPoppinsMedium16"
                >
                  Contact Us
                </Text>
              </li>
            </NavLink>
          </ul>
          <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[247px] md:mt-0 my-[15px] p-[5px] pr-6 rounded-[21px]  md:w-full sm:hidden">
            <div className="flex flex-row gap-3 items-start justify-start  md:w-full">
              <div className="bg-gradient  flex flex-col h-[31px] items-center justify-start p-[9px] rounded-[15px]">
                <Img
                  className="h-[11px] w-[11px]"
                  src="images/img_call.svg"
                  alt="call"
                />
              </div>
              <Text
                className="mt-1.5 text-black-900 text-sm tracking-[0.25px]"
                size="txtHeeboMedium14"
              >
                +91 91007 92007
              </Text>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
