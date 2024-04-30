import React, { useEffect, useRef, useState } from "react";

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
import "./Slider.css"
import Slider1 from "./Slider"
import guard from "../../assets/SVG/Guard.svg";
import { FaCheck } from "react-icons/fa6";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import sec_6 from "../../assets/Event_Sec/sec_6.webp"

const HomepagePage = () => {
  const ser_data = [
    {
      path: "/guards",
      hover: "images/img_guard_black_900.svg",
      image: "images/img_guard.svg",
      title: "Security Guards",
      desc: "Guarding the Present, Securing the Future.",
    },
    {
      path: "/infrastructure",
      hover: "images/infra_black.svg",
      image: "images/infra_yellow.svg",
      title:(<>
        <p className="mt-2">Security Infra</p>
        </>),
      desc: `Security & Intergrated Infrastructure.`,
    },
    {
      path: "/security-audits",
      image: "images/Audits_yellow.svg",
      hover: "images/Audits_Black.svg",
      title: "Security Audits",
      desc: "Ensuring Safety with Strategic Audits.",
    },
    {
      path: "/risk-assessment",
      hover: "images/Risk_black.svg",
      image: "images/Risk_yellow.svg",
      title:(<>
        <p className="mt-1.5">Risk Assessment</p>
        </>),
      desc: "Assessing Today, Securing Tomorrow.",
    },
    // {
    //   path: "/drones",
    //   image: "images/drones_new_yellow.svg",
    //   hover: "images/drone_new.svg",
    //   title: "Drones",
    //   desc: "Aerial Surveillance beyond Horizons.",
    // },
    // {
    //   path: "/training",
    //   image: "images/training_yel.svg",
    //   hover: "images/training_blackk.svg",
    //   title: "Security Training",
    //   desc: "Training the first line of defense.",
    // },
    
    // {
    //   path: "/investigation",
    //   hover: "images/img_guard_black_900.svg",
    //   image: "images/img_guard.svg",
    //   title: "Investigation",
    //   desc: "Investigating the Unknown - Uncovering the Truth.",
    // },
    
  ];
  const slidesData = [
    {
      id: 1,
      content: (
          <div className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-12 sm:px-5   w-[30px] md:w-full transition-all duration-400 
            `}
            
            onClick={()=>navigate('/guards')}
            >
            <Img
              className="h-[60px]  hover:filter hover:brightness-110"
              src={
               
                   "images/img_guard.svg"
                  
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
              Guarding Now, Securing the Future.
            </Text>
            <Img src=""/>
          </div>
      ),
    },
    {
      id: 2,
      content: (
          <div
                    className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-12 sm:px-5  w-[30px] md:w-full transition-all duration-400
                       
                    `}
                   
                    onClick={()=>navigate('/infrastructure')}
                  >
                    <Img
                      className="h-[60px]  text-black-900"
                      src={
                        
                           "images/infra_yellow.svg"
                          
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
      ),
    },
    {
      id: 3,
      content: (
          <div 
                    className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-12 sm:px-5  w-[30px] md:w-full transition-all duration-400
                      
                    `}
                    onMouseEnter={() => set(true)}
                    onMouseLeave={() => set(false)}
                    onClick={()=>navigate('/security-audits')}
                  >
                    <Img
                      className="h-[60px] text-black-900"
                      src={
                        
                           "images/Audits_yellow.svg"
                          
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
      ),
    },
    {
      id: 4,
      content: (
          <div
                    className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-12 sm:px-5  w-[30px] md:w-full transition-all duration-400`}
                    
                    onClick={()=>navigate('/risk-assessment')}
  
                  >
                    <Img
                      className="h-[60px]  text-black-900"
                      src={
                        
                         
                          "images/Risk_yellow.svg"
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
      ),
    },
    {
      id: 5,
      content: (
          <div
          className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-12 sm:px-5  w-[30px] md:w-full transition-all duration-400`}
          
          onClick={()=>navigate('/drones')}
        >
          <Img
            className="h-[60px]  text-black-900"
            src={
              
                
                 "images/drones_new_yellow.svg"
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
            Our drone technology stands vigilant.
          </Text>
        </div>
      ),
    },
    {
      id: 6,
      content: (
          <div
          className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-12 sm:px-5  w-[30px] md:w-full transition-all duration-400`}
          
          onClick={()=>navigate('/training')}
        >
          <Img
            className="h-[60px]  text-black-900"
            src={
              
                
                 "images/img_guard.svg"
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
      ),
    },
    {
      id: 7,
      content: (
          <div
          className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-12 sm:px-5  w-[30px] md:w-full transition-all duration-400`}
          
          onClick={()=>navigate('/investigation')}
        >
          <Img
            className="h-[60px] text-black-900"
            src={
              
                
                 "images/img_guard.svg"
            }
            alt="guard_One"
          />
          <Text
            className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
            size="txtOpenSansRomanBold24"
          >
            Investigation
          </Text>
          <Text
            className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
            size="txtOpenSansRomanSemiBold14"
          >
            Uncovering Truths, Ensuring Security.
          </Text>
        </div>
      ),
    },
  ];
  const totalSlides = 7;
  const [currentSlide, setCurrentSlide] = useState(0);
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
  const videoRef = useRef(null)
  const videoRef2 = useRef(null)


  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    resetInterval();
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    resetInterval();
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
    resetInterval();
  };

  const resetInterval = () => {
    const interval = setInterval(goToNextSlide, 5000); // Reset interval
    clearInterval(interval);
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col sm:overflow-hidden items-center mb-[-20px] justify-start sm:mx-0 mx-auto w-full ">
        <div className="flex flex-col items-center justify-start w-full ">
          <div className="font-poppins h-[775px]  relative w-full  sm:bg-[#070710]">
          <div className="h-[775px] m-auto w-full relative ">
  <Img
    className="h-[775px] m-auto object-cover w-full hidden sm:hidden"
    src="images/img_rectangle21985_875x1440.webp"
    alt="rectangle21985"
  />

<div className="w-full sm:mt-40 sm:hidden">
        {/* Video */}
        <video className=' inset-0  brightness-50 object-cover w-full h-full' ref={videoRef} autoPlay loop muted>
          <source src="images/bannerVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
<div className="w-full sm:block hidden">
        {/* Video */}
        <video className=' inset-0  brightness-50 object-cover w-full sm:mt-24 sm:auto' ref={videoRef2} autoPlay loop muted>
          <source src="images/mobile_banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  <div className="absolute bottom-[30%] flex flex-col items-start justify-start sm:left-0 left-[3%] w-[53%] sm:w-full md:px-5  sm:-top-2">
    <Text
      className="capitalize leading-[59.00px] sm:leading-[45.00px] sm:text-[31px] sm:font-normal sm:mt-[15rem] sm:ml-[0%] sm:w-[334px] md:text-5xl text-6xl text-white-A700 tracking-[0.25px] w-full"
      size="txtPoppinsBold60"
    >
      Your Security is Our Priority
    </Text>
    <Text
      className="leading-[29.00px] mt-4 text-[18px] font-[300] text-white-A700 sm:ml-[0%] tracking-[0.50px] w-[71%] sm:w-[298px] sm:leading-6 sm:mt-2"
      size="txtLatoRegular15"
    >
      We’re the one stop solution for all your safety and security needs
    </Text>
    <div className="flex flex-col sm:flex-row font-poppins gap-[21px] items-start justify-start mt-11 w-[41%] md:w-full sm:ml-[0%] sm:mt-6">
      <button
        onClick={()=>navigate('/contactform')}
        className="hover:bg-orange-400 hover:text-black-900 capitalize border border-orange-400 border-solid shadow-bs text-orange-400 sm:bg-orange-400 sm:text-black-900 cursor-pointer font-medium h-11 leading-[normal] min-w-[143px] text-base text-center tracking-[0.16px]"
        variant="outline"
      >
        contact us
      </button>
    </div>
  </div>
</div>

            
            <Header className=" absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full"/>
            {/* <Line className="bg-green-400 h-[3px] mt-[3px] rounded-[1px] w-[19%]" /> */}
          </div>
          
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1164px] mt-[25px]  mx-auto md:px-5 w-full sm:w-[100%] rounded-xl ">
          <Img
              className="h-[640px] w-[40%] md:h-auto object-cover sm:h-auto  sm:hidden sm:mt-[1%] sm:w-[380px]"
               //src="images/img_rectangle22076_640x502.png"
              src="images/portrait-male.jpg"
              alt="rectangle22076"
            />
            <div className="flex  flex-col items-start justify-start md:ml-[0] ml-[105px] md:mt-0 mt-[50px] sm:mt-8">
              <Text
            className="text-gray-600 text-sm sm:ml-1 tracking-[2.00px] uppercase sm:text-[14px]"
                size="txtRedHatDisplayRomanMedium14"
              >
                About us 
              </Text>
              <Text
                className="capitalize sm:text-[20px] sm:w-full sm:leading-6 leading-[49.00px] mt-[19px] text-4xl md:text-[34px] text-gray-900 tracking-[1.00px] w-full sm:mt-2"
                size="txtPoppinsMedium16"
              >
                {/* We Provide Comprehensive Security Services For Multiple Customers in Various Industries and Institutions Worldwide */}
                <span className="text-gray-900 font-poppins text-left font-normal">
                We Provide Comprehensive Security Services For{" "} 
                </span>
                <span className="text-gray-900 font-poppins text-left font-[600]">
                  multiple{" "}
                </span>
                <span className="text-gray-900 font-poppins text-left font-[600]">
                  customers in various industries and Institutions Worldwide
                </span>
              </Text>
              <Text
                className="mt-[25px] text-[17px] leading-[32.00px] sm:text-[18px] text-gray-700  tracking-[0.50px] sm:w-full sm:mt-4"
                size="txtLatoRegular15Gray700"
              >
Welcome to Flanker Security Services, your premier security partner. With unwavering dedication, we pride ourselves on being a top provider of comprehensive security services. Our seasoned professionals ensure the highest standards in safeguarding assets, people, and information.              </Text>
              <div className="flex flex-row font-poppins  gap-[13px] items-center justify-start mt-[3px] sm:-ml-0.2 w-[56%] sm:w-[45%]  md:w-full">
                <div className="flex  flex-col items-start justify-start w-[48%] sm:w-[90%] mt-5  ">
                  <Button
                    onClick={() => navigate("/aboutus")}
                    className="  bg-transparent hover:bg-orange-400 hover:outline-orange-400 !text-orange-400 hover:!text-black-900 border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[142px] text-base text-center tracking-[0.16px] sm:bg-orange-400 sm:text-black-900 sm:hidden"
                  >
                    Know More
                  </Button>
                  <Button
                    onClick={() => navigate("/aboutus")}
                    className="  bg-transparent hover:bg-orange-400 hover:outline-orange-400  text-black-900 border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[142px] text-base text-center tracking-[0.16px] sm:bg-orange-400 sm:text-black-900 sm:block hidden"
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          </div> 
          <Img
              className="h-[640px] md:h-auto object-cover sm:px-5 sm:h-[420px] hidden sm:block sm:mt-[10%] sm:w-full"
              // src="images/img_rectangle22076_640x502.png"
              src="images/portrait-male.jpg"
              alt="rectangle22076"
            />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1164px] mt-[25px]  mx-auto md:px-5 w-full sm:w-[100%] rounded-xl sm:mt-3">
          
            <div className="flex  flex-col items-start justify-start md:ml-[0] md:mt-0 mt-[130px] sm:mt-12">
              <Text
            className="text-gray-600 text-sm sm:ml-0 tracking-[2.00px] uppercase sm:text-[14px] "
                size="txtRedHatDisplayRomanMedium14"
              >
                Certification 
              </Text>
              <Text
                className="capitalize sm:text-[20px] sm:w-full leading-[49.00px] mt-[19px] sm:mt-2 text-4xl md:text-[34px] text-gray-900 tracking-[1.00px] w-[85%] sm:leading-6"
                size="txtPoppinsMedium16"
              >
                {/* We Provide Comprehensive Security Services For Multiple Customers in Various Industries and Institutions Worldwide */}
                <span className="text-gray-900 font-poppins text-left font-[600]">
                ISO Certification: {" "}
                </span>
                <span className="text-gray-900 font-poppins text-left font-normal">
                Elevating Standards in Security Solutions {" "} 
                </span>
                
                <span className="text-gray-900 font-poppins text-left font-[600]">
                  
                </span>
              </Text>
              <Text
                className="mt-[25px] text-[17px] leading-[32.00px] sm:text-[18px] text-gray-700  tracking-[0.50px] sm:w-full w-[85%] sm:mt-3"
                size="txtLatoRegular15Gray700"
              >
 Flanker Security is now ISO certified by HYM International Certifications Pvt Ltd since February 5, 2024. Our commitment to top-tier security services and property management is reinforced by this recognition. Clients can trust in our quality, reliability, and adherence to rigorous ISO standards, ensuring the safety of their assets. We prioritize security, professionalism, and efficiency, setting the industry standard for excellence.
</Text>              {/* <div className="flex flex-row font-poppins  gap-[13px] items-center justify-start mt-[3px] sm:-ml-0.2 w-[56%] sm:w-[45%]  md:w-full">
                <div className="flex  flex-col items-start justify-start w-[48%] sm:w-[90%] mt-5  ">
                  <Button
                    onClick={() => navigate("/aboutus")}
                    className="  bg-transparent hover:bg-orange-400 hover:outline-orange-400 !text-orange-400 hover:!text-black-900 border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[142px] text-base text-center tracking-[0.16px]"
                  >
                    Know More
                  </Button>
                </div>
              </div> */}
            </div>
            <Img
              className="h-[540px] w-[50%] mt-10 md:h-auto object-cover sm:h-auto sm:mt-[1%] sm:w-[380px]"
              // src="images/img_rectangle22076_640x502.png"
              src="images/iso_cert.jpg"
              alt="rectangle22076"
            />
          </div> 
          {/* bg-gray-50 */}
          <div className="bg-gray-200 sm:hidden flex flex-col font-opensans items-center justify-start mt-[106px]  p-[94px] sm:h-[640px] sm:pb-0 sm:mx-5 sm:px-5 w-full sm:w-[95%] sm:mt-12">
            <List
              className="flex flex-col gap-[55px] items-center max-w-[1240px] mx-auto w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full sm:mt-[-20%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[31px] w-[35%] md:w-full">
                  <div className="flex flex-row font-redhatdisplay gap-[18px] items-end justify-start w-[89%] md:w-full ">
                    <Text
                      className="my-1 sm:mt-6 text-gray-600 text-sm sm:text-[14px] tracking-[2.00px] uppercase "
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
                    className="capitalize leading-[49.00px] mt-[15px] text-4xl sm:text-[20px] md:text-[34px] text-gray-900 tracking-[1.00px] w-full sm:leading-8 sm:w-[80%]"
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
               
                {/* <Slider1 /> */}

                {/* <div className="slider-container mt-6 sm:block hidden w-[90%] mx-auto">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        ref={sliderRef}
      >
        {slidesData.map((slide, index) => (
          <div className="slide" key={slide.id}>
            {slide.content}
          </div>
        ))}
      </div>
      
      
    </div>
    <div className="hidden sm:block w-full ">
    <div className="dots mb-1 hidden  sm:flex items-center justify-center">
        {slidesData.map((slide, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div> */}
      
              
          <div className="bg-gray-200 mb-4 hidden sm:block pb-8 w-full sm:-mt-2">
  <div className="grid grid-cols-2 gap-2 mx-auto w-[100%]">
    {
      ser_data.map((data,idx)=>(
        <div key={idx} className="bg-white-A700 rounded-md  flex flex-col ">
        <Img src={data.image} className="w-10 mt-6 mx-4" alt="" />
        <Text
          size="txtOpenSansRomanBold24"
          className="mt-5 text-md mb-2 mx-4 text-black-900 tracking-[0.25px]"
        >
          {data.title}
        </Text>
        <p className="desc ">{data.desc}</p>
        <div className="w-[80%] mx-auto mb-2">
          <Img
            className="h-[29px] float-right  w-[29px] transition-all hover:filter hover:grayscale hover:invert"
            src="images/Arrow.svg"
            alt="arrowleft"
          />
        </div>
      </div>
      ))
    }
   
   
    
    
    {/* Repeat the same structure for additional cards */}
  </div>
</div>

    
                {/* Dots section ends */}
                
                <div className={`bg-white-A700 mr-6 shadow-xl   sm:hidden hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end md:ml-[0] ml-[220px] p-[27px] sm:px-5 w-[25%] md:w-full transition-all duration-400 rounded-xl ${
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
Guarding the Present, Securing the Future.                  </Text>
                </div>
                
                <div
                  className={`bg-white-A700 shadow-xl sm:hidden cursor-pointer flex md:flex-1 ml-6 sm:ml-[2%] flex-col items-start justify-end p-[25px] sm:px-5  w-[25%] pr-1 md:w-full transition-all duration-400 rounded-xl ${
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
                    Enhanced Security with intergrated Infrastructure.
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
                    className="h-[60px] mt-[35px]  text-black-900"
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
                    Aerial Surveillance beyond Horizons.
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
                    Training the first line of defense.
                  </Text>
                </div>
                
              </div>
            </List>
          </div>
          <div className="w-full  bg-gray-200  hidden sm:block sm:-mb-2 mt-10">
          <div className="flex flex-row font-redhatdisplay gap-[18px] items-end justify-start w-[89%] md:w-full sm:px-4">
                    <Text
                      className="my-1 sm:mt-6 text-gray-600 text-sm sm:text-[14px] tracking-[2.00px] uppercase "
                      size="txtRedHatDisplayRomanMedium14"
                    >
                      premium security services
                    </Text>
                    <Img
                      className="h-[29px] w-[29px] transition-all hover:filter hover:grayscale hover:invert"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                      onClick={()=>navigate('/services')}
                    />

                    
                  </div>
                  <Text
                    className="capitalize leading-[49.00px] mt-[15px] text-4xl sm:text-[18px] md:text-[34px] text-gray-900 tracking-[1.00px] w-full sm:leading-6 sm:w-[80%] px-4 sm:mt-1"
                    size="txtPoppinsSemiBold36"
                  >
                    <span className="text-gray-900 font-poppins text-left font-normal" >
                      Our Services{" "}
                    </span>
                    <span className="text-gray-900 font-poppins text-left font-[600]">
                      Make your business secure
                    </span>
                  </Text>


                  <div className="bg-gray-200 mb-4 hidden sm:block pb-4 w-full sm:mt-8">
  <div className="grid grid-cols-2 gap-2 mx-auto w-[90%]">
    {
      ser_data.map((data,idx)=>(
        <div key={idx} className="bg-white-A700 rounded-md  flex flex-col ">
        <Img src={data.image} className="w-10 mt-6 mx-4" alt="" />
        <Text
          size="txtOpenSansRomanBold24"
          className="mt-5 text-md mb-2 mx-4 text-black-900 tracking-[0.25px]"
        >
          {data.title}
        </Text>
        <p className="desc ml-4">{data.desc}</p>
        <div className="w-[80%] mx-auto mb-2">
          <Img
            className="h-[29px] float-right  w-[29px] transition-all hover:filter hover:grayscale hover:invert"
            src="images/Arrow.svg"
            alt="arrowleft"
            onClick = {()=>navigate(data.path)}
          />
        </div>
      </div>
      ))
    }
   
   
    
    
    {/* Repeat the same structure for additional cards */}
  </div>
</div>
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
            className="mt-[94px] sm:hidden mb-5 sm:-mt-[30%] sm:text-[14px]  text-gray-600 text-sm tracking-[2.00px] uppercase sm:ml-[-44%]"
            size="txtRedHatDisplayRomanMedium14"
          >
            why choose us
          </Text>
          <Text
            className=" capitalize sm:text-[20px] leading-[49.00px] sm:leading-6 mt-[19px]  sm:ml-10 text-4xl md:text-[34px] text-gray-900 tracking-[1.00px] w-[63%] sm:w-full transition-all duration-400"
            size="txtPoppinsSemiBold36"
          >
            
            <span className="text-gray-900 font-poppins text-left font-normal">
              We Provide services for{" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-[600]">
              multiple{" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-[600]">
              customers in various  industries worldwide
            </span>
          </Text>
          <Text
                className="mt-[25px] hidden sm:block text-[17px] leading-[32.00px] sm:text-[18px] text-gray-700  tracking-[0.50px] sm:w-[88%] "
                size="txtLatoRegular15Gray700"
              >
The Property Management Vertical encompasses the full spectrum of House Keeping Services, Landscaping, Maintenance Support Team and Support Staff with highly professional teams led by Facility Mangers.                </Text>
<div className="w-[90%] rounded-md bg-orange-300 p-4 mt-14 pb-8 sm:block hidden sm:px-5 sm:mt-8">
     <ul>
       <li className="mb-5 ml-2 mt-8">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-[18px] text-black-900 text-left tracking-[0.25px]">
             Perfection Anytime
           </span>
         </span>
       </li>
       <li className="mb-5 ml-2">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-[18px] text-black-900 text-left tracking-[0.25px]">
           Trained Professionals
           </span>
         </span>
       </li>
       <li className="mb-5 ml-2">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-[18px] text-black-900 text-left tracking-[0.25px]">
           Advance Technology
           </span>
         </span>
       </li>
       <li className="mb-5 ml-2">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-[18px] text-black-900 text-left tracking-[0.25px]">
           Emergency help
           </span>
         </span>
       </li>
       <li className="mb-5 ml-2">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-[18px] text-black-900 text-left tracking-[0.25px]">
           24/7 Monitoring
           </span>
         </span>
       </li>
       <li className="mb-4 ml-2">
         <span className="flex gap-3">
           <FaCheck className="mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />
           <span className="font-semibold text-[18px] text-black-900 text-left tracking-[0.25px]">
           Remote Guarding
           </span>
         </span>
       </li>
     </ul>
   </div>
          <div className=" font-lato md:h-[auto] h-[553px] max-w-[1242px] mt-[62px] sm:mt-0 mx-auto md:px-5 relative w-full ">
          <Img
              className="absolute sm:h-[301px] sm:w-[90%] h-[441px] left-[0] object-cover top-[0] w-[62%] sm:ml-5  rounded-xl sm:rounded-b-md sm:rounded-t-none sm:-mt-1"
              src="images/img_rectangle22083.webp"
              alt="rectangle22083"
            />
            
            <Text
              className="absolute sm:hidden leading-[32.00px] sm:leading-6 right-[3%] text-[17px] text-gray-700 top-[15%] tracking-[0.50px] w-[31%] sm:w-full"
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
                <div className="flex flex-row items-center justify-between w-[94%] md:w-full">
                  <span className="flex gap-3">
                    <FaCheck className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />{" "}
                    <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">
                      Advance Technology
                    </span>
                  </span>
                  <span className="flex gap-3 mr-7">
                    <FaCheck className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />{" "}
                    <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">
                    Emergency Help
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
            className="mt-[90px] text-gray-600 text-sm tracking-[2.00px] uppercase sm:mt-[90%]"
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
              Clients{" "}
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
            className="flex gap-[74px] max-w-[1165px] mt-[51px] sm:mt-12 mx-auto md:px-5 w-full"
            items={[...Array(12)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col  mt-5 items-center justify-start mx-2.5 sm:mx-">
                  <div className="bg-gray-100   border-solid flex flex-col  items-center justify-end p-[20px] md:px-10 sm:px-5 rounded-md w-full ">
                    <div className="flex flex-col  items-start justify-start mt-1 w-[96%]  md:w-full">
                      <div className="flex flex-row items-center justify-start -ml-3 md:ml-[0] w-[46%] md:w-full">
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
                        className="mt-[21px] text-4xl   sm:text-[32px] md:text-[34px] text-amber-400 tracking-[0.50px]"
                        size="txtLeckerliOneRegular36"
                      >
                        “
                      </Text>
                      <Text
                        className=" leading-[29.00px] text-[18px] text-black-900 tracking-[0.50px] w-[308px] "
                        size="txtLatoRegular15Gray700"
                        style={{ lineHeight: "1.53" }}
                      >
                        Outstanding professionalism! Our experience with Flanker Security has been exceptional. Their team's vigilance and prompt response have truly enhanced our sense of safety and security.
                      </Text>
                      <Text
                        className="mt-7 text-black-900 text-lg tracking-[0.50px]"
                        size="txtLatoMedium20Black900"
                      >
                        Abhishek Verma
                      </Text>
                      <Text
                        className="mt-3 text-gray-600 text-md tracking-[0.50px]"
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
          {/* border border-red-500 fixed z-50 */}
          <PagerIndicator
            className="flex h-2.5 justify-center mt-[71px] w-[105px] "
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
          <Footer className="flex items-center justify-center mt-3 -mb-8 sm:-mt-56 sm:-mb-8 md:px-5 w-full bg-[#070710]" />
        
    </>
  );
};

export default HomepagePage;
