import React from "react";

import { Banner, Button, CheckBox, Img, Text,  } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { FaCheck } from "react-icons/fa6";
import Slider from "./Slider";
import sec_guard5 from "../../assets/Event_Sec/sec_6.png"
import sec_6 from "../../assets/Event_Sec/sec_guard5.png"
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
    content:(
      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1164px] mt-[95px] mx-auto md:px-5 w-full">
            <Img
              className="h-[640px] md:h-auto object-cover rounded-xl"
              src={sec_6}
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
                  className="leading-[29.00px] text-[15px] text-black-900_cc tracking-[0.50px] w-full"
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
    )
  }
]
const slidesData = [
  {
    id: 1,
    content: (
      <div className="slide-content">
        <div 
            className="bg-cover  bg-no-repeat font-redhatdisplay h-[514px] mt-28 md:px-5 py-[5px] relative w-full"
            style={{ backgroundImage: "url('images/img_group50507.png')" }}
          >
            <div className="flex flex-col items-center justify-start mb-[-15px] mt-[97px] mx-auto w-[59%] z-[1]">
              <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                <Text
                  className="text-black-900_e5 text-center text-sm tracking-[2.00px] uppercase"
                  size="txtRedHatDisplayRomanMedium14Black900e5"
                >
                  vision
                </Text>
                <Text
                  className="leading-[50.00px] md:text-3xl sm:text-[17px] sm:leading-[35.00px] text-[32px] text-center text-gray-900 tracking-[1.00px] w-full "
                  size="txtRedHatDisplayRomanRegular32"
                >
                  <span className="text-gray-900 font-redhatdisplay font-normal">
                    To usher in a paradigm shift in{" "}
                  </span>
                  <span className="text-gray-900 font-redhatdisplay font-bold">
                    security services
                  </span>
                  <span className="text-gray-900 font-redhatdisplay font-normal">
                    {" "}
                    &{" "}
                  </span>
                  <span className="text-gray-900 font-redhatdisplay font-bold">
                    Property Management{" "}
                  </span>
                  <span className="text-gray-900 font-redhatdisplay font-normal">
                    through innovation & Automation
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-evenly mt-auto mx-auto w-full">
              <Img
                className="sm:flex-1 h-[233px] md:h-auto object-cover w-[34%] sm:w-full"
                src="images/img_pngwing1.png"
                alt="pngwingOne"
              />
              <Img
                className="sm:flex-1 h-[193px] md:h-auto sm:mt-0 mt-10 object-cover w-[34%] sm:w-full"
                src="images/img_pngwing2.png"
                alt="pngwingTwo"
              />
              <Img
                className="sm:flex-1 h-[193px] md:h-auto sm:mt-0 mt-10 object-cover w-[33%] sm:w-full"
                src="images/img_pngwing3.png"
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
      <div className="slide-content">
        <div 
            className="bg-cover  bg-no-repeat font-redhatdisplay h-[514px] mt-28 md:px-5 py-[5px] relative w-full"
            style={{ backgroundImage: "url('images/img_group50507.png')" }}
          >
            <div className="flex flex-col items-center justify-start mb-[-15px] mt-[97px] mx-auto w-[59%] z-[1]">
              <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                <Text
                  className="text-black-900_e5 text-center  text-sm tracking-[2.00px] uppercase"
                  size="txtRedHatDisplayRomanMedium14Black900e5"
                >
                  Mission
                </Text>
                <Text
                  className="leading-[50.00px] md:text-3xl sm:text-[17px] sm:leading-[35.00px] text-[32px] text-center text-gray-900 tracking-[1.00px] w-full "
                  size="txtRedHatDisplayRomanRegular32"
                >
                  <span className="text-gray-900 font-redhatdisplay font-normal">
                    To usher in a paradigm shift in{" "}
                  </span>
                  <span className="text-gray-900 font-redhatdisplay font-bold">
                    security services
                  </span>
                  <span className="text-gray-900 font-redhatdisplay font-normal">
                    {" "}
                    &{" "}
                  </span>
                  <span className="text-gray-900 font-redhatdisplay font-bold">
                    Property Management{" "}
                  </span>
                  <span className="text-gray-900 font-redhatdisplay font-normal">
                    through innovation & Automation
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-evenly mt-auto mx-auto w-full">
              <Img
                className="sm:flex-1 h-[233px] md:h-auto object-cover w-[34%] sm:w-full"
                src="images/img_pngwing1.png"
                alt="pngwingOne"
              />
              <Img
                className="sm:flex-1 h-[193px] md:h-auto sm:mt-0 mt-10 object-cover w-[34%] sm:w-full"
                src="images/img_pngwing2.png"
                alt="pngwingTwo"
              />
              <Img
                className="sm:flex-1 h-[193px] md:h-auto sm:mt-0 mt-10 object-cover w-[33%] sm:w-full"
                src="images/img_pngwing3.png"
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
          <div className="font-poppins md:h-[848px] h-[875px] md:px-5 relative w-full">
            <div className="absolute h-[848px] inset-[0] justify-center  w-full">
              <Img
                className="h-[848px] m-auto object-cover w-full"
                src="images/img_rectangle21985.png"
                alt="rectangle21985"
              />
              <div className="absolute bottom-[31%] flex flex-col gap-[22px] inset-x-[0] items-center justify-start mx-auto">
                <Text
                  className="capitalize leading-[89.00px] md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px] w-[70%] sm:text-3xl sm:font-normal sm:w-4/5"
                  size="txtPoppinsBold60"
                >
                  Your Partner in Uncompromised Security
                </Text>
                <Text
                  className="text-[15px] text-center text-white-A700 tracking-[0.50px]"
                  size="txtLatoRegular15"
                >
                  Trust the experts with your safety
                </Text>
              </div>
            </div>
            <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
          </div>
          <Slider slidesData={SlidesData2}/>
          
          <Slider slidesData={slidesData}/>
          
          <Text
            className="mt-[151px] text-gray-600 text-sm tracking-[2.00px] uppercase"
            size="txtRedHatDisplayRomanMedium14"
          >
            why choose us
          </Text>
          <Text
            className="capitalize leading-[49.00px] mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[1.00px] w-[57%] sm:w-full"
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
          <div className="font-lato md:h-[503px] h-[553px] max-w-[1240px] mt-[62px] mx-auto md:px-5 relative w-full">
            <Img
              className="absolute h-[441px] left-[0] object-cover top-[0] w-[62%] sm:w-full rounded-xl"
              src="images/img_rectangle22083.png"
              alt="rectangle22083"
            />
            <div
              className="sm:hidden rounded-xl absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-inter h-[248px] items-center justify-start p-[54px] md:px-10 sm:px-5 right-[0] w-[53%]"
              style={{ backgroundImage: "url('images/img_group50520.svg')" }}
            >
              <div className="flex  flex-col gap-[34px] items-start justify-start w-[94%] md:w-full">
                <div className=" flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
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
                      Perfection Anytime
                    </span>
                  </span>
                  <span className="flex gap-3 ml-6">
                    <FaCheck className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />{" "}
                    <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">
                      Perfection Anytime
                    </span>
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between w-[94%] md:w-full">
                  <span className="flex gap-3">
                    <FaCheck className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />{" "}
                    <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">
                      Perfection Anytime
                    </span>
                  </span>
                  <span className="flex gap-3">
                    <FaCheck className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]" />{" "}
                    <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">
                      Perfection Anytime
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <Text
              className="absolute leading-[29.00px] right-[4%] text-[15px] text-gray-700 top-[16%] tracking-[0.50px] w-[31%] sm:w-full sm:hidden"
              size="txtLatoRegular15Gray700"
            >
              The Property Management Vertical encompasses the full spectrum of
              House Keeping Services, Landscaping, Maintenance Support Team and
              Support Staff with highly professional teams led by Facility
              Mangers.
            </Text>
          </div>
          <Banner />
          <Footer className="flex items-center justify-center mt-10 md:px-5 w-full bg-gray-900_01" />
        </div>
      </div>
    </>
  );
};

export default AboutusPage;

