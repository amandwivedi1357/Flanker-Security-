import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Banner, Button, Img, QuickLinks, Text, Toast } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import "react-toastify/dist/ReactToastify.css";
import sec_guard from "../../assets/Event_Sec/sec_guard2.jpg"
const Training = () => {
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
            <div className="">
            <Img
              className="h-[648px] m-auto object-cover brightness-50 w-full sm:h-[487px]"
              src="images/Sec_training.jpeg"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[22px] h-max inset-[0] items-center justify-center m-auto sm:mt-48">
              <Text
                className="sm:text-3xl sm:w-4/5 sm:font-normal capitalize leading-[89.00px] md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px] w-[70%]"
                size="txtPoppinsBold60"
              >
                Security Training
              </Text>
              <Text
                className="text-[15px] -mt-[15px] text-center text-white-A700 tracking-[0.50px]"
                size="txtLatoRegular15"
              >
              Training the first line of defense.
              </Text>
            </div>
            </div>
            
          </div>
          <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        {/* <Img
                className="h-[488px] -mt-[22rem] sm:block hidden sm:h-auto object-cover  w-full rounded-xl"
                // src="images/training.jpg"
                src={sec_guard}
                alt="rectangle22116"
              /> */}
        <div className=" flex flex-row sm:flex-col sm:pt-0 inner_left  justify-start gap-12 p-[100px] pb-0 pt-0 md:px-10 sm:px-5 w-full sm:w-full sm:-mt-[22rem]">
          <div className="flex w-[70%] sm:w-full md:flex-col -mt-[3rem] flex-row gap-[52px] items-start justify-start max-w-[1239px] mb-[52px] overflow-y-auto">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[13px] w-full md:w-full">
              {/* <Img
                className="sm:hidden h-[488px] sm:h-auto object-cover w-full rounded-xl"
                // src="images/training.jpg"
                src={sec_guard}
                alt="rectangle22116"
              /> */}
              <Text
                className="mt-[37px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.25px]"
                size="txtOpenSansRomanBold32"
              >
                Training{" "}
              </Text>
              <Text
                className="leading-[29.00px] mt-4 text-[18px] text-black-900_cc tracking-[0.50px] w-full"
                size="txtLatoRegular15Black900cc"
              >
                Security training is a critical component of an organization's strategy to safeguard its assets, information, and personnel from potential threats. In an ever-evolving landscape of cyber threats, physical security risks, and compliance requirements, well-trained individuals are essential for maintaining a resilient and secure environment.
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
                Key Aspects of Security Training:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[15px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900_01 font-lato text-left text-[20px] font-bold">	Physical Security Training:</span>
                  <br />
                 <span className="text-[18px]"> 	Ensuring that personnel are aware of and adhere to physical security measures, including access controls, surveillance, and emergency response procedures.
              
                  </span>
                
                </>
              </Text>
              <Text
                className="leading-[29.00px] mt-[20px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01  font-lato text-left text-xl font-bold">
                  <>
                  Incident Response Training:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Preparing employees to respond effectively to security incidents, including reporting procedures, communication protocols, and collaboration with incident response teams.
                    
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[20px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900 font-lato text-left text-[18px] font-bold">
                  <>
                  Compliance Education:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Providing training on industry-specific regulations, standards, and compliance requirements to ensure that employees understand and adhere to legal and regulatory frameworks.
                  </>
                </span>
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
                Key Components of Effective Security Training Programs:
              </Text>
              <Text
                className="leading-[29.00px] mt-[20px]  sm:mt-4text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Customization:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Tailoring training programs to the specific needs and risks of the organization. Customization ensures that employees receive relevant and applicable information.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[20px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Engagement:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Utilizing interactive and engaging training methods, such as simulations, workshops, or scenario led exercises, to enhance knowledge retention and application.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[20px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Regular Updates:
                                      <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Keeping training materials up-to-date to address emerging threats, technology changes, and evolving compliance requirements.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[20px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Continuous Learning:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Encouraging ongoing education and providing resources for employees to stay informed about the latest security trends, technologies, and best practices.
                  </>
                </span>
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
               Benefits of Security Training:
              </Text>
              <Text
                className="leading-[29.00px] mt-[20px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Risk Mitigation:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Empowering employees with the knowledge and skills to identify and mitigate security risks, reducing the likelihood of security incidents.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[20px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Compliance Adherence:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  Ensuring that employees understand and follow compliance requirements, reducing the risk of legal consequences and financial penalties.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[20px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Improved Incident Response:
                                      <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Enhancing the organization's ability to respond effectively to security incidents, minimizing potential damage and downtime.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[20px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Cultural Shift:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Fostering a culture of security awareness and responsibility, where security becomes an integral part of day-to-day operations.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[20px] sm:mt-4 text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Resource Protection:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                  	Safeguarding the organization's valuable assets, including intellectual property, customer data, and proprietary information.
                  </>
                </span>
              </Text>
            </div>
            
          </div>
          <QuickLinks route='Security Training'/>
        </div>
        {/* <Banner/> */}
        <Footer className="flex items-center justify-center mt-[49px] md:px-5 w-full bg-[#070710]" />
      </div>
      {toast && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}
    </>
  );
};

export default Training;
