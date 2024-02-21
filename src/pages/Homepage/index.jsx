import React, { useState } from "react";

import {
  Banner,
  Button,
  CheckBox,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import guard from "../../assets/SVG/Guard.svg";
import { FaCheck } from "react-icons/fa6";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";

const HomepagePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center mb-[-20px] justify-start mx-auto w-full ">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="font-poppins h-[875px] md:px-5 relative w-full sm:bg-[#1A1313]">
            <div className=" h-[875px] m-auto w-full">
              <Img
                className="h-[875px] m-auto object-cover w-full sm:hidden"
                src="images/img_rectangle21985_875x1440.png"
                alt="rectangle21985"
              />
              <div className="absolute bottom-[22%] flex flex-col items-start justify-start left-[7%] ml-[-30px] w-[53%]">
                <Text
                  className="capitalize leading-[89.00px] sm:text-3xl sm:ml-[15%] sm:w-[334px] sm:-mt-[-20%] md:text-5xl text-6xl text-white-A700 tracking-[0.25px] w-full"
                  size="txtPoppinsBold60"
                >
                  Your Comprehensive Security Provider
                </Text>
                <Text
                  className="leading-[29.00px] mt-4 text-[15px] text-white-A700 sm:ml-[16%] tracking-[0.50px] w-[71%] sm:w-[298px]"
                  size="txtLatoRegular15"
                >
                  We’re not just a security company, we’re the solution to all
                  your safety needs
                </Text>
                <div className="flex flex-row font-poppins gap-[21px] items-center justify-start mt-11 w-[41%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <button
                      onClick={()=>navigate('/aboutus')}
                      className="hover:bg-orange-400 sm:ml-[120%] hover:text-black-900 capitalize border border-orange-400 border-solid shadow-bs text-orange-400 cursor-pointer font-medium h-11 leading-[normal] min-w-[143px] text-base  text-center tracking-[0.16px]"
                      variant="outline"
                    >
                      contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
              <Img
                className="flex-1 h-[27px] sm:h-auto object-cover w-full"
                src="images/img_rectangle21748_4.png"
                alt="rectangle21748"
              />
              <div className="bg-white-A700_11 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 shadow-bs1 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-2 w-[95%] md:w-full">
                  <Img
                    className="h-[65px] cursor-pointer sm:h-auto sm:m-[] sm:ml-[-75%] object-cover sm:w-[13%] w-[7%] md:w-full"
                    src="images/img_whatsappimage20231213.png"
                    alt="whatsappimageTwenty"
                  />
                  <span onClick={() => navigate("/")}>
                    {" "}
                    <Text
                      className="bg-clip-text bg-gradient1 text-orange-400  capitalize sm:ml-[-30px] md:ml-[0] ml-5 sm:mt-[-13.5%]  text-xl tracking-[0.25px]"
                      size="txtPoppinsRegular20"
                    >
                      FLANKER SECURITY
                    </Text>
                  </span>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[132px] w-[32%] md:w-full">
                    <ul className="flex flex-row gap-8 sm:hidden items-start justify-between w-full common-row-list">
                      <li>
                        <p
                          onClick={() => navigate("/aboutus")}
                          className="capitalize mb-0.5 text-base text-white-A700 tracking-[0.16px] "
                        >
                          <Text size="txtPoppinsMedium16">about us</Text>
                        </p>
                      </li>
                      <li>
                        <p
                          onClick={() => navigate("/services")}
                          className="capitalize mb-0.5 text-base text-white-A700 tracking-[0.16px]"
                        >
                          <Text size="txtPoppinsMedium16">Services</Text>
                        </p>
                      </li>
                      <li>
                        <p
                          onClick={() => navigate("/gallery")}
                          className="capitalize mt-0.5 text-base text-white-A700 tracking-[0.16px]"
                        >
                          <Text size="txtPoppinsMedium16">Gallery</Text>
                        </p>
                      </li>
                      <li>
                        <p
                          onClick={() => navigate("/contactform")}
                          className="capitalize text-base text-white-A700 tracking-[0.16px]"
                        >
                          <Text size="txtPoppinsMedium16">Contact Us</Text>
                        </p>
                      </li>
                    </ul>
                    
                  </div>
                  <div className="bg-white-A700 flex flex-col font-heebo items-start justify-end mb-2 md:ml-[0] ml-[247px] md:mt-0 mt-[15px] p-[5px] rounded-[21px] w-[14%] md:w-full">
                    <div className="flex flex-row gap-3 items-start justify-start w-[90%] md:w-full">
                      <div className="bg-gradient  flex flex-col h-[31px] items-center justify-start p-[9px] rounded-[15px] w-[31px]">
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
                        +9844235672
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </header> */}
            <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full"/>
            {/* <Line className="bg-green-400 h-[3px] mt-[3px] rounded-[1px] w-[19%]" /> */}
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1164px] mt-[95px] mx-auto md:px-5 w-full">
            <Img
              className="h-[640px] md:h-auto object-cover sm:h-auto sm:mt-[-28%] sm:w-[355px]"
              src="images/img_rectangle22076_640x502.png"
              alt="rectangle22076"
            />
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[125px] md:mt-0 mt-[130px]">
              <Text
                className="text-gray-600 text-sm tracking-[2.00px] uppercase"
                size="txtRedHatDisplayRomanMedium14"
              >
                About us
              </Text>
              <Text
                className="capitalize leading-[49.00px] mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px] w-full"
                size="txtHeeboRegular36"
              >
                <span className="text-gray-900 font-redhatdisplay text-left font-normal">
                  We Provide services for{" "}
                </span>
                <span className="text-gray-900 font-redhatdisplay text-left font-bold">
                  multiple{" "}
                </span>
                <span className="text-gray-900 font-redhatdisplay text-left font-bold">
                  customers in various industries worldwide
                </span>
              </Text>
              <Text
                className="mt-[25px] text-[15px] text-black-900_cc tracking-[0.50px] sm:w-full sm:text-2xl"
                size="txtLatoRegular15Black900cc"
              >
                Trust us with the security of what’s important to you
              </Text>
              <div className="flex flex-row font-poppins gap-[13px] items-center justify-start mt-[23px] w-[56%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[48%] mt-5 sm:ml-[-4%]">
                  <Button
                    onClick={() => navigate("/aboutus")}
                    className="!text-black-900 hover:bg-transparent hover:outline-orange-400 border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[142px] text-base text-center tracking-[0.16px]"
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col font-opensans items-center justify-start mt-[106px] p-[94px] md:px-10 sm:px-5 w-full">
            <List
              className="flex flex-col gap-[55px] items-center max-w-[1240px] mx-auto w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[31px] w-[35%] md:w-full">
                  <div className="flex flex-row font-redhatdisplay gap-[18px] items-end justify-start w-[89%] md:w-full">
                    <Text
                      className="my-1 text-gray-600 text-sm tracking-[2.00px] uppercase"
                      size="txtRedHatDisplayRomanMedium14"
                    >
                      premium security services
                    </Text>
                    <Img
                      className="h-[29px] w-[29px] transition-all hover:filter hover:grayscale hover:invert"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                  <Text
                    className="capitalize leading-[49.00px] mt-[15px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px] w-full"
                    size="txtHeeboRegular36"
                  >
                    <span className="text-gray-900 font-redhatdisplay text-left font-normal">
                      Our Services{" "}
                    </span>
                    <span className="text-gray-900 font-redhatdisplay text-left font-bold">
                      Make your business secure
                    </span>
                  </Text>
                  <Text
                    className="mt-[25px] text-[15px] text-black-900_cc tracking-[0.50px]"
                    size="txtLatoRegular15Black900cc"
                  >
                    Trust us with the security of what’s important to you
                  </Text>
                </div>
                <div className={`bg-white-A700 mr-6   hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[200px] p-[27px] sm:px-5 rounded-sm w-[22%] md:w-full transition-all duration-400 ${
                    isHovered7 ? "hover:bg-orange-400" : ""
                  }`}
                  onMouseEnter={() => setIsHovered7(true)}
                  onMouseLeave={() => setIsHovered7(false)}
                  onClick={()=>navigate('/guards')}
                  >
                  <Img
                    className="h-[60px] mt-[35px] hover:filter hover:brightness-110"
                    src={
                      isHovered7
                        ? "images/img_guard_black_900.svg"
                        : "images/img_guard.svg"
                    }
                    alt="guard"
                  />
                  <Text
                    className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Guards
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Guarding the Now, Securing the Future.
                  </Text>
                </div>
                <div
                  className={`bg-white-A700 cursor-pointer flex md:flex-1 ml-6 flex-col items-start justify-end p-[25px] sm:px-5 rounded-sm w-[22%] md:w-full transition-all duration-400 ${
                    isHovered4 ? "hover:bg-orange-400" : ""
                  }`}
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}
                  onClick={()=>navigate('/infrastructure')}
                >
                  <Img
                    className="h-[60px] mt-[35px] text-black-900"
                    src={
                      isHovered4
                        ? "images/infra_black.svg"
                        : "images/infra_yellow.svg"
                    }
                    alt="guard_One"
                  />
                  <Text
                    className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Infra
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Guarding Tomorrow's Security Today.
                  </Text>
                </div>
                
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 my-0 w-full">
              
                
                
                <div 
                  className={`bg-white-A700  cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5 rounded-sm w-[22%] md:w-full transition-all duration-400  ${
                    isHovered1 ? "hover:bg-orange-400" : ""
                  }`}
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                  onClick={()=>navigate('/security-audits')}
                >
                  <Img
                    className="h-[60px] mt-[35px] text-black-900"
                    src={
                      isHovered1
                        ? "images/Audits_Black.svg"
                        : "images/Audits_yellow.svg"
                    }
                    alt="guard_One"
                  />
                  <Text
                    className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Audits
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Ensuring Safety with Strategic Audits.
                  </Text>
                </div>
                <div
                  className={`bg-white-A700 cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5 rounded-sm w-[22%] md:w-full transition-all duration-400 ${
                    isHovered5 ? "hover:bg-orange-400" : ""
                  }`}
                  onMouseEnter={() => setIsHovered5(true)}
                  onMouseLeave={() => setIsHovered5(false)}
                  onClick={()=>navigate('/risk-assessment')}

                >
                  <Img
                    className="h-[60px] mt-[35px] text-black-900"
                    src={
                      isHovered5
                        ? "images/Risk_black.svg"
                        : "images/Risk_yellow.svg"
                    }
                    alt="guard_One"
                  />
                  <Text
                    className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Risk Assessment
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Assessing Today, Securing Tomorrow.
                  </Text>
                </div>
                <div
                  className={`bg-white-A700 cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5 rounded-sm w-[22%] md:w-full transition-all duration-400 ${
                    isHovered2 ? "hover:bg-orange-400" : ""
                  }`}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                  onClick={()=>navigate('/drones')}
                >
                  <Img
                    className="h-[60px] mt-[35px] text-black-900"
                    src={
                      isHovered2
                        ? "images/drone.svg"
                        : "images/drones_yellow.svg"
                    }
                    alt="guard_One"
                  />
                  <Text
                    className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Drones
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Our counter-drone technology stands vigilant.
                  </Text>
                </div>
                <div
                  className={`bg-white-A700 cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5 rounded-sm w-[22%] md:w-full transition-all duration-400 ${
                    isHovered3 ? "hover:bg-orange-400" : ""
                  }`}
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                  onClick={()=>navigate('/training')}
                >
                  <Img
                    className="h-[60px] mt-[35px] text-black-900"
                    src={
                      isHovered3
                        ? "images/img_guard_black_900.svg"
                        : "images/img_guard.svg"
                    }
                    alt="guard_One"
                  />
                  <Text
                    className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Training
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    Training the first line of defense.
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Text
            className="mt-[94px] text-gray-600 text-sm tracking-[2.00px] uppercase sm:ml-[-50%]"
            size="txtRedHatDisplayRomanMedium14"
          >
            why choose us
          </Text>
          <Text
            className="capitalize leading-[49.00px] mt-[19px] sm:text-3xl sm:ml-10 text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px] w-[57%] sm:w-full transition-all duration-400"
            size="txtHeeboRegular36"
          >
            
            <span className="text-gray-900 font-redhatdisplay text-left font-normal">
              We Provide services for{" "}
            </span>
            <span className="text-gray-900 font-redhatdisplay text-left font-bold">
              multiple{" "}
            </span>
            <span className="text-gray-900 font-redhatdisplay text-left font-bold">
              customers in various industries worldwide
            </span>
          </Text>
          <div className=" font-lato md:h-[auto] h-[553px] max-w-[1242px] mt-[62px] mx-auto md:px-5 relative w-full">
            <Img
              className="absolute h-[441px] left-[0] object-cover top-[0] w-[62%] sm:w-full"
              src="images/img_rectangle22083.png"
              alt="rectangle22083"
            />
            <Text
              className="absolute sm:hidden leading-[29.00px] right-[3%] text-[15px] text-gray-700 top-[15%] tracking-[0.50px] w-[31%] sm:w-full"
              size="txtLatoRegular15Gray700"
            >
              The Property Management Vertical encompasses the full spectrum of
              House Keeping Services, Landscaping, Maintenance Support Team and
              Support Staff with highly professional teams led by Facility
              Mangers.
            </Text>
            <div
              className="sm:hidden absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-inter h-[248px] items-center justify-start p-[54px] md:px-10 sm:px-5 right-[0] w-[53%]"
              style={{ backgroundImage: "url('images/img_group50520.svg')" }}
            >
              <div className="flex flex-col gap-[34px] items-start justify-start w-[94%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <span className="flex gap-3">
                    <FaCheck className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />{" "}
                    <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">
                      Perfection Anytime
                    </span>
                  </span>

                  <span className="flex gap-3 mr-4">
                    <FaCheck className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />{" "}
                    <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">
                      Trained Professionals
                    </span>
                  </span>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[97px] items-center justify-start w-[96%] md:w-full">
                  <span className="flex gap-3">
                    <FaCheck className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />{" "}
                    <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">
                    Advance Technology
                    </span>
                  </span>
                  <span className="flex gap-3 ml-2">
                    <FaCheck className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />{" "}
                    <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">
                    Emergency help
                    </span>
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between w-[94%] md:w-full">
                  <span className="flex gap-3">
                    <FaCheck className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />{" "}
                    <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">
                      24/7 Monitoring
                    </span>
                  </span>
                  <span className="flex gap-3 mr-5">
                    <FaCheck className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />{" "}
                    <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">
                    Remote Guarding
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="mt-[150px] text-gray-600 text-sm tracking-[2.00px] uppercase"
            size="txtRedHatDisplayRomanMedium14"
          >
            TESTIMONIAL
          </Text>
          <Text
            className="capitalize leading-[49.00px] mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 tracking-[1.00px] w-[39%] sm:w-full"
            size="txtHeeboRegular36"
          >
            <span className="text-gray-900 font-redhatdisplay font-normal">
              We Provide services for a huge
            </span>
            <span className="text-gray-900 font-redhatdisplay font-bold">
              {" "}
              number of{" "}
            </span>
            <span className="text-gray-900 font-redhatdisplay font-bold">
              customers{" "}
            </span>
          </Text>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 2 },
              1050: { items: 3 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="flex gap-[74px] max-w-[1165px] mt-[111px] mx-auto md:px-5 w-full"
            items={[...Array(18)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col items-center justify-start mx-2.5">
                  <div className="bg-gray-100 border border-gray-600_23 border-solid flex flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 rounded-sm w-full">
                    <div className="flex flex-col items-start justify-start mt-1 w-[96%] md:w-full">
                      <div className="flex flex-row items-center justify-start ml-1 md:ml-[0] w-[46%] md:w-full">
                        <Img
                          className="h-[22px] w-[22px]"
                          src="images/img_star.svg"
                          alt="star"
                        />
                        <Img
                          className="h-[22px] ml-1 w-[22px]"
                          src="images/img_star.svg"
                          alt="star_One"
                        />
                        <Img
                          className="h-[22px] ml-1 w-[22px]"
                          src="images/img_star.svg"
                          alt="star_Two"
                        />
                        <Img
                          className="h-[22px] ml-1 w-[22px]"
                          src="images/img_star.svg"
                          alt="star_Three"
                        />
                      </div>
                      <Text
                        className="mt-[21px] text-4xl sm:text-[32px] md:text-[34px] text-amber-400 tracking-[0.50px]"
                        size="txtLeckerliOneRegular36"
                      >
                        “
                      </Text>
                      <Text
                        className="h-[228px] leading-[29.00px] text-[15px] text-gray-700 tracking-[0.50px] w-[228px]"
                        size="txtLatoRegular15Gray700"
                        style={{ lineHeight: "1.93" }}
                      >
                        Top-qTop-quality Products Sourced From The Most Ideal
                        LocationsTop-quality Products Sourced From The Most
                        ITop-quality Products Sourced From The Most Ideal
                        Locationsdeal LocationsTop-quality Products Sourced From
                        The Most I
                      </Text>
                      <Text
                        className="mt-7 text-black-900 text-xl tracking-[0.50px]"
                        size="txtLatoMedium20Black900"
                      >
                        Abhishek Verma
                      </Text>
                      <Text
                        className="mt-3 text-gray-600 text-lg tracking-[0.50px]"
                        size="txtLatoMedium18"
                      >
                        PR Manager
                      </Text>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-orange-400 w-2.5" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="flex h-2.5 justify-center mt-[71px] w-[105px]"
            count={6}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-orange-400 w-2.5"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block md:ml-[0] mx-[4.50px] sm:ml-[0]"
            unselectedWrapperCss="inline-block md:ml-[0] mx-[4.50px] sm:ml-[0]"
          />
          {/* <div className="font-poppins h-[748px] md:h-[850px] mt-[102px] md:px-5 relative w-full">
            <Img
              className="h-[748px] m-auto object-cover w-full"
              src="images/img_rectangle22077.png"
              alt="rectangle22077"
            />
            <div className="absolute bg-white-A700 flex flex-col gap-[52px] h-max inset-y-[0] items-start justify-center my-auto p-[60px] md:px-10 sm:px-5 right-[9%] rounded w-[43%]">
              <div className="flex flex-col items-center justify-start mt-[3px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <a
                    href="javascript:"
                    className="text-gray-600 text-sm tracking-[2.00px] uppercase"
                  >
                    <Text size="txtRedHatDisplayRomanMedium14">contact us</Text>
                  </a>
                  <Text
                    className="mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900_e5 tracking-[0.36px]"
                    size="txtPoppinsRegular36"
                  >
                    Have Questions?
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_e5 tracking-[0.36px]"
                    size="txtPoppinsSemiBold36"
                  >
                    Get in Touch!
                  </Text>
                  <div className="font-lato sm:gap-5 gap-[26px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[37px] w-full">
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        Full name
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        Company Name
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        Email Id
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <Text
                        className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        size="txtLatoRegular15Gray600a0"
                      >
                        Phone Number
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-[3px] w-[32%] md:w-full">
                <Button className="border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-base text-center tracking-[0.16px]">
                  get in touch
                </Button>
              </div>
            </div>
          </div> */}
          <Banner />
          <Footer className="flex items-center justify-center mt-10 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
