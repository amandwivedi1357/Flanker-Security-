import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Banner, Button, Img, QuickLinks, Text, Toast } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import guards from "../../assets/Event_Sec/sec_guard3.jpg"

const Guard = () => {
  const [toast, setToast] = useState(null);
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
      
        setToast({ message: 'Thank You for contacting us.', type: 'success' });
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          company: "",
          phoneNumber: "",
        });
        
      }, (error) => {
        console.log(error.text);
        
        setToast({ message: 'Error sending email. Please try again.', type: 'error' });
      });
  };
  const handleCloseToast = () => {
    setToast(null);
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col mb-[-20px] font-poppins items-center justify-start mx-auto w-full">
        <div className="md:h-[848px] h-[675px] md:px-5 relative w-full ">
          <div className="absolute h-[648px] inset-[0] justify-center  w-full">
            <Img
              className="h-[648px] m-auto object-cover w-full"
              src="images/img_rectangle21985_1.webp"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[22px] h-max inset-[0] items-center justify-center m-auto">
              <Text
                className="sm:text-3xl sm:w-4/5 sm:font-normal capitalize leading-[89.00px] md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px] w-[70%]"
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
                className="sm:block hidden -mt-[12rem] h-[488px] sm:h-auto object-cover w-full"
                // src="images/sec_guard.jpg"
                src={guards}
                alt="rectangle22116"
              />
        <div className=" flex flex-col sm:pt-0 items-center justify-start p-[82px] pb-0 md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start max-w-[1239px] mb-[52px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[13px] w-full md:w-full">
              <Img
                className="sm:hidden h-[488px] sm:h-auto object-cover w-full"
                // src="images/sec_guard.jpg"
                src={guards}
                alt="rectangle22116"
              />
              <Text
                className="mt-[37px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.25px]"
                size="txtOpenSansRomanBold32"
              >
               Security Guard{" "}
              </Text>
              <Text
                className="leading-[29.00px] mt-4 text-[18px] text-black-900_cc tracking-[0.50px] w-full"
                size="txtLatoRegular15Black900cc"
              >
                Certainly, deploying security guards is a crucial aspect of maintaining a safe and secure environment. The effectiveness of security guard deployment relies on strategic planning, proper training, and adherence to established security protocols. Here's a breakdown of key considerations for security guards deployment:
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
                Breakdown of key considerations for security guards :
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> Risk Assessment:</span>
                  <br />
                  Begin by conducting a thorough risk assessment of the premises. Identify potential threats, vulnerabilities, and high-risk areas that require special attention.
                  
                
                </>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Shift Scheduling:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Establish a comprehensive shift schedule to ensure 24/7 coverage. Rotate shifts to prevent predictability and ensure that guards are alert and effective at all times.
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
              
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Training and Certification:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Ensure that security guards undergo proper training and certification programs. Training should cover emergency response procedures, conflict resolution, communication skills, and use of security equipment.
                  </>
                </span>
              </Text>
              
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Communication Systems:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Implement effective communication systems among security personnel. This may include radios, mobile phones, or other communication devices to facilitate quick response and coordination.
                  </>
                </span>
              </Text>
              
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Surveillance Technology:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Integrate surveillance technology such as CCTV cameras, access control systems, and alarms to augment the capabilities of security guards. This provides an extra layer of monitoring and deters potential threats.
                  </>
                </span>
              </Text>
              
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Emergency Protocols:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Establish clear and concise emergency protocols. Ensure that security guards are well-versed in these procedures, including evacuation plans, first aid, and coordination with emergency services.
                  </>
                </span>
              </Text>
              
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Documentation and Reporting:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Emphasise the importance of accurate documentation and reporting. Security guards should maintain detailed logs of their activities, incidents, and observations.
                  </>
                </span>
              </Text>
              
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Collaboration with Law Enforcement:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Foster collaboration with local law enforcement agencies. Establish communication channels and protocols for reporting incidents that may require their involvement.
                  </>
                </span>
              </Text>
              
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Regular Training Updates:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Conduct regular training updates to keep security guards informed about the latest security threats, technologies, and best practices.
                  </>
                </span>
              </Text>
              
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Response to Incidents:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Clearly define the procedures for responding to incidents. This includes communication with management, law enforcement, and any necessary follow-up actions.
                  </>
                </span>
              </Text>
              
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Client and Employee Awareness:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Promote awareness among clients and employees regarding security measures in place. This can contribute to a collective effort in maintaining a secure environment.
                  </>
                </span>
              </Text>
              
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Continuous Improvement:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Regularly review and assess the effectiveness of security measures. Implement changes and improvements xld on lessons learned from incidents or changing security landscapes.
                  </>
                </span>
              </Text>
              
             
            
              
            </div>
          

          </div>
          <QuickLinks/>
        </div>
        <Banner/>
        <Footer className="flex items-center justify-center mt-[29px] md:px-5 w-full bg-gray-900_01" />
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}
    </>
  );
};

export default Guard;
