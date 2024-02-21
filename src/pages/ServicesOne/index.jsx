import React from "react";
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

const ServicesOnePage = () => {
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
      image:'images/drones_yellow.svg',
      hover:'images/drone.svg',
      title:'Drones',
      desc:'Our counter-drone  technology stands vigilant.'
    },
    {
      path:'/training',
      image:'images/sec_training_yellow.svg',
      hover:'images/sec_training.svg',
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
                className="capitalize sm:text-3xl sm:font-normal sm:w-4/5 leading-[89.00px] md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px] w-[55%] sm:w-full"
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
              {/* <div className="flex flex-row items-start justify-between mt-[105px] w-[39%] md:w-full">
                <Img
                  className="h-[30px]"
                  src="images/img_drone.svg"
                  alt="drone"
                />
                <Img
                  className="h-[29px]"
                  src="images/img_television.svg"
                  alt="television"
                />
              </div> */}
            </div>
          </div>
          <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className=" bg-gray-50 flex flex-col font-redhatdisplay items-center justify-end p-[52px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start max-w-[1239px] mt-[90px] mx-auto w-full">
            <div className="flex flex-col gap-[22px] items-start justify-start">
              <Text
                className="text-gray-600 text-sm tracking-[2.00px] uppercase"
                size="txtRedHatDisplayRomanMedium14"
              >
                premium services
              </Text>
              <Text
                className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px]"
                size="txtRedHatDisplayRomanBold36"
              >
                Security Services
              </Text>
            </div>
            {/* <div className="flex md:flex-col flex-row font-opensans md:gap-[54px] items-center justify-between mt-[75px] w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[55px] grid sm:grid-cols-1 grid-cols-2 w-[48%] md:w-full"
                orientation="horizontal"
              >
                <div onClick={()=>navigate('/servicesone')} className="cursor-pointer hover:bg-orange-400 bg-white-A700 flex flex-col gap-[5px] items-start justify-center sm:ml-[0] p-[27px] sm:px-5 rounded-sm w-full">
                <Img
                  className="h-[51px] mt-[35px]"
                  src="images/img_guard_black_900.svg"
                  alt="guard"
                />
                  <Text
                  className="mt-[57px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
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
                <div onClick={()=>navigate('/training')} className="cursor-pointer hover:bg-orange-400 bg-white-A700 flex flex-col gap-[5px] items-start justify-center sm:ml-[0] p-[27px] sm:px-5 rounded-sm w-full">
                <Img
                  className="h-[51px] mt-[35px]"
                  src="images/img_guard_black_900.svg"
                  alt="guard"
                />
                  <Text
                  className="mt-[57px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
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
              </List>
              <div  onClick={()=>navigate('/guards')} className="bg-white-A700 cursor-pointer hover:bg-orange-400 border border-gray-500_1e border-solid flex md:flex-1 flex-col items-start justify-end p-[27px] sm:px-5 rounded-sm w-[22%] md:w-full">
                <Img
                  className="h-[51px] mt-[35px]"
                  src="images/img_guard_black_900.svg"
                  alt="guard"
                />
                <Text
                  className="mt-[57px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
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
              <div onClick={()=>navigate('/infrastructure')} className="bg-white-A700 cursor-pointer hover:bg-orange-400 border border-gray-500_1e border-solid flex md:flex-1 flex-col gap-14 justify-end p-[27px] sm:px-5 rounded-sm w-[22%] md:w-full">
                <Img
                  className="h-14 ml-1.5 md:ml-[0] mr-[153px] mt-[31px] w-14"
                  src="images/img_guard_black_900.svg"
                  alt="thumbsup"
                />
                <div className="flex flex-col items-start justify-start mb-[23px]">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    Security Infra.
                  </Text>
                  <Text
                    className="leading-[24.00px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    <>Guarding Tomorrow&#39;s Security Today.</>
                  </Text>
                </div>
              </div>
            </div> */}
            <div className="ser_cont">
              {
                ser_data.map((data,index)=>(
                  <div key={index} className="Single_cont" onClick={()=>navigate(data.path)} onMouseEnter={(e) => handleMouseEnter(e, index, data.hover)} onMouseLeave={(e) => handleMouseLeave(e, index, data.image)}>
                    <img className="vector" src={data.image} alt="guard" />
                    <Text  className="title leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full" size="txtOpenSansRomanSemiBold14">{data.title}</Text>
                    <p className="desc">{data.desc}</p>
                  </div>
                ))
              }
            </div>
           
            {/* <Img
              className="h-2.5 md:ml-[0] ml-[604px] mt-20"
              src="images/img_contrast.svg"
              alt="contrast"
            /> */}
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col font-redhatdisplay items-end justify-start mt-[57px] md:pl-10 sm:pl-5 pl-[100px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1339px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[76px] items-start justify-start ml-[-37px] md:ml-[0]">
              <div className="flex flex-col gap-[22px] items-start justify-start">
                <Text
                  className="text-gray-600 text-sm tracking-[2.00px] uppercase"
                  size="txtRedHatDisplayRomanMedium14"
                >
                  premium services
                </Text>
                <Text
                  className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px]"
                  size="txtRedHatDisplayRomanBold36"
                >
                  Property management services
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-opensans sm:gap-[55px] items-center justify-between w-full">
                <div className="bg-white-A700 cursor-pointer hover:bg-orange-400 flex sm:flex-1 flex-col items-start justify-end p-6 sm:px-5 rounded-sm w-[46%] sm:w-full">
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
                    className="leading-[24.00px] mb-[26px] md:ml-[0] ml-[3px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-[98%] sm:w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    <>Beyond Clean: It&#39;s Housekeeping Brilliance.</>
                  </Text>
                </div>
                <div className="bg-white-A700 cursor-pointer hover:bg-orange-400 border border-gray-500_1e border-solid flex sm:flex-1 flex-col items-start justify-end p-[27px] sm:px-5 rounded-sm w-[46%] sm:w-full">
                  <Img
                    className="h-[50px] mt-[43px] w-[50px]"
                    src="images/img_propertyagent.svg"
                    alt="propertyagent"
                  />
                  <Text
                    className="mt-[50px] text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                    size="txtOpenSansRomanBold24"
                  >
                    NRI Property
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                    size="txtOpenSansRomanSemiBold14"
                  >
                    NRI Property Solutions at Your Service.
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-[676px] md:h-auto object-cover"
              src="images/img_rectangle22115.png"
              alt="rectangle22115"
            />
          </div>
        </div>
        {/* <div className="font-poppins h-[748px] md:h-[857px] mt-[109px] md:px-5 relative w-full">
          <Img
            className="h-[748px] m-auto object-cover w-full"
            src="images/img_rectangle22077.png"
            alt="rectangle22077"
          />
          <div className="absolute bg-white-A700 flex flex-col gap-[52px] h-max inset-y-[0] items-start justify-center my-auto p-[60px] md:px-10 sm:px-5 right-[7%] rounded w-[43%]">
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
                  <input
  type="text"
  className="border-b border-gray-600 border-solid py-2 text-base  tracking-[1.20px] outline-none "
  placeholder="Full name"
/>


                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <input
  type="text"
  className="border-b border-gray-600 border-solid py-2 text-base  tracking-[1.20px] outline-none "
  placeholder="Company name"
/>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <input
  type="email"
  className="border-b border-gray-600 border-solid py-2 text-base  tracking-[1.20px] outline-none "
  placeholder="Email Id"
/>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <input
  type="tel"
  className="border-b border-gray-600 border-solid py-2 text-base  tracking-[1.20px] outline-none "
  placeholder="Phone Number"
/>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-3 items-center justify-start mb-[3px] w-[32%] md:w-full">
              <Button className="border hover:bg-transparent  border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-base text-center tracking-[0.16px]">
                get in touch
              </Button>
            </div>
          </div>
        </div> */}
        <Banner/>
        <Footer className="flex items-center justify-center mt-10 md:px-5 w-full" />
      </div>
    </>
  );
};

export default ServicesOnePage;
