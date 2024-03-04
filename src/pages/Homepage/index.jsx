import React, { useState } from "react";

import {
  Banner,
  Button,
  CheckBox,
  FeatureBox,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";

import Slider1 from "./Slider"
import guard from "../../assets/SVG/Guard.svg";
import { FaCheck } from "react-icons/fa6";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import sec_6 from "../../assets/Event_Sec/sec_6.webp"

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
      <div className="bg-white-A700 flex flex-col sm:overflow-hidden items-center mb-[-20px] justify-start sm:mx-0 mx-auto w-full ">
        <div className="flex flex-col items-center justify-start w-full ">
          <div className="font-poppins h-[775px] md:px-5 relative w-full  sm:bg-[#1A1313]">
            <div className=" h-[775px] m-auto w-full">
              <Img
                className="h-[775px] m-auto object-cover w-full sm:hidden"
                src="images/img_rectangle21985_875x1440.webp"
                alt="rectangle21985"
              />
              <div className="absolute bottom-[30%]  flex flex-col items-start justify-start left-[3%]   w-[53%] ">
                <Text
                  className="capitalize leading-[89.00px] sm:text-3xl sm:font-normal  sm:ml-[5%] sm:w-[334px]  md:text-5xl text-6xl text-white-A700 tracking-[0.25px] w-full"
                  size="txtPoppinsBold60"
                >
                  Your Comprehensive Security Provider
                </Text>
                <Text
                  className="leading-[29.00px] mt-6 text-[18px] font-[300] text-white-A700 sm:ml-[5%] tracking-[0.50px] w-[71%] sm:w-[298px]"
                  size="txtLatoRegular15"
                >
                  We’re not just a security company, we’re the solution to all
                  your safety needs
                </Text>
                <div className="flex flex-row font-poppins gap-[21px] items-center justify-start mt-11 w-[41%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <button
                      onClick={()=>navigate('/contactform')}
                      className="hover:bg-orange-400 sm:ml-[85%] hover:text-black-900 capitalize border border-orange-400 border-solid shadow-bs text-orange-400 cursor-pointer font-medium h-11 leading-[normal] min-w-[143px] text-base  text-center tracking-[0.16px]"
                      variant="outline"
                    >
                      contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <Header className=" absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full"/>
            {/* <Line className="bg-green-400 h-[3px] mt-[3px] rounded-[1px] w-[19%]" /> */}
          </div>
          <Img
              className="h-[640px] md:h-auto object-cover sm:h-auto hidden sm:block sm:mt-[1%] sm:w-full"
              // src="images/img_rectangle22076_640x502.png"
              src={sec_6}
              alt="rectangle22076"
            />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1164px] mt-[95px]  mx-auto md:px-5 w-full sm:w-[100%] rounded-xl ">
          <Img
              className="h-[640px] md:h-auto object-cover sm:h-auto  sm:hidden sm:mt-[1%] sm:w-[380px]"
              // src="images/img_rectangle22076_640x502.png"
              src={sec_6}
              alt="rectangle22076"
            />
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[125px] md:mt-0 mt-[130px] sm:-mt-16">
              <Text
                className="text-gray-600 text-sm sm:ml-1 tracking-[2.00px] uppercase sm:text-base"
                size="txtRedHatDisplayRomanMedium14"
              >
                About us
              </Text>
              <Text
                className="capitalize sm:text-[17.5px] sm:w-full sm:leading-6 leading-[49.00px] mt-[19px] text-4xl md:text-[34px] text-gray-900 tracking-[1.00px] w-full"
                size="txtPoppinsMedium16"
              >
                <span className="text-gray-900 font-poppins text-left font-normal">
                  We Provide services for{" "} 
                </span>
                <span className="text-gray-900 font-poppins text-left font-[600]">
                  multiple{" "}
                </span>
                <span className="text-gray-900 font-poppins text-left font-[600]">
                  customers in various industries worldwide
                </span>
              </Text>
              <Text
                className="mt-[25px] text-[17px] leading-[32.00px] sm:text-base text-gray-700  tracking-[0.50px] sm:w-full "
                size="txtLatoRegular15Gray700"
              >
