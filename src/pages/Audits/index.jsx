import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Banner, Button, Img, QuickLinks, Text, Toast } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import comp from "../../assets/Event_Sec/sec7.jpg"

const Audits = () => {
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phoneNumber: "",
    
  });

  const handleChange = (selectedValue, { name }) => {
    console.log("Selected Value:", selectedValue); 
    console.log("Name:", name); 
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
              className="h-[648px] m-auto object-cover w-full sm:h-[487px]"
              src="images/img_rectangle21985_1.webp"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[22px] h-max inset-[0] items-center justify-center m-auto sm:mt-48">
              <Text
                className="sm:text-3xl sm:w-4/5 sm:font-normal capitalize leading-[89.00px] md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px] w-[70%]"
                size="txtPoppinsBold60"
              >
              Security Audits
              </Text>
              <Text
                className="text-[15px] text-center text-white-A700 tracking-[0.50px]"
                size="txtLatoRegular15"
              >
                Ensuring Safety with Strategic Audits.
              </Text>
            </div>
          </div>
          <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full " />
        </div>
        <Img
                className="h-[488px] sm:h-auto object-cover w-full sm:block sm:-mt-[22rem] hidden"
                src={comp}
                alt="rectangle22116"
              />
        <div className=" flex flex-col items-center justify-start p-[82px] sm:pt-0 pb-0 md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start max-w-[1239px] mb-[52px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[13px] w-full md:w-full">
              <Img
                className="sm:hidden h-[488px] sm:h-auto object-cover w-full rounded-xl"
                src={comp}
                alt="rectangle22116"
              />
              <Text
                className="mt-[37px] md:text-3xl sm:mt-5 sm:text-[28px] text-[32px] text-black-900 tracking-[0.25px]"
                size="txtOpenSansRomanBold32"
              >
               Security Audits{" "}
              </Text>
              <Text
                className="leading-[29.00px] mt-4 text-[18px] text-black-900_cc tracking-[0.50px] w-full"
                size="txtLatoRegular15Black900cc"
              >
                Security audits are systematic evaluations of an organisation's information systems, processes, and policies to identify and mitigate potential security risks. These audits play a crucial role in maintaining the confidentiality, integrity, and availability of sensitive information. Here's an overview of key aspects related to security audits:
              </Text>
              <Text
                className="mt-[30px] sm:mt-5 text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
                Purpose of Security Audits:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> 	Identifying Vulnerabilities:</span>
                  <br />
                  	Assessing the organization's infrastructure, networks, and systems to uncover potential vulnerabilities that could be exploited by malicious actors.
                 
                </>
                <br />
                <>
                 <span className="text-black-900_01 sm:mt-4 font-lato text-left text-xl font-bold"> 		Risk Assessment:</span>
                  <br />
                  Evaluating potential risks and their impact on the organisation's assets, operations, and reputation.
                 
                </>
                <br />
                <>
                 <span className="text-black-900_01 sm:mt-4 font-lato text-left text-xl font-bold"> 		Compliance Verification:</span>
                  <br />
                  	Ensuring that the organisation complies with relevant industry regulations, standards, and legal requirements, such as GDPR, HIPAA, or ISO 27001.
                 
                </>
                <br />
                <>
                 <span className="text-black-900_01 sm:mt-4 font-lato text-left text-xl font-bold"> 		Policy Compliance:</span>
                  <br />
                  	Verifying adherence to internal security policies and procedures to maintain a consistent and secure operational environment.
                 
                </>
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
                Types of Security Audits:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> 		Internal Audits:</span>
                  <br />
                  Conducted by the organisation's internal team to assess the effectiveness of its security controls and policies.
                 
                </>
                <br />
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold">	External Audits:</span>
                  <br />
                  	Carried out by third-party auditors to provide an unbiased evaluation of an organisation's security posture.
                </>
                <br />
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold">Physical Security Audits:</span>
                  <br />
                  	Assessing the physical security measures in place, such as access controls, surveillance systems, and environmental controls.
                </>
                <br />
               
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
                Key Components of Security Audits:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> 		Risk Assessment:</span>
                  <br />
                  	Assessing the organization's infrastructure, networks, and systems to uncover potential vulnerabilities that could be exploited by malicious actors.
                 
                </>
                <br />
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold">Security Policy Review:</span>
                  <br />
                  	Evaluating the effectiveness of existing security policies and suggesting improvements.
                 
                </>
                <br />
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> 	Incident Response Planning:</span>
                  <br />
                  	Ensuring that the organisation complies with relevant industry regulations, standards, and legal requirements, such as GDPR, HIPAA, or ISO 27001.
                 
                </>
                <br />
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> 		Policy Compliance:</span>
                  <br />
                  	Verifying adherence to internal security policies and procedures to maintain a consistent and secure operational environment.
                 
                </>
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
                Best Practices for Security Audits:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> 	Identifying Vulnerabilities:</span>
                  <br />
                  	Assessing the organization's infrastructure, networks, and systems to uncover potential vulnerabilities that could be exploited by malicious actors.
                 
                </>
                <br />
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> 		Risk Assessment:</span>
                  <br />
                  Evaluating potential risks and their impact on the organisation's assets, operations, and reputation.
                 
                </>
                <br />
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> 		Compliance Verification:</span>
                  <br />
                  	Ensuring that the organisation complies with relevant industry regulations, standards, and legal requirements, such as GDPR, HIPAA, or ISO 27001.
                 
                </>
                <br />
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> 		Policy Compliance:</span>
                  <br />
                  	Verifying adherence to internal security policies and procedures to maintain a consistent and secure operational environment.
                 
                </>
              </Text>
          
              
            </div>
            {/* <div className=" flex md:flex-1 flex-col items-center justify-start w-[30%] md:w-full">
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
 
  className="w-[70%] border-b border-gray-600 sm:ml-10  pr-[35px] py-[13px] text-[18px] text-gray-600_a0 tracking-[1.20px] placeholder-gray-600_a0"
  placeholder="Full name *"
/>


                      
                      
                    </div>
                    <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-full">
                    <input required onChange={e => handleChange(e.target.value, { name: "email" })} value={formData.email}
                        className="ml-[-65px] sm:ml-1 w-[70%] border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[18px] text-gray-600_a0 tracking-[1.20px]"
                        placeholder="Email Id *"
                      />
                    </div>
                    <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-full">
                    <input required name="company" onChange={e => handleChange(e.target.value, { name: "company" })} value={formData.company}
                        className="ml-[-65px] sm:ml-1 w-[70%] border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[18px] text-gray-600_a0 tracking-[1.20px]"
                        placeholder="Company Name *"
                      />
                    </div>
                    <div className="flex flex-col font-lato items-center justify-start mt-[23px] w-full">
                    <input required name="phoneNumber" onChange={e => handleChange(e.target.value, { name: "phoneNumber" })} value={formData.phoneNumber}
                        className="w-[70%] sm:ml-1 ml-[-65px] border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[18px] text-gray-600_a0 tracking-[1.20px]"
                        placeholder="Phone Number *"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[50px] w-[66%] md:w-full">
                    <button type="submit" className="border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-xl text-center tracking-[0.16px]">
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
                      className="leading-[24.00px] text-xl text-black-900_b2 tracking-[0.25px] w-4/5 sm:w-full"
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
                      className="text-xl text-black-900_b2 tracking-[0.25px]"
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
                      className="text-xl text-black-900_b2 tracking-[0.25px]"
                      size="txtOpenSansRomanRegular16"
                    >
                      @flankersecurity.com
                    </Text>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
          <QuickLinks/>
        </div>
        <Banner/>
        <Footer className="flex items-center justify-center sm:-mt-[9rem] mt-[29px] md:px-5 w-full bg-[#070710]" />
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}
    </>
  );
};

export default Audits;
