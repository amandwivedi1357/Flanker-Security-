import React, { useState } from "react";
import { Img, Button, Text, Toast } from "components";
import emailjs from '@emailjs/browser';
const Banner = () => {
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
    <div className="font-poppins h-[748px] md:h-[857px] mt-[109px] md:px-5 relative w-full">
      <Img
        className="h-[748px] m-auto object-cover w-full"
        src="images/img_rectangle22077.png"
        alt="rectangle22077"
      />
      <form onSubmit={sendEmail} className="absolute bg-white-A700 flex flex-col gap-[52px] h-max inset-y-[0] items-start justify-center my-auto p-[60px] md:px-10 sm:px-5 right-[7%] rounded w-[43%]">
        <div className=" flex flex-col items-center justify-start mt-[3px] w-full">
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
              className="text-4xl sm:text-[32px] mt-3 md:text-[34px] text-gray-900_e5 tracking-[0.36px]"
              size="txtPoppinsSemiBold36"
            >
              Get in Touch!
            </Text>
            <div className=" font-lato sm:gap-5 gap-[26px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[37px] w-full">
              <div className="flex flex-1 flex-col items-center justify-start w-full ">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={e => handleChange(e.target.value, { name: "name" })}
                  className="border-b border-gray-600 border-solid py-2 text-base ml-[-40px] tracking-[1.20px] outline-none "
                  placeholder="Full name"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <input
                  required
                  name="company"
                  value={formData.company}
                  onChange={e => handleChange(e.target.value, { name: "company" })}
                  className="border-b border-gray-600 border-solid ml-[-40px]  py-2 text-base  tracking-[1.20px] outline-none "
                  placeholder="Company name"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={e => handleChange(e.target.value, { name: "email" })}
                  className="border-b ml-[-40px]  border-gray-600 border-solid py-2 text-base  tracking-[1.20px] outline-none "
                  placeholder="Email Id"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <input
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={e => handleChange(e.target.value, { name: "phoneNumber" })}
                  className="border-b ml-[-40px]  border-gray-600 border-solid py-2 text-base  tracking-[1.20px] outline-none "
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-1 items-center justify-start mb-[3px] w-[32%] md:w-full">
          <Button type="submit" className="border hover:bg-transparent  border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-base text-center tracking-[0.16px]">
            get in touch
          </Button>
        </div>
      </form>
      {toast && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}

    </div>
  );
};
export { Banner };
