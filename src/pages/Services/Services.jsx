import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Banner, Button, Img, QuickLinks, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ServicesPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phoneNumber: "",
    
  });

  const handleChange = (selectedValue, { name }) => {
    console.log("Selected Value:", selectedValue); // Log the selected value
    console.log("Name:", name); // Log the name of the field
    setFormData(prevState => ({
      ...prevState,
      [name]: selectedValue
    }));
  };
  
  
  
  

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData)
    // Sending email using emailjs library
    emailjs.send('service_syu7i3h', 'template_gurv3bi', {
      user_name: formData.name,
      user_email: formData.email,
      company_name: formData.company,
      phone_number: formData.phoneNumber,
      
      
    }, "PAMSeoabaa0l3PiqP")
      .then((result) => {
        console.log(result.text);
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          company: "",
          phoneNumber: "",
        });
        alert("Email sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Error sending email. Please try again later.");
      });
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col mb-[-20px] font-poppins items-center justify-start mx-auto w-full">
        <div className="md:h-[848px] h-[875px] md:px-5 relative w-full sm:bg-[#1A1313]">
          <div className="absolute h-[848px] inset-[0] justify-center  w-full">
            <Img
              className="h-[848px] m-auto object-cover w-full "
              src="images/img_rectangle21985_1.webp"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[22px] h-max inset-[0] items-center justify-center m-auto">
              <Text
                className="capitalize sm:text-3xl sm:font-normal sm:w-4/5 leading-[89.00px] md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px] w-[70%]"
                size="txtPoppinsBold60"
              >
                Security service for your personal safety
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
        <Img
                className="h-[488px] sm:h-[488px]   w-full  hidden sm:block"
                src="images/img_rectangle22116.webp"
                alt="rectangle22116"
              />
        <div className=" flex flex-col items-center justify-start p-[82px] pt-0 pb-0 md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start max-w-[1239px] mb-[52px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[13px] w-full md:w-full">
            <Img
                className="h-[488px] sm:h-auto object-cover w-full rounded-xl sm:hidden"
                src="images/img_rectangle22116.webp"
                alt="rectangle22116"
              />
              <Text
                className="mt-[45px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.25px]"
                size="txtOpenSansRomanBold32"
              >
                Drones{" "}
              </Text>
              <Text
                className="leading-[29.00px] mt-4 text-[18px] text-black-900_cc tracking-[0.50px] w-full"
                size="txtLatoRegular15Black900cc"
              >
                Drones, or Unmanned Aerial Vehicles (UAVs), have rapidly evolved
                from recreational gadgets to transformative tools across various
                industries. These unmanned aircraft are equipped with cameras,
                sensors, and other technologies, offering unprecedented
                capabilities in areas such as surveillance, mapping,
                agriculture, and emergency response.
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
                Applications of Drones:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[15px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900 font-lato text-left text-xl font-bold"> Surveillance and Security:</span>
                  <br />
                 <span className="text-[18px]"> Drones provide a bird&#39;s-eye view, enhancing surveillance
                  capabilities for law enforcement, border control, and private
                  security firms.
                  <br /></span>
                  
                <span className="text-[18px]">  Monitoring large events, critical infrastructure, and
                  expansive areas becomes more efficient and cost-effective.</span>
                </>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900 font-lato text-left text-xl font-bold">
                  <>
                    Mapping and Surveying:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                    Drones equipped with advanced mapping technologies
                    contribute to accurate and rapid surveying of terrains,
                    construction sites, and geographical features.
                    <br />
                    This aids in disaster response, and infrastructure
                    development.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Challenges and Concerns:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Despite their numerous advantages, the proliferation of drones has raised concerns related to privacy, airspace safety, and potential misuse. Unauthorized drone flights near sensitive areas or crowded spaces pose risks, and the need for regulatory frameworks to address these challenges becomes increasingly apparent.
                  </>
                </span>
              </Text>
              {/* Counter Drones */}
              <Text
                className="mt-[45px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.25px]"
                size="txtOpenSansRomanBold32"
              >
               Counter Drones: Safeguarding Against Emerging Threats
              </Text>
              <Text
                className="leading-[29.00px] mt-4 text-[18px] text-black-900_cc tracking-[0.50px] w-full"
                size="txtLatoRegular15Black900cc"
              >
               As drone technology advances, so does the need for effective counter-drone measures to mitigate potential risks. Counter-drone solutions are designed to detect, identify, and neutralize unauthorized or malicious drone activities. These technologies play a crucial role in protecting critical infrastructure, public events, and sensitive locations.
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
               Counter-Drone Technologies:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[15px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900 font-lato text-left text-xl font-bold"> 	Radio-Frequency Jammers:</span>
                  <br />
                 <span className="text-[18px]">  	Disrupt communication between the drone and its operator by jamming radio frequencies.
                  <br /></span>
                  
               
                </>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900 font-lato text-left text-xl font-bold">
                  <>
                  Drone Detection Systems:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Employ radar, acoustic sensors, and optical technologies to detect and track drones in the vicinity.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  GPS Spoofing and Jamming:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Interfere with the drone's GPS signals, causing it to lose its way or return to its point of origin.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Directed Energy Weapons:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	High-powered lasers or microwave systems designed to disable drones by damaging their electronic components.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Drone-capture Nets:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Physically capture rogue drones using nets launched from the ground or other drones.
                  </>
                </span>
              </Text>
              
            </div>
           
          </div>
          {/* <div className="flex md:flex-1 flex-col items-center justify-start w-[30%] md:w-full">
              <div className="bg-white-A700 flex flex-col  items-center justify-start p-[49px] md:px-10 sm:px-5 rounded w-full">
                <form onSubmit={sendEmail} className=" flex  flex-col items-start justify-start mb-2 w-[89%] md:w-full">
                  <div className="flex flex-col items-start  justify-start w-full">
                    <Text
                      className="text-2xl sm:ml-16 md:text-[22px] text-gray-900_e5 sm:text-xl tracking-[0.24px]"
                      size="txtPoppinsSemiBold24"
                    >
                      Get in Touch!
                    </Text>
                    <div className=" flex-col  font-lato items-center justify-start mt-7 w-full">
                    <input required onChange={e => handleChange(e.target.value, { name: "name" })} value={formData.name} name="name"
 
  className="w-[70%] border-b border-gray-600 sm:ml-10  pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px] placeholder-gray-600_a0"
  placeholder="Full name *"
/>


                    
                      
                    </div>
                    <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-full">
                    <input required onChange={e => handleChange(e.target.value, { name: "email" })} value={formData.email}
                        className="ml-[-65px] sm:ml-1 w-[70%] border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        placeholder="Email Id *"
                      />
                    </div>
                    <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-full">
                    <input required name="company" onChange={e => handleChange(e.target.value, { name: "company" })} value={formData.company}
                        className="ml-[-65px] sm:ml-1 w-[70%] border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        placeholder="Company Name *"
                      />
                    </div>
                    <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-full">
                    <input required name="phoneNumber" onChange={e => handleChange(e.target.value, { name: "phoneNumber" })} value={formData.phoneNumber}
                        className="w-[70%] sm:ml-1 ml-[-65px] border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px]"
                        placeholder="Phone Number *"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[50px] w-[66%] md:w-full">
                    <button type="submit" className="border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-base text-center tracking-[0.16px]">
                      get in touch
                    </button>
                  </div>
                  <Text
                    className="mt-[87px] sm:mx-auto text-2xl md:text-[22px] text-gray-900_e5 sm:text-xl tracking-[0.24px]"
                    size="txtPoppinsSemiBold24"
                  >
                    Contact Info
                  </Text>
                  <div className="flex flex-row font-opensans gap-[13px] items-start justify-start mt-[38px] w-[91%] md:w-full">
                    <Img
                      className="h-[30px] mt-[3px] w-[30px]"
                      src="images/img_location.svg"
                      alt="location"
                    />
                    <Text
                      className="leading-[24.00px] text-base text-black-900_b2 tracking-[0.25px] w-4/5 sm:w-full"
                      size="txtOpenSansRomanRegular16"
                    >
                      High-quality coal that comes from.
                    </Text>
                  </div>
                  <div className="flex flex-row font-opensans gap-3 items-center justify-start mt-[30px] w-[67%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_phone.svg"
                      alt="phone"
                    />
                    <Text
                      className="text-base text-black-900_b2 tracking-[0.25px]"
                      size="txtOpenSansRomanRegular16"
                    >
                      +84445 67892
                    </Text>
                  </div>
                  <div className="flex flex-row font-opensans gap-[17px] items-start justify-start ml-1.5 md:ml-[0] mt-[33px] w-[87%] md:w-full">
                    <Img
                      className="h-[17px]"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                    <Text
                      className="text-base text-black-900_b2 tracking-[0.25px]"
                      size="txtOpenSansRomanRegular16"
                    >
                      @flankersecurity.com
                    </Text>
                  </div>
                </form>
              </div>
             
            </div> */}
            <QuickLinks/>
        </div>
        <Banner/>
        <Footer className="flex items-center justify-center mt-[29px] sm:-mt-[9rem] md:px-5 w-full bg-gray-900_01" />
      </div>
    </>
  );
};

export default ServicesPage;
