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
                className="sm:block hidden sm:rounded-none -mt-[12rem] h-[488px] sm:h-auto object-cover w-full rounded-xl"
                // src="images/risk.jpg"
                src={riskM}
                alt="rectangle22116"
              />
        <div className="flex sm:pt-0 flex-col items-center justify-start p-[82px] pb-0 md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[52px] items-start justify-start max-w-[1239px] mb-[52px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[13px] w-full md:w-full">
              <Img
                className="h-[488px] sm:hidden  sm:h-auto object-cover w-full rounded-xl"
                // src="images/risk.jpg"
                src={riskM}
                alt="rectangle22116"
              />
              <Text
                className="mt-[37px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[0.25px]"
                size="txtOpenSansRomanBold32"
              >
                NRI Properties Support: Bridging the Gap for Non-Resident Property Owners{" "}
              </Text>
              <Text
                className="leading-[29.00px] mt-4 text-[18px] text-black-900_cc tracking-[0.50px] w-full"
                size="txtLatoRegular15Black900cc"
              >
               Support services for Non-Resident Indians (NRIs) managing properties from abroad are crucial in ensuring the effective maintenance and management of real estate assets. These services bridge the geographical gap, providing peace of mind to NRI property owners.
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
             Key Aspects of NRI Properties Support:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> 			Property Maintenance:</span>
                  <br />
                   	NRI property support services oversee routine maintenance, repairs, and landscaping to ensure the property is well-kept and retains its value.
                  
                  
                </>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Tenant Management:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	For NRI property owners leasing their properties, support services handle tenant interactions, lease agreements, and address tenant concerns on behalf of the owner.
                   
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
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
                   	NRI property support ensures compliance with local laws and regulations related to property ownership, leases, and taxes, minimizing legal risks and complications.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-  xl font-bold">
                  <>
                  Financial Management:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Services include rent collection, payment of property-related expenses, and providing financial reports to NRI property owners, ensuring transparent and efficient financial management.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-  xl font-bold">
                  <>
                  Communication Bridge:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Acting as a communication bridge between NRI property owners and local stakeholders, including tenants, maintenance staff, and regulatory authorities.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-  xl font-bold">
                  <>
                  Emergency Response:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	Providing a quick and effective response to emergencies, such as property damage or urgent repairs, on behalf of NRI property owners who may not be physically present.
                  </>
                </span>
              </Text>
              <Text
                className="mt-[30px] text-black-900 text-2xl tracking-[0.50px]"
                size="txtOpenSansRomanBold20"
              >
             Benefits of NRI Properties Support:
              </Text>
              <Text
                className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]"
                size="txtLatoRegular15Black900cc"
              >
                <>
                 <span className="text-black-900_01 font-lato text-left text-xl font-bold"> Peace of Mind:</span>
                  <br />
                   	NRI property owners gain peace of mind knowing that their properties are being effectively managed and maintained in their absence.
                  
                  
                </>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
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
                   	Ensures adherence to local laws, regulations, and tax requirements, preventing legal complications and safeguarding the owner's interests.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-xl font-bold">
                  <>
                  Financial Transparency:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	NRI property support services provide transparent financial reporting, ensuring that owners are aware of income, expenses, and overall financial health.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-  xl font-bold">
                  <>
                  Property Value Preservation:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	By ensuring proper maintenance and timely responses to issues, NRI property support services contribute to preserving and potentially enhancing the value of the property.
                  </>
                </span>
              </Text>
              <Text
                className="leading-[29.00px] mt-[39px] text-black-900_01 text-xl tracking-[0.50px]"
                size="txtLatoMedium20"
              >
                <span className="text-black-900_01 font-lato text-left text-  xl font-bold">
                  <>
                  Time and Energy Savings:
                    <br />
                  </>
                </span>
                <span className="leading-[29.00px] mt-[18px] text-[18px] text-black-900_cc tracking-[0.50px]">
                  <>
                   	NRI property owners save time and energy by delegating day-to-day property management tasks to professionals, allowing them to focus on other priorities.
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