Welcome to Flanker Security Services, your premier security partner. With unwavering dedication, we pride ourselves on being a top provider of comprehensive security services. Our seasoned professionals ensure the highest standards in safeguarding assets, people, and information.              </Text>
              <div className="flex flex-row font-poppins  gap-[13px] items-center justify-start mt-[23px] w-[56%] sm:w-[45%] sm:mx-2 md:w-full">
                <div className="flex  flex-col items-center justify-start w-[48%] sm:w-[90%] mt-5 ml-[-4%] ">
                  <Button
                    onClick={() => navigate("/aboutus")}
                    className="  bg-transparent hover:bg-orange-400 hover:outline-orange-400 !text-orange-400 hover:!text-black-900 border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[142px] text-base text-center tracking-[0.16px]"
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col font-opensans items-center justify-start mt-[106px] p-[94px] sm:pb-0 md:px-10 sm:px-5 w-full">
            <List
              className="flex flex-col gap-[55px] items-center max-w-[1240px] mx-auto w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full sm:mt-[-20%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[31px] w-[35%] md:w-full">
                  <div className="flex flex-row font-redhatdisplay gap-[18px] items-end justify-start w-[89%] md:w-full ">
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
                    className="capitalize leading-[49.00px] mt-[15px] text-4xl sm:text-[18px] md:text-[34px] text-gray-900 tracking-[1.00px] w-full sm:leading-8 sm:w-[80%]"
                    size="txtPoppinsSemiBold36"
                  >
                    <span className="text-gray-900 font-poppins text-left font-normal" >
                      Our Services{" "}
                    </span>
                    <span className="text-gray-900 font-poppins text-left font-[600]">
                      Make your business secure
                    </span>
                  </Text>
                  {/* <Text
                    className="mt-[25px] text-[15px] text-black-900_cc tracking-[0.50px]"
                    size="txtLatoRegular15Black900cc"
                  >
                    Trust us with the security of what’s important to you
                  </Text> */}
                </div>
               
                <Slider1/>
                
                <div className={`bg-white-A700 mr-6 shadow-xl   sm:hidden hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[220px] p-[27px] sm:px-5 w-[22%] md:w-full transition-all duration-400 rounded-xl ${
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
                    className="mt-12 text-xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Guards
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[7px] text-black-900_b2 text-sm tracking-[0.90px] w-full font-normal"
                    size="txtLatoRegular15Gray700"
                  >
                    Guarding the Now, Securing the Future.
                  </Text>
                </div>
                
                <div
                  className={`bg-white-A700 shadow-xl sm:hidden cursor-pointer flex md:flex-1 ml-6 sm:ml-[2%] flex-col items-start justify-end p-[25px] sm:px-5  w-[22%] md:w-full transition-all duration-400 rounded-xl ${
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
                    className="mt-12 text-xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Infra
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[7px] text-black-900_b2 text-sm tracking-[0.90px] w-full font-normal"
                    size="txtLatoRegular15Gray700"
                  >
                    Guarding Tomorrow's Security Today.
                  </Text>
                </div>
                
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 my-0 w-full">
              
                
                
                <div 
                  className={`bg-white-A700 shadow-xl sm:hidden cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5  w-[22%] md:w-full transition-all duration-400 rounded-xl  ${
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
                    className="mt-12 text-xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Audits
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[7px] text-black-900_b2 text-sm tracking-[0.90px] w-full font-normal"
                    size="txtLatoRegular15Gray700"
                  >
                    Ensuring Safety with Strategic Audits.
                  </Text>
                </div>
                <div
                  className={`bg-white-A700 shadow-xl sm:hidden cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5  w-[22%] md:w-full transition-all duration-400 rounded-xl ${
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
                    className="mt-12 text-xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Risk Assessment
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[7px] text-black-900_b2 text-sm tracking-[0.90px] w-full font-normal"
                    size="txtLatoRegular15Gray700"
                  >
                    Assessing Today, Securing Tomorrow.
                  </Text>
                </div>
                <div
                  className={`bg-white-A700 shadow-xl sm:hidden cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5  w-[22%] md:w-full transition-all duration-400 rounded-xl ${
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
                        ? "images/drone_new.svg"
                        : "images/drones_new_yellow.svg"
                    }
                    alt="guard_One"
                  />
                  <Text
                    className="mt-12 text-xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Drones
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[7px] text-black-900_b2 text-sm tracking-[0.90px] w-full font-normal"
                    size="txtLatoRegular15Gray700"
                  >
                    Our counter-drone technology stands vigilant.
                  </Text>
                </div>
                <div
                  className={`bg-white-A700 shadow-xl sm:hidden cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5 w-[22%] md:w-full transition-all duration-400 rounded-xl ${
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
                    className="mt-12 text-xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Training
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[7px] text-black-900_b2 text-sm tracking-[0.90px] w-full font-normal"
                    size="txtLatoRegular15Gray700"
                  >
                    Strengthening the first line of defense through training.
                  </Text>
                </div>
                
              </div>
            </List>
          </div>
          <div className="w-[90%] sm:block hidden  h-auto">
          <Text
            className="mt-[151px] sm:mt-12  text-gray-600 sm:text-left text-sm tracking-[2.00px] uppercase  sm:ml-0"
            size="txtRedHatDisplayRomanMedium14"
          >
            why choose us
          </Text>
          </div>
          <Text
            className="mt-[94px] sm:hidden mb-5 sm:-mt-[30%] sm:text-base  text-gray-600 text-sm tracking-[2.00px] uppercase sm:ml-[-44%]"
            size="txtRedHatDisplayRomanMedium14"
          >
            why choose us
          </Text>
          <Text
            className=" capitalize sm:text-[18px] leading-[49.00px] sm:leading-6 mt-[19px]  sm:ml-10 text-4xl md:text-[34px] text-gray-900 tracking-[1.00px] w-[63%] sm:w-full transition-all duration-400"
            size="txtPoppinsSemiBold36"
          >
            
            <span className="text-gray-900 font-poppins text-left font-normal">
              We Provide services for{" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-[600]">
              multiple{" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-[600]">
              customers in various <br /> industries worldwide
            </span>
          </Text>
          <Text
                className="mt-[25px] text-[17px] leading-[32.00px] sm:text-base text-gray-700  tracking-[0.50px] sm:w-[88%] "
                size="txtLatoRegular15Gray700"
              >
The Property Management Vertical encompasses the full spectrum of House Keeping Services, Landscaping, Maintenance Support Team and Support Staff with highly professional teams led by Facility Mangers.                </Text>
<div className="w-full  bg-orange-300 p-4 mt-6 sm:block hidden">
     <ul>
       <li className="mb-8 ml-8 mt-8">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-base text-black-900 text-left tracking-[0.25px]">
             Perfection Anytime
           </span>
         </span>
       </li>
       <li className="mb-8 ml-8">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-base text-black-900 text-left tracking-[0.25px]">
           Trained Professionals
           </span>
         </span>
       </li>
       <li className="mb-8 ml-8">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-base text-black-900 text-left tracking-[0.25px]">
           Advance Technology
           </span>
         </span>
       </li>
       <li className="mb-8 ml-8">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-base text-black-900 text-left tracking-[0.25px]">
           Emergency help
           </span>
         </span>
       </li>
       <li className="mb-8 ml-8">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-base text-black-900 text-left tracking-[0.25px]">
           24/7 Monitoring
           </span>
         </span>
       </li>
       <li className="mb-8 ml-8">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-base text-black-900 text-left tracking-[0.25px]">
           Remote Guarding
           </span>
         </span>
       </li>
     </ul>
   </div>
          <div className=" font-lato md:h-[auto] h-[553px] max-w-[1242px] mt-[62px] mx-auto md:px-5 relative w-full">
            <Img
              className="absolute h-[441px] left-[0] object-cover top-[0] w-[62%] sm:w-full  rounded-xl sm:rounded-none"
              src="images/img_rectangle22083.webp"
              alt="rectangle22083"
            />
            
            <Text
              className="absolute sm:hidden leading-[32.00px]  right-[3%] text-[17px] text-gray-700 top-[15%] tracking-[0.50px] w-[31%] sm:w-full"
              size="txtLatoRegular15Gray700"
            >
              The Property Management Vertical encompasses the full spectrum of
              House Keeping Services, Landscaping, Maintenance Support Team and
              Support Staff with highly professional teams led by Facility
              Managers.
            </Text>
           
            <div
              className="sm:hidden  rounded-lg absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-inter h-[248px] items-center justify-start  p-[54px] md:px-10 sm:px-5 right-[0] w-[53%] bg-[#fcbe54]"
             
            >
              <div className=" flex flex-col gap-[34px] items-start justify-start w-[94%] md:w-full">
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
            className="mt-[150px] text-gray-600 text-sm tracking-[2.00px] uppercase sm:mt-[130%]"
            size="txtRedHatDisplayRomanMedium14"
          >
            TESTIMONIAL
          </Text>
          <Text
            className="capitalize sm:text-xl sm:w-[95%] leading-[49.00px] mt-[19px] text-4xl md:text-[34px] text-center text-gray-900 tracking-[1.00px] w-[39%] "
            size=""
          >
            <span className="text-gray-900 font-opensans font-normal ">
              We Provide services for a huge
            </span>
            <span className="text-gray-900 font-opensans font-bold">
              {" "}
              number of{" "}
            </span>
            <span className="text-gray-900 font-opensans font-bold">
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
            items={[...Array(12)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col items-center justify-start mx-2.5">
                  <div className="bg-gray-100   border-solid flex flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 rounded-xl w-full">
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
                        className="h-[228px] leading-[29.00px] text-[15px] text-black-900 tracking-[0.50px] w-[228px]"
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
            count={3}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-orange-400 w-2.5"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block md:ml-[0] mx-[4.50px] sm:ml-[0]"
            unselectedWrapperCss="inline-block md:ml-[0] mx-[4.50px] sm:ml-[0]"
          />
          {/* mobile view box starts */}
          
   {/* mobile view box ends */}
         </div>
      </div>
      <Banner className='sm:mt-3'/>
          <Footer className="flex items-center justify-center mt-3 -mb-8 sm:-mt-44 sm:-mb-8 md:px-5 w-full bg-gray-900_01" />
        
    </>
  );
};

export default HomepagePage;
