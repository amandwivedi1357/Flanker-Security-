import React, { useEffect, useRef } from "react";
import './ser.css'
import { Banner, Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from "./CardSlider";
import Slider1 from "pages/Homepage/Slider";

const ServicesOnePage = () => {
  const serviceCardsRef = useRef(null);
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
    { path: '/servicesone', image: 'images/img_guard_black_900.svg', alt: 'guard', title: 'Drones', description: 'Our counter-drone technology stands vigilant.' },
    // Add more slides as needed
  ];
  const ser_data = [
    {
      path:'/drones',
      image:'images/drones_new_yellow.svg',
      hover:'images/drone_new.svg',
      title:'Drones',
      desc:'Our counter-drone  technology stands vigilant.'
    },
    {
      path:'/training',
      image:'images/training_yel.svg',
      hover:'images/training_blackk.svg',
      title:'Security Training',
      desc:'Our counter-drone technology stands vigilant.'
    },
    {
      path:'/guards',
      hover:'images/img_guard_black_900.svg',
      image:"images/img_guard.svg",
      title:'Security Guards',
      desc:'Our counter-drone technology stands vigilant.'
    },
    {
      path:'/infrastructure',
      hover:'images/infra_black.svg',
      image:'images/infra_yellow.svg',
      title:'Security Infra',
      desc:'Our counter-drone technology stands vigilant.'
    },
    {
      path:'/risk-assessment',
      hover:'images/Risk_black.svg',
      image:'images/Risk_yellow.svg',
      title:'Risk Assessment',
      desc:'Our counter-drone technology stands vigilant.'
    },
    {
      path:'/investigation',
      hover:'images/img_guard_black_900.svg',
      image:'images/img_guard.svg',
      title:'Investigation',
      desc:'Our counter-drone technology stands vigilant.'
    },
    {
      path:'/security-audits',
      image:'images/Audits_yellow.svg',
      hover:'images/Audits_Black.svg',
      title:'Security Audits',
      desc:'Our counter-drone technology stands vigilant.'
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
          serviceCards.querySelectorAll(".Single_cont").forEach((card, index) => {
            card.style.transitionDelay = `${index }ms`;
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
  
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center mb-[-20px] justify-start mx-auto w-full">
        <div className="md:h-[848px] h-[875px] md:px-5 relative w-full ">
          <div className="absolute h-[848px] inset-[0] justify-center  w-full">
            <Img
              className="h-[848px] m-auto object-cover w-full"
              src="images/img_rectangle21985_848x1440.png"
              alt="rectangle21985"
            />
            <div className="absolute bottom-[30%] flex flex-col items-center justify-center w-full">
              <Text
                className="capitalize sm:text-3xl sm:font-normal sm:w-4/5 leading-[89.00px] md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px] w-[55%] "
                size="txtPoppinsBold60"
              >
                Our Services Make Your Business Secure
              </Text>
              <Text
                className="mt-[22px] text-[15px] text-center text-white-A700 tracking-[0.50px]"
                size="txtLatoRegular15"
              >
                Trust the experts with your safety
                
              </Text>
            
            </div>
          </div>
          <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className=" bg-gray-50 flex flex-col font-redhatdisplay items-center justify-end p-[52px] md:px-10 sm:px-5 w-full" ref={serviceCardsRef}>
          <div className="flex flex-col items-start justify-start max-w-[1239px] mt-[90px] mx-auto w-full"  >
            <div className="flex flex-col gap-[22px] items-start justify-start " >
              <Text
                className="text-gray-600 text-sm tracking-[2.00px] uppercase "
                size="txtRedHatDisplayRomanMedium14"
              >
                premium services
              </Text>
              <Text
                className="capitalize text-4xl sm:mb-2 font-[600] sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px]"
                size="txtPoppinsRegular36"
              >
                Security Services
              </Text>
            </div>
            
            <div className="ser_cont">
              {
                ser_data.map((data,index)=>(
                  <div key={index} className="Single_cont" onClick={()=>navigate(data.path)} onMouseEnter={(e) => handleMouseEnter(e, index, data.hover)} onMouseLeave={(e) => handleMouseLeave(e, index, data.image)}>
                    <img className="vector" src={data.image} alt="guard" />
                    <Text size="txtOpenSansRomanBold24" className=" mt-12 text-xl ml-6 md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]" >{data.title}</Text>
                    <p className="desc">{data.desc}</p>
                  </div>
                ))
              }
            </div>
           
           <Slider1/>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col font-redhatdisplay items-end justify-start mt-[57px] md:pl-10 sm:pl-5 pl-[100px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1339px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[76px] items-start justify-start ml-[-37px] md:ml-[0]">
              <div className="flex flex-col gap-[22px] items-start justify-start">
                <Text
                  className="text-gray-600 text-sm tracking-[2.00px] sm:pt-5 uppercase"
                  size="txtRedHatDisplayRomanMedium14"
                >
                  premium services
                </Text>
                <Text
                  className="capitalize text-4xl font-[600] sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px]"
                  size="txtPoppinsBold60"
                >
                  Property management services
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-opensans sm:gap-[55px] items-center justify-between w-full">
                <div className="bg-white-A700 transition bg-white duration-300 ease-in-out shadow-2xl cursor-pointer hover:bg-orange-400 flex sm:flex-1 flex-col items-start justify-end p-6 sm:px-5 rounded-xl w-[46%] sm:w-[80%]" onClick={()=>navigate('/housekeeping')}>
                  <Img
                    className="h-[60px] mt-[34px] w-[60px]"
                    src="images/img_cleaningcart.svg"
                    alt="cleaningcart"
                  />
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[52px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Housekeeping
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[26px]  md:ml-[0] ml-[3px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-[98%] sm:w-full font-bold"
                    size="txtLatoRegular15Gray700"
                  >
                    <>Beyond Clean: It&#39;s Housekeeping Brilliance.</>
                  </Text>
                </div>
                <div className="bg-white-A700 transition bg-white duration-300 ease-in-out cursor-pointer   shadow-2xl hover:bg-orange-400 border border-gray-500_1e border-solid flex sm:flex-1 flex-col items-start justify-end p-[27px] sm:px-5 rounded-xl w-[46%] sm:w-[80%]" onClick={()=>navigate('/nri-properties')}>
                  <Img
                    className="h-[50px] mt-[43px] w-[50px]"
                    src="images/img_propertyagent.svg"
                    alt="propertyagent"
                  />
                  <Text
                    className="mt-[50px] text-2xl md:text-[22px]  text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    NRI Property
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] font-bold text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtLatoRegular15Gray700"
                  >
                    NRI Property Solutions at Your Service.
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-[676px] md:h-auto object-cover sm:w-[90%] sm:-ml-2"
              src="images/img_rectangle22115.png"
              alt="rectangle22115"
            />
          </div>
        </div>
        
        <Banner/>
        <Footer className="flex items-center justify-center mt-10 md:px-5 w-full  bg-gray-900_01" />
      </div>
    </>
  );
};

export default ServicesOnePage;
