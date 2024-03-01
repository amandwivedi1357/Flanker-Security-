import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Banner, Button, Img, QuickLinks, Text, Toast } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import riskM from "../../assets/Event_Sec/risk management.jpg"
const Risk = () => {
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
              src="images/img_rectangle21985_1.png"
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
                className="sm:block -mt-[12rem] hidden h-[488px] sm:h-auto object-cover w-full"
                // src="images/risk.jpg"
                src={riskM}
                alt="rectangle22116"
              />
        <div className="flex flex-col sm:pt-0 items-center justify-start p-[82px] pb-0 md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start max-w-[1239px] mb-[172px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[13px] w-full md:w-full">
              <Img
                className="sm:hidden h-[488px] sm:h-auto object-cover w-full"
                // src="images/risk.jpg"
                src={riskM}
                alt="rectangle22116"
              />
              <Text
                className="mt-[37px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.25px]"
                size="txtOpenSansRomanBold32"
              >
                Risk Assessment{" "}
              </Text>
              <Text
                className="leading-[29.00px] mt-4 text-[18px] text-black-900_cc tracking-[0.50px] w-full"
                size="txtLatoRegular15Black900cc"
              >
               Risk assessment is the process of identifying, analyzing, and evaluating potential risks to an organization's assets, operations, and reputation. It involves understanding the likelihood and impact of various threats, allowing organizations to prioritize and allocate resources effectively.
              </Text>
              <Text
                className="mt-[30px] text-black-900_cc text-xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
              Key Components:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> 	Identification of Assets:</span>
                  <br />
                    	Identify and catalog the organization's critical assets , systems, personnel, and facilities.
                  
                  
                  
                </>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Threat Identification:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Identify potential threats and vulnerabilities that could exploit the organization's assets. This includes both internal and external factors.
                    
                   
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Risk Analysis:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                    	Assess the likelihood and potential impact of identified risks. This involves quantifying the probability and severity of each risk.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-  xl font-bold">
                  <>
                  Risk Evaluation:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Prioritize risks   xld on their significance, allowing organizations to focus resources on the most critical issues.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-  xl font-bold">
                  <>
                  Documentation:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                    	Document the entire risk assessment process, including identified risks, their analysis, and the chosen risk evaluation criteria.
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

export default Risk;
