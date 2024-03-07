import React, { useState } from "react";
import { Img, Button, Text, Toast } from "components";
import emailjs from '@emailjs/browser';
import Banner1 from "../../assets/Event_Sec/drone.webp"
const Banner = ({className}) => {
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
      
        setToast({ message: 'Thank You for contacting us.We will contact you soon!', type: 'success' });
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
    <div className={` ${className} font-poppins  md:h-[857px] mt-[109px] sm:mt-12 md:px-5 relative w-[100%] sm:w-[100%]`}>
      <Img
        className="h-[748px] filter brightness-50 m-auto object-cover w-full sm:w-[100%] sm:h-[610px] sm:absolute sm:-ml-5"
        // src="images/cctv.jpg"
        src={Banner1}
        alt="rectangle22077"
      />
      <form onSubmit={sendEmail} className=" rounded-lg sm:mt-[6%] sm:w-[90%] absolute bg-white-A700 flex flex-col gap-[52px] h-max inset-y-[0] items-start justify-center my-auto p-[60px] md:px-10  right-[5%]  w-[43%] ">
        <div className=" flex flex-col items-center justify-start mt-[3px] w-full ">
          <div className="flex flex-col items-start justify-start w-full">
            <a
              
              className="text-gray-600 text-sm tracking-[2.00px] uppercase sm:text-[12px]"
            >
              <Text size="txtRedHatDisplayRomanMedium14">contact us</Text>
            </a>
            <Text
              className="mt-[19px]  text-4xl sm:mt-6 sm:text-lg md:text-[34px] text-gray-900_e5 tracking-[0.36px]"
              size="txtPoppinsRegular36"
            >
              Have Questions?
            </Text>
            <Text
              className="text-4xl  sm:text-lg sm:mt-0  mt-4 md:text-[34px] text-gray-900_e5 tracking-[0.36px]"
              size="txtPoppinsSemiBold36"
            >
              Get in Touch!
            </Text>
            <div className=" font-lato sm:gap-5 gap-[26px]  grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[37px] w-full sm:justify-start sm:items-start ">
              <div className="flex flex-1 flex-col items-start justify-start w-full ">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={e => handleChange(e.target.value, { name: "name" })}
                  className=" placeholder:text-gray-300   px-6 text-base ml-[-20px]   tracking-[1.20px] outline-none "
                  placeholder="Full name"
                />
                <div className="w-full h-[0.5px] border border-gray-600_a0 mt-2"></div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <input
                  required
                  name="company"
                  value={formData.company}
                  onChange={e => handleChange(e.target.value, { name: "company" })}
                  className=" placeholder:text-gray-300 -mt-1  py-2 text-base  tracking-[1.20px] outline-none "
                  placeholder="Company name"
                />
                <div className="w-full h-[0.5px] border border-gray-600_a0 -mt-1"></div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={e => handleChange(e.target.value, { name: "email" })}
                  className="  placeholder:text-gray-300 border-gray-600_a0 border-solid py-2 text-base  tracking-[1.20px] outline-none "
                  placeholder="Email Id"
                />
                <div className="w-full h-[0.5px] border border-gray-600_a0 -mt-1"></div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <input
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={e => handleChange(e.target.value, { name: "phoneNumber" })}
                  className="  placeholder:text-gray-300  border-gray-600_a0 border-solid py-2 text-base  tracking-[1.20px] outline-none "
                  placeholder="Phone Number"
                />
                <div className="w-full h-[0.5px] border border-gray-600_a0 -mt-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  items-start justify-start sm:justify-start sm:items-start  mb-[3px] w-[32%] md:w-full">
          <Button type="submit" className=" border hover:bg-transparent  border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-base text-center tracking-[0.16px]">
            get in touch
          </Button>
        </div>
      </form>
      {toast && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}

    </div>
  );
};
export { Banner };
