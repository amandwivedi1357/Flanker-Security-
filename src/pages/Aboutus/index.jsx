import React from "react";

import { Banner, Button, CheckBox, Img, Text,Slider } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { FaCheck } from "react-icons/fa6";

const AboutusPage = () => {
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
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
                  className="capitalize leading-[89.00px] md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px] w-[70%]"
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
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1163px] mt-[95px] mx-auto md:px-5 w-full">
            <Img
              className="h-[640px] md:h-auto mb-3 object-cover"
              src="images/img_rectangle22076.png"
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
              {/* <Img
                className="h-2.5"
                src="images/img_contrast.svg"
                alt="contrast"
              /> */}
            </div>
          </div>
          {/* <div
            className="bg-cover bg-no-repeat font-redhatdisplay h-[514px] mt-28 md:px-5 py-[5px] relative w-full"
            style={{ backgroundImage: "url('images/img_group50507.png')" }}
          >
            <div className="flex flex-col items-center justify-start mb-[-15px] mt-[97px] mx-auto w-[59%] z-[1]">
              <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                <Text
                  className="text-black-900_e5 text-center text-sm tracking-[2.00px] uppercase"
                  size="txtRedHatDisplayRomanMedium14Black900e5"
                >
                  mision
                </Text>
                <Text
                  className="leading-[50.00px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 tracking-[1.00px] w-full"
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
          </div> */}
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
            className="flex gap-[74px]  mt-[111px] mx-auto md:px-5 w-full"
            items={[...Array(1)].map(() => (
              <React.Fragment key={Math.random()}>
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
                  className="leading-[50.00px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 tracking-[1.00px] w-full"
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
          <Img
            className="h-2.5 mt-[23px]"
            src="images/img_contrast.svg"
            alt="contrast_One"
          />
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
              className="absolute h-[441px] left-[0] object-cover top-[0] w-[62%]"
              src="images/img_rectangle22083.png"
              alt="rectangle22083"
            />
             <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-inter h-[248px] items-center justify-start p-[54px] md:px-10 sm:px-5 right-[0] w-[53%]"
              style={{ backgroundImage: "url('images/img_group50520.svg')" }}
            >
              <div className="flex flex-col gap-[34px] items-start justify-start w-[94%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <span className="flex gap-3">
                  <FaCheck 
                    className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                  /> <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">Perfection Anytime</span>
                  </span>
                  
                  <span className="flex gap-3 mr-4">
                  <FaCheck 
                    className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                  /> <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">Trained Professionals</span>
                  </span>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[97px] items-center justify-start w-[96%] md:w-full">
                <span className="flex gap-3">
                  <FaCheck 
                    className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                  /> <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">Perfection Anytime</span>
                  </span>
                  <span className="flex gap-3 ml-6">
                  <FaCheck 
                    className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                  /> <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">Perfection Anytime</span>
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between w-[94%] md:w-full">
                <span className="flex gap-3">
                  <FaCheck 
                    className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                  /> <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">Perfection Anytime</span>
                  </span>
                  <span className="flex gap-3">
                  <FaCheck 
                    className=" mt-1 font-semibold text-base text-black-900 text-left tracking-[0.25px]"
                  /> <span className="font-semibold  text-base text-black-900 text-left tracking-[0.25px]">Perfection Anytime</span>
                  </span>
                </div>
              </div>
            </div>
            <Text
              className="absolute leading-[29.00px] right-[4%] text-[15px] text-gray-700 top-[16%] tracking-[0.50px] w-[31%] sm:w-full"
              size="txtLatoRegular15Gray700"
            >
              The Property Management Vertical encompasses the full spectrum of
              House Keeping Services, Landscaping, Maintenance Support Team and
              Support Staff with highly professional teams led by Facility
              Mangers.  
            </Text>
          </div>
          {/* <div className="font-poppins h-[748px] md:h-[971px] mt-[223px] md:px-5 relative w-full">
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
          <Banner/>
          <Footer className="flex items-center justify-center mt-10 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutusPage;
