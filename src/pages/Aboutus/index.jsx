import React from "react";

import { Banner, Button, CheckBox, Img, Text,  } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { FaCheck } from "react-icons/fa6";
import Slider from "./Slider";
import sec_guard5 from "../../assets/Event_Sec/sec_6.webp"
import sec_6 from "../../assets/Event_Sec/sec_guard5.webp"
const SlidesData2 = [
  {
    id:1,
     content:(
      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1163px] mt-[95px] mx-auto md:px-5 w-full">
            <Img
              className="h-[640px] md:h-auto mb-3 object-cover rounded-xl"
              src={sec_guard5}
              alt="rectangle22076"
            />
            <div className="flex flex-col md:gap-10 gap-[166px] justify-start md:mt-0 mt-[125px]">
              <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[125px]">
                <Text
                  className="text-gray-600 text-sm tracking-[2.00px] uppercase"
                  size="txtRedHatDisplayRomanMedium14"
                >
                  About us
                </Text>
                <Text
                  className="capitalize leading-[49.00px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px] w-full"
                  size="txtPoppinsSemiBold36"
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
                  className="leading-[29.00px] text-[15px] text-black-900_cc tracking-[0.50px] w-full"
                  size="txtLatoRegular15Black900cc"
                >
                  Our Property Managers will act as a local guardian for the
                  properties of non-resident property owners including NRIs; by
                  taking care of “change of tenants” including repairs and
                  maintenance work during the tenant transition, kept an
                  overview on plots and open lands by regular site visits and
                  adopt measures for the safety and security of unattended
                  properties.
                </Text>
              </div>
              
            </div>
          </div>
     )
  },
  {
    id:2,
    
  }
]
const slidesData = [
  {
    id: 1,
    content: (
<div className="slide-content sm:-mt-8">
        <div 
            className="bg-cover bg-orange-300 bg-no-repeat font-redhatdisplay h-[514px] mt-28 md:px-5 py-[5px] relative w-full"
           
          >
            <div className="flex flex-col items-center justify-start mb-[-15px] mt-[97px] mx-auto w-[59%] z-[1] sm:w-full">
              <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                <Text
                  className="text-black-900_e5 text-center  text-[15px] tracking-[2.00px] uppercase"
                  size="txtRedHatDisplayRomanMedium14Black900e5"
                >
                  Vision
                </Text>
                <Text
                  className="leading-[50.00px] md:text-3xl sm:text-[17px] sm:leading-[35.00px] text-[32px] text-center text-gray-900 tracking-[1.00px] w-full "
                  size="txtRedHatDisplayRomanRegular32"
                >
                  <span className="text-gray-900 font-poppins font-normal">
                  To provide future ready {" "}
                  </span>
                  <span className="text-gray-900 font-poppins font-[600]">
                  AI Powered Security
                  </span>
                  <span className="text-gray-900 font-poppins font-normal">
                    {" "}
                    &{" "}
                  </span>
                  <span className="text-gray-900 font-poppins font-[600]">
                   Property Management for{" "}
                  </span>
                  <span className="text-gray-900 font-poppins font-normal">
                  Enterprise & Institutions
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-evenly mt-auto mx-auto w-full">
              <Img
                className="sm:flex-1 h-[233px] md:h-auto object-cover w-[34%] sm:w-full sm:mt-24"
                src="images/img_pngwing1.webp"
                alt="pngwingOne"
              />
              <Img
                className="sm:flex-1 h-[193px] md:h-auto sm:mt-0 mt-10 object-cover w-[34%] sm:w-full"
                src="images/img_pngwing2.webp"
                alt="pngwingTwo"
              />
              <Img
                className="sm:flex-1 h-[193px] md:h-auto sm:mt-0 mt-10 object-cover w-[33%] sm:w-full"
                src="images/img_pngwing3.webp"
                alt="pngwingThree"
              />
            </div>
          </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="slide-content sm:-mt-8">
        <div 
            className="bg-cover bg-orange-300 bg-no-repeat font-redhatdisplay h-[514px] mt-28 md:px-5 py-[5px] relative w-full"
           
          >
            <div className="flex flex-col items-center justify-start mb-[-15px] mt-[97px] mx-auto w-[59%] z-[1] sm:w-full">
              <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                <Text
                  className="text-black-900_e5 text-center  text-[15px] tracking-[2.00px] uppercase"
                  size="txtRedHatDisplayRomanMedium14Black900e5"
                >
                  Mission
                </Text>
                <Text
                  className="leading-[50.00px] md:text-3xl sm:text-[17px] sm:leading-[35.00px] text-[32px] text-center text-gray-900 tracking-[1.00px] w-full "
                  size="txtRedHatDisplayRomanRegular32"
                >
                  <span className="text-gray-900 font-poppins font-normal">
                    To usher in a paradigm shift in{" "}
                  </span>
                  <span className="text-gray-900 font-poppins font-[600]">
                    Security Services
                  </span>
                  <span className="text-gray-900 font-poppins font-normal">
                    {" "}
                    &{" "}
                  </span>
                  <span className="text-gray-900 font-poppins font-[600]">
                    Property Management{" "}
                  </span>
                  <span className="text-gray-900 font-poppins font-normal">
                    through Innovation & Automation
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-evenly mt-auto mx-auto w-full">
              <Img
                className="sm:flex-1 h-[233px] md:h-auto object-cover w-[34%] sm:w-full sm:mt-24"
                src="images/img_pngwing1.webp"
                alt="pngwingOne"
              />
              <Img
                className="sm:flex-1 h-[193px] md:h-auto sm:mt-0 mt-10 object-cover w-[34%] sm:w-full"
                src="images/img_pngwing2.webp"
                alt="pngwingTwo"
              />
              <Img
                className="sm:flex-1 h-[193px] md:h-auto sm:mt-0 mt-10 object-cover w-[33%] sm:w-full"
                src="images/img_pngwing3.webp"
                alt="pngwingThree"
              />
            </div>
          </div>
      </div>
    ),
  },
];
const AboutusPage = () => {
  
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full mb-[-20px]">
          <div className="font-poppins md:h-[848px] h-[675px] relative w-full ">
            <div className="absolute h-[648px]  inset-[0] justify-center   w-full">
              <Img
                className="h-[648px] filter  m-auto object-cover w-full sm:h-[487px]"
                src="images/img_rectangle21985.webp"
                // src="images/about_us_banner.jpeg"
                alt="rectangle21985"
              />
              <div className="absolute bottom-[41%] flex flex-col gap-[22px] inset-x-[0] items-center justify-start mx-auto sm:bottom-[45%]">
                <Text
                  className="capitalize leading-[89.00px] sm:leading-[44.00px] text-6xl sm:text-left text-center text-white-A700 tracking-[0.25px] w-[100%] sm:w-[90%] sm:text-[31px]  sm:font-normal "
                  size="txtPoppinsBold60"
                >
                  Your Partner in Absolute Security
                </Text>
                <div className="sm:w-[90%]">

                <Text
                  className="text-[18px] -mt-5 sm:mt-0 text-center sm:text-left text-white-A700_bc tracking-[0.50px] "
                  size="txtLatoRegular15"
                  >
                  Trust the experts with your safety
                </Text>
                  </div>
              </div>
            </div>
            <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
            
          </div>
          
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1164px] mt-[4rem] mx-auto md:px-5 w-full sm:mt-[-20rem]">
            <Img
              className="h-[640px] sm:hidden w-[40%] md:h-auto object-cover sm:h-auto "
              src='images/original_sec.jpg'
              alt="rectangle22076"
            />
            <div className="flex flex-col md:gap-10 gap-[166px] justify-start md:mt-0 mt-[50px]">
              <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[105px]">
                <Text
                  className="text-gray-600 text-sm tracking-[2.00px] uppercase sm:text-[14px]"
                  size="txtRedHatDisplayRomanMedium14"
                >
                  About us
                </Text>
                <Text
                  className="capitalize leading-[49.00px] sm:leading-6 text-4xl sm:text-[20px] md:text-[34px] text-gray-900 tracking-[1.00px] w-full"
                  size="txtPoppinsSemiBold36"
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
                  className="leading-[32.00px] text-[18px] text-black-900_cc tracking-[0.50px] w-full"
                  size="txtLatoRegular15Black900cc"
                >
                  Flanker Security and Property Management Services is led by an Indian Air Force Veteran with a distinguished service of over 02 decades in the varied domains of Security, Vigilance, Provost, Ground Defence, Air Defence, Facilities Management and the fast-paced Air Operations.
                  <br />
                  <br />
                  Flanker was established with a visionary approach of making Security Services Sector highly professional, tech oriented, and backed by Artificial Intelligence to provide unmatched security, safety and protection to individuals and enterprises.
                </Text>
              </div>
              
            </div>
          </div>
          <Img
              className=" md:h-auto  object-cover sm:mt-8 sm:px-5 hidden sm:block sm:w-[380px]"
              src='images/original_sec.jpg'
              alt="rectangle22076"
            />
          <Slider slidesData={slidesData} time={5000}/>
          <div className="w-[90%] sm:block hidden  h-auto">
          <Text
            className="mt-[151px] sm:mt-12 sm:text-[14px]  text-gray-600 sm:text-left text-sm tracking-[2.00px] uppercase  sm:ml-0"
            size="txtRedHatDisplayRomanMedium14"
          >
            why choose us
          </Text>
          </div>
          <Text
            className="mt-[81px] sm:hidden  text-gray-600 sm:text-left text-sm tracking-[2.00px] uppercase  sm:ml-0"
            size="txtRedHatDisplayRomanMedium14"
          >
            why choose us
          </Text>
          <Text
            className="capitalize leading-[49.00px] sm:leading-[29px] sm:text-[20px]  mt-[19px] text-4xl  md:text-[34px] text-gray-900 tracking-[1.00px] w-[67%]  sm:w-[90%]"
            size="txtPoppinsSemiBold36"
          >
            <span className="text-gray-900 font-poppins text-left font-normal">
            Offering services globally{" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-[600]">
            to diverse industries and{" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-[600]">
            multiple clients.
            </span>
          </Text>
          <Text
                  className="leading-[29.00px] sm:w-[90%] sm:mt-6 hidden sm:block text-[18px] text-black-900_cc tracking-[0.50px] w-full"
                  size="txtLatoRegular15Black900cc"
                >
                 The Property Management Vertical encompasses the full spectrum of House Keeping Services, Landscaping, Maintenance Support Team and Support Staff with highly professional teams led by Facility Managers.
                </Text>
                 {/* mobile view box starts */}
                 <div className="w-full  bg-orange-300 p-4 mt-14 pb-8 sm:block hidden">
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
   {/* mobile view box ends */}
          <div className="font-lato md:h-[503px] h-[553px] max-w-[1240px] -mb-12 sm:-mb-20 mt-[62px] sm:mt-0 mx-auto md:px-5 relative w-full ">
            <Img
              className="absolute h-[441px] left-[0] object-cover top-[0] w-[62%] sm:w-[100%]  rounded-xl sm:rounded-none"
              src="images/cctv_about.jpg"
              alt="rectangle22083"
            />
            <div
              className="sm:hidden   rounded-lg absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-inter h-[248px] items-center justify-start  p-[54px] md:px-10 sm:px-5 right-[0] w-[53%] bg-[#fcbe54]"
             
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
            <Text
              className="absolute leading-[29.00px] right-[4%] text-[17px] text-gray-700 top-[16%] tracking-[0.50px] w-[31%] sm:w-full sm:hidden"
              size="txtLatoRegular15Gray700"
            >
              The Property Management Vertical encompasses the full spectrum of
              House Keeping Services, Landscaping, Maintenance Support Team and
              Support Staff with highly professional teams led by Facility
              Mangers.
            </Text>
          </div>
          <Banner />
          <Footer className="flex items-center justify-center mt-[29px] sm:-mt-56 md:px-5 w-full bg-[#070710]" />
        </div>
      </div>
    </>
  );
};

export default AboutusPage;

