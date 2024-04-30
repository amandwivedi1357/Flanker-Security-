import React, { useEffect, useRef, useState } from "react";
import "./ser.css";
import { Banner, Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from "./CardSlider";
import Slider1 from "pages/Homepage/Slider";

const ServicesOnePage = () => {
  const sliderRef = React.useRef(null);
  const slidesData = [
    {
      id: 1,
      content: (
        <div
          className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-16 sm:px-5 md:w-full transition-all duration-400 
            `}
          onClick={() => navigate("/guards")}
        >
          <Img
            className="h-[60px] mt-[35px] hover:filter hover:brightness-110"
            src={"images/img_guard.svg"}
            alt="guard"
          />
          <Text
            className="mt-12 text-2xl  md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
            size="txtOpenSansRomanBold24"
          >
            Security Guards
          </Text>
          <Text
            className="leading-[24.00px] mb-[23px] mt-[8px] text-black-900_b2 text-base tracking-[0.25px] w-full"
            size="txtOpenSansRomanSemiBold14"
          >
            Guarding Now, Securing the Future.
          </Text>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div
          className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-16 sm:px-5  w-[30px] md:w-full transition-all duration-400
                       
                    `}
          onClick={() => navigate("/infrastructure")}
        >
          <Img
            className="h-[60px] mt-[35px] text-black-900"
            src={"images/infra_yellow.svg"}
            alt="guard_One"
          />
          <Text
            className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
            size="txtOpenSansRomanBold24"
          >
            Security Infra
          </Text>
          <Text
            className="leading-[24.00px] mb-[23px] mt-[8px] text-black-900_b2 text-base tracking-[0.25px] w-full"
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
          className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-16 sm:px-5  w-[30px] md:w-full transition-all duration-400
                      
                    `}
          onMouseEnter={() => set(true)}
          onMouseLeave={() => set(false)}
          onClick={() => navigate("/security-audits")}
        >
          <Img
            className="h-[60px] mt-[35px] text-black-900"
            src={"images/Audits_yellow.svg"}
            alt="guard_One"
          />
          <Text
            className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
            size="txtOpenSansRomanBold24"
          >
            Security Audits
          </Text>
          <Text
            className="leading-[24.00px] mb-[23px] mt-[8px] text-black-900_b2 text-base tracking-[0.25px] w-full"
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
          className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-16 sm:px-5  w-[30px] md:w-full transition-all duration-400`}
          onClick={() => navigate("/risk-assessment")}
        >
          <Img
            className="h-[60px] mt-[35px] text-black-900"
            src={"images/Risk_yellow.svg"}
            alt="guard_One"
          />
          <Text
            className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
            size="txtOpenSansRomanBold24"
          >
            Risk Assessment
          </Text>
          <Text
            className="leading-[24.00px] mb-[23px] mt-[8px] text-black-900_b2 text-base tracking-[0.25px] w-full"
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
          className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-16 sm:px-5  w-[30px] md:w-full transition-all duration-400`}
          onClick={() => navigate("/drones")}
        >
          <Img
            className="h-[60px] mt-[35px] text-black-900"
            src={"images/drones_new_yellow.svg"}
            alt="guard_One"
          />
          <Text
            className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
            size="txtOpenSansRomanBold24"
          >
            Drones
          </Text>
          <Text
            className="leading-[24.00px] mb-[23px] mt-[8px] text-black-900_b2 text-base tracking-[0.25px] w-full"
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
          className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-16 sm:px-5  w-[30px] md:w-full transition-all duration-400`}
          onClick={() => navigate("/training")}
        >
          <Img
            className="h-[60px] mt-[35px] text-black-900"
            src={"images/img_guard.svg"}
            alt="guard_One"
          />
          <Text
            className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
            size="txtOpenSansRomanBold24"
          >
            Security Training
          </Text>
          <Text
            className="leading-[24.00px] mb-[23px] mt-[8px] text-black-900_b2 text-base tracking-[0.25px] w-full"
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
          className={`bg-white-A700  hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end rounded-xl md:ml-[0] py-16 sm:px-5  w-[30px] md:w-full transition-all duration-400`}
          onClick={() => navigate("/investigation")}
        >
          <Img
            className="h-[60px] mt-[35px] text-black-900"
            src={"images/img_guard.svg"}
            alt="guard_One"
          />
          <Text
            className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
            size="txtOpenSansRomanBold24"
          >
            Investigation
          </Text>
          <Text
            className="leading-[24.00px] mb-[23px] mt-[8px] text-black-900_b2 text-base tracking-[0.25px] w-full"
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
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const serviceCardsRef = useRef(null);
  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchEndX < touchStartX) {
      goToNextSlide();
    } else if (touchEndX > touchStartX) {
      goToPrevSlide();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
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
  const settings = {
    dots: false, // Hide navigation dots
    arrows: true, // Show navigation arrows
    infinite: true, // Enable infinite looping
    slidesToShow: 4, // Display 4 cards at a time
    slidesToScroll: 1, // Scroll by 1 card at a time
    responsive: [
      {
        breakpoint: 768, // Apply at screens wider than 768px
        settings: {
          slidesToShow: 3, // Display 3 cards on medium screens
        },
      },
      {
        breakpoint: 576, // Apply at screens wider than 576px
        settings: {
          slidesToShow: 2, // Display 2 cards on small screens
        },
      },
    ],
  };
  const slides = [
    {
      path: "/servicesone",
      image: "images/img_guard_black_900.svg",
      alt: "guard",
      title: "Drones",
      description: "Our counter-drone technology stands vigilant.",
    },
    // Add more slides as needed
  ];
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
      title: (<>
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
        <p className="mt-2">Risk Assessment</p>
        </>),
      desc: "Assessing Today, Securing Tomorrow.",
    },
    {
      path: "/drones",
      image: "images/drones_new_yellow.svg",
      hover: "images/drone_new.svg",
      title: "Drones",
      desc: "Aerial Surveillance beyond Horizons.",
    },
    {
      path: "/training",
      image: "images/training_yel.svg",
      hover: "images/training_blackk.svg",
      title: "Security Training",
      desc: "Training the first line of defense.",
    },
    
    {
      path: "/investigation",
      hover: "images/img_guard_black_900.svg",
      image: "images/img_guard.svg",
      title: "Investigation",
      desc: "Investigating the Unknown - Uncovering the Truth.",
    },
    
  ];
  const pms_data = [
    {
      path: "/housekeeping",
      hover: "images/img_cleaningcart.svg",
      image: "images/HouseKeep.svg",
      title: " Housekeeping",
      desc: "Beyond Clean: It's Housekeeping Brilliance.",
    },
    {
      path: "/nri-properties",
      hover: "images/img_propertyagent.svg",
      image: "images/propertyAgent.svg",
      title: "NRI Property",
      desc: " NRI Property Solutions at Your Service.",
   
    },
  ]
  function handleMouseEnter(event, index, hoverImage) {
    const elements = event.currentTarget.getElementsByClassName("vector");
    if (elements.length > 0) {
      elements[0].src = hoverImage;
    }
  }

  function handleMouseLeave(event, index, originalImage) {
    const elements = event.currentTarget.getElementsByClassName("vector");
    if (elements.length > 0) {
      elements[0].src = originalImage;
    }
  }
  useEffect(() => {
    const serviceCards = serviceCardsRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class to each service card
          serviceCards
            .querySelectorAll(".Single_cont")
            .forEach((card, index) => {
              card.style.transitionDelay = `${index}ms`;
              card.classList.add("slide-up");
            });
        }
      });
    });

    if (serviceCards) {
      observer.observe(serviceCards);
    }

    return () => {
      if (serviceCards) {
        observer.unobserve(serviceCards);
      }
    };
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center mb-[-20px] justify-start mx-auto w-full">
        <div className="md:h-[755px] h-[655px] md:px-5 relative w-full ">
          <div className="absolute h-[655px] inset-[0] justify-center  w-full">
            <Img
              className="h-[655px] filter  m-auto object-cover w-full sm:h-[487px]"
              src="images/img_rectangle21985_848x1440.webp"
              alt="rectangle21985"
            />
            <div className="absolute bottom-[40%] flex flex-col items-center justify-center w-full  sm:bottom-[45%]">
              <Text
                className="capitalize sm:text-3xl sm:text-left sm:font-normal sm:w-[90%] leading-[89.00px] sm:leading-[45.00px] md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px] w-[75%] "
                size="txtPoppinsBold60"
              >
                Secure your business with us
              </Text>
              <Text
                className="mt-[1px] text-[18px] sm:text-left sm:w-[90%] text-center text-white-A700_bc tracking-[0.50px]"
                size="txtLatoRegular15"
              >
                Trust the experts with your safety
              </Text>
            </div>
          </div>
          <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div
          className=" bg-gray-200 sm:-mt-64 flex flex-col font-redhatdisplay items-center justify-end p-[100px] md:px-10 sm:px-4 w-full "
          ref={serviceCardsRef}
        >
          <div className="flex flex-col items-start justify-start max-w-[1239px] sm:mt-0 mx-auto w-full">
            <div className="flex flex-col gap-[12px] sm:gap-[2px] items-start justify-start sm:-mt-4">
              <Text
                className="text-gray-600 text-base tracking-[2.00px] uppercase sm:text-[14px] "
                size="txtRedHatDisplayRomanMedium14"
              >
                premium security services
              </Text>
              <Text
                className="capitalize text-4xl sm:-mt-2 sm:mb-2 font-[600] sm:text-[18px] md:text-[34px] text-gray-900 tracking-[1.00px]"
                size="txtPoppinsRegular36"
              >
                Security Services
              </Text>
            </div>


          
            <div className="ser_cont">
              {ser_data.map((data, index) => (
                <div
                  key={index}
                  className="Single_cont shadow-xl"
                  onClick={() => navigate(data.path)}
                  onMouseEnter={(e) => handleMouseEnter(e, index, data.hover)}
                  onMouseLeave={(e) => handleMouseLeave(e, index, data.image)}
                >
                  <img className="vector" src={data.image} alt="guard" />
                  <Text
                    size="txtOpenSansRomanBold24"
                    className=" mt-8 text-xl mb-2 ml-6 md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                  >
                    {data.title}
                  </Text>
                  <p className="desc ml-2">{data.desc}</p>
                </div>
              ))}
            </div>
            {/* <div className="slider-container mt-6 sm:block hidden w-[100%]" 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            >
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
            <div className="hidden sm:block w-full mt-10">
              <div className="dots  hidden  sm:flex items-center justify-center">
                {slidesData.map((slide, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentSlide ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                  ></button>
                ))}
              </div>
            </div> */}

            {/* <Slider1/> */}
          </div>
        </div>

        
        {/* <div className="bg-gray-200 hidden sm:block w-full">
            <div className="w-[92%]  border border-red-500 grid grid-cols-2 gap-2 mx-auto">
            
    
     <div className="bg-white-A700 w-[11.5rem] rounded-md mb-2 flex flex-col ">
           <Img src='images/img_guard.svg' className='w-10 ml-5 mt-8' alt=''/>
           <Text
                    size="txtOpenSansRomanBold24"
                    className=" mt-5 text-md mb-2 ml-5  text-black-900  tracking-[0.25px]"
                  >
                   Security Guards
                  </Text>
                  <p className="desc mr-5">Guarding the Present, Securing the Future.</p>
                  <div className="w-[80%] mx-auto  mb-4">
                  <Img
                      className="h-[29px] float-right  w-[29px] transition-all hover:filter hover:grayscale hover:invert"
                      src="images/Arrow.svg"
                      alt="arrowleft"
                    />
                  </div>

      </div>
      <div className="bg-white-A700 w-[11.5rem] rounded-md mb-2 flex flex-col ">
           <Img src='images/img_guard.svg' className='w-10 ml-5 mt-8' alt=''/>
           <Text
                    size="txtOpenSansRomanBold24"
                    className=" mt-5 text-md mb-2 ml-5  text-black-900  tracking-[0.25px]"
                  >
                     Security Guards
                  </Text>
                  <p className="desc mr-5">Guarding the Present, Securing the Future.</p>
                  <div className="w-[80%] mx-auto  mb-4">
                  <Img
                      className="h-[29px] float-right border border-black-900  w-[29px] transition-all hover:filter hover:grayscale hover:invert"
                      src="images/Arrow.svg"
                      alt="arrowleft"
                    />
                  </div>

      </div> 
   
            </div>

          </div> */}
          <div className="bg-gray-200 mb-4 hidden sm:block pb-8 w-full sm:-mt-8">
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
        <p className="desc1 ">{data.desc}</p>
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

        <div className="bg-gray-200  flex flex-row sm:flex-col font-redhatdisplay items-start   justify-between mt-[57px] sm:pb-5 sm:mt-0 sm:-mb-8 md:pl-10 sm:pl-5 pl-[100px] w-full">
          <div className="flex  sm:w-full mt-24 w-[50%] sm:mt-2 flex-col gap-[12px] sm:gap-[2px]  items-start justify-start">
                <Text
                  className="text-gray-600 text-base sm:text-[14px] tracking-[2.00px] sm:pt-5 uppercase"
                  size="txtRedHatDisplayRomanMedium14"
                >
                  premium services
                </Text>
                <Text
                  className="capitalize sm:-mt-2 text-4xl font-[600] sm:text-[18px] md:text-[34px] text-gray-900 tracking-[1.00px] sm:w-full "
                  size="txtPoppinsBold60"
                >
                  Property management services
                </Text>

                <div className="w-full sm:hidden flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1339px] mx-auto mt-12">
            <div className="flex flex-col md:gap-10 gap-[76px] items-start justify-start sm:-ml-1  md:ml-[0]">
              
              <div className="flex sm:mx-auto sm:pb-6  gap-12 sm:flex-col flex-row font-opensans sm:gap-[55px] items-center justify-between w-full ">
                <div
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                  className="bg-white-A700 sm:-ml-4 transition bg-white duration-300 ease-in-out shadow-2xl cursor-pointer hover:bg-orange-400 flex sm:flex-1 flex-col items-start justify-end p-6 sm:px-5 rounded-md w-[266px] h-[255px] sm:w-[100%] sm:py-12"
                  onClick={() => navigate("/housekeeping")}
                >
                  <Img
                    className="vector1"
                    src={
                      isHovered1
                        ? "images/img_cleaningcart.svg"
                        : "images/HouseKeep.svg"
                    }
                    alt="cleaningcart"
                  />
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[2rem] text-xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Housekeeping
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[26px]  md:ml-[0] ml-[3px] mt-[8px] text-black-900_b2 text-base tracking-[0.25px] sm:font-bold w-[98%] sm:w-full font-normal"
                    size="txtLatoRegular15Gray700"
                  >
                    <>Beyond Clean: It&#39;s Housekeeping Brilliance.</>
                  </Text>
                </div>
                <div
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                  className="bg-white-A700 sm:-ml-4 transition bg-white duration-300 ease-in-out cursor-pointer   shadow-2xl hover:bg-orange-400 border border-gray-500_1e border-solid flex sm:flex-1 flex-col items-start justify-end p-[27px] sm:px-5 rounded-md w-[266px] h-[255px]  sm:w-[100%] sm:py-12 "
                  onClick={() => navigate("/nri-properties")}
                >
                  <Img
                    className="vector1"
                    src={
                      isHovered2
                        ? "images/img_propertyagent.svg"
                        : "images/propertyAgent.svg"
                    }
                    alt="propertyagent"
                  />
                  <Text
                    className=" mt-[2rem]  text-xl md:text-[22px]  text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    NRI Property
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[8px] sm:pr-2 font-normal text-black-900_b2 text-base sm:font-bold tracking-[0.25px] w-full"
                    size="txtLatoRegular15Gray700"
                  >
                    NRI Property Solutions at Your Service.
                  </Text>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
              </div>
              <div className="flex   w-[45%] float-right">
              <Img
              className="h-[578px] w-[100%] md:h-auto object-cover sm:hidden sm:-ml-2 float-right"
              src="images/img_rectangle22115.webp"
              alt="rectangle22115"
              />
              </div>
          <div className="sm:block hidden mt-6">
          <div className="bg-gray-200 hidden sm:block w-full">
  <div className="grid grid-cols-2 gap-2  w-[95%]">
    {
      pms_data.map((data,idx)=>(
        <div key={idx} className="bg-white-A700 rounded-md  flex flex-col ">
        <Img src={data.image} className="w-10 mt-6 mx-4" alt="" />
        <Text
          size="txtOpenSansRomanBold24"
          className="mt-5 text-md mb-2 mx-4 text-black-900 tracking-[0.25px]"
        >
          {data.title}
        </Text>
        <p className="desc1 ">{data.desc}</p>
        <div className="w-[80%] mx-auto mb-2">
          <Img
            className="h-[29px] float-right  w-[29px] transition-all hover:filter hover:grayscale hover:invert"
            src="images/Arrow.svg"
            alt="arrowleft"
            onClick={()=>navigate(data.path)}
          />
        </div>
      </div>
      ))
    }
   
   
    
    
    {/* Repeat the same structure for additional cards */}
  </div>
</div>
          </div>
        </div>

        {/* <Banner /> */}
        <Footer className="flex items-center justify-center mt-[29px] sm:-mt-56 md:px-5 w-full  bg-[#070710]" />
      </div>
    </>
  );
};

export default ServicesOnePage;
