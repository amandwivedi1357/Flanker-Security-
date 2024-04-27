import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Banner, Button, Img, QuickLinks, Text, Toast } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Investigation = () => {
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
        <div className="md:h-[848px] h-[675px] md:px-5 relative w-full">
          <div className="absolute h-[648px] inset-[0] justify-center  w-full">
            <Img
              className="h-[648px] m-auto object-cover w-full sm:h-[487px]"
              src="images/img_rectangle21985_1.webp"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[22px] h-max inset-[0] items-center justify-center m-auto sm:mt-48">
              <Text
                className=" sm:text-3xl sm:w-4/5 sm:font-normal capitalize leading-[89.00px] md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px] w-[70%]"
                size="txtPoppinsBold60"
              >
                Security Investigation
              </Text>
              <Text
                className="text-[15px] text-center text-white-A700 tracking-[0.50px]"
                size="txtLatoRegular15"
              >
                Investigating the Unknown - Uncovering the Truth.
              </Text>
            </div>
          </div>
          <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <Img
                className=" sm:block -mt-[22rem] hidden h-[488px] sm:h-auto object-cover w-full"
                src="images/img_rectangle22116.webp"
                alt="rectangle22116"
              />
        <div className="pt-0 flex flex-col items-center justify-start p-[82px] pb-0 md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start max-w-[1239px] mb-[52px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[13px] w-full md:w-full">
              <Img
                className=" sm:hidden h-[488px] sm:h-auto object-cover w-full rounded-xl"
                src="images/investigation.webp"
                alt="rectangle22116"
              />
              <Text
                className="mt-[37px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.25px]"
                size="txtOpenSansRomanBold32"
              >
                Investigation{" "}
              </Text>
              <Text
                className="leading-[29.00px] mt-4 text-[18px] text-black-900_cc tracking-[0.50px] w-full"
                size="txtLatoRegular15Black900cc"
              >
                Investigations are systematic processes undertaken to uncover facts, gather evidence, and analyze information to resolve issues, make informed decisions, or address concerns. In the context of business and security, investigations play a crucial role in ensuring compliance, uncovering fraudulent activities, and maintaining a secure and ethical operational environment.
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
                Types of Investigations:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[15px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900_01 font-lato text-left text-[20px] font-bold">		Security Breach Investigations:</span>
                  <br />
                 <span className="text-[18px]"> 	Conducted in response to a security incident breach. Seeks to identify the cause, extent, and impact of the breach and implement measures to prevent future occurrences.
              
                  </span>
                
                </>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Compliance Investigations:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Ensures that the organization adheres to industry regulations, legal requirements, and internal policies. Identifies areas of non-compliance and recommends corrective actions.
                    
                  </>
                </span>
              </Text>
            
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
                Key Steps in Investigations:
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Planning:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Define the scope, objectives, and potential risks associated with the investigation. Develop a comprehensive plan outlining the investigative process.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Evidence Gathering:                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Collect relevant information and evidence through interviews, document reviews, surveillance, or technological means. Ensure the admissibility and integrity of collected evidence.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Interviews:
                                      <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Conduct interviews with involved parties, witnesses, or relevant personnel to gather firsthand information. Ensure professionalism, neutrality, and confidentiality during the process.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Analysis:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Analyze collected data and evidence to identify patterns, trends, or anomalies. This step often involves collaboration with experts in various fields.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Reporting:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Compile a detailed and objective report outlining the findings, conclusions, and recommended actions. The report may be used for decision-making, legal proceedings, or corrective measures.
                  </>
                </span>
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
              Best Practices in Investigations:
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Impartiality:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Conduct investigations in an unbiased and impartial manner, ensuring that personal opinions and biases do not influence the outcome.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Confidentiality:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Maintain strict confidentiality throughout the investigation process to protect the privacy of individuals involved and the integrity of the investigation.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Documentation:
                                      <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Document all aspects of the investigation, including methodologies, findings, and actions taken. Well-maintained records contribute to transparency and accountability.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Legal Compliance:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Ensure that investigations adhere to applicable laws and regulations. This includes respecting the rights of individuals and handling evidence ethically.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
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
                   	After completing an investigation, evaluate the process and outcomes to identify areas for improvement. Implement changes to enhance the effectiveness of future investigations
                  </>
                </span>
              </Text>
              
            </div>
           
          </div>
          <QuickLinks/>
        </div>
        <Banner/>
        <Footer className="flex items-center justify-center mt-[29px] md:px-5 w-full bg-[#070710]" />
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}
    </>
  );
};

export default Investigation;
