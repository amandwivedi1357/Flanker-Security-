import React, {  useState } from "react";
import emailjs from '@emailjs/browser';
import { Button, Img, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const typeOfServiceOptionsList = [
  { label: "Drones", value: "Drones" },

  { label: "Security Audits", value: "Security Audits" },
  { label: "Security Infrastructure", value: "Security Infrastructure" },
  { label: "Risk Assessment", value: "Risk Assessment" },
  { label: "Security Training", value: "Security Training" },
  { label: "Security Guards", value: "Security Guards" },
  { label: "Security Infrastructure", value: "option3" },
];
const countryOptionsList = [
  { label: "India", value: "india" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const cityOptionsList = [
  { label: "Hyderabad", value: "Hyderabad" },
  { label: "Bangalore", value: "Bangalore" },
  { label: "Mumbai", value: "Mumbai" },
];
const postalCodeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContactformPage = () => {
  const [toast, setToast] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phoneNumber: "",
    typeOfService: "",
    country: "",
    city: "",
    postalCode: "",
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
      type_of_service: formData.typeOfService,
      country: formData.country,
      city: formData.city,
      postal_code: formData.postalCode,
      
    }, "PAMSeoabaa0l3PiqP")
      .then((result) => {
        setToast({ message: 'Thank You for contacting us. We will Contact you soon.', type: 'success' });

        console.log(result.text);
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          company: "",
          phoneNumber: "",
          typeOfService: "",
          country: "",
          city: "",
          postalCode: "",
         
        });
        
      }, (error) => {
        setToast({ message: 'Error sending email. Please try again.', type: 'error' });

        console.log(error.text);
        
      });
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center mb-[-20px] justify-start mx-auto w-full">
        <div className="md:h-[848px] h-[875px] md:px-5 relative w-full ">
          <div className="absolute h-[848px] inset-[0] justify-center sm:bg-[#1F1A13]  w-full">
            <Img
              className="h-[848px] m-auto object-cover w-full sm:hidden"
              src="images/img_rectangle21985_2.png"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[21px] h-max inset-[0] items-center justify-center m-auto">
              <Text
                className="capitalize sm:text-3xl sm:w-4/5 sm:font-normal md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px]"
                size="txtPoppinsBold60"
              >
                We are here for you
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
        <div className="bg-gray-50 flex flex-col font-lato items-center justify-start p-[69px] md:px-10 sm:px-5 w-full ">
          <div className="bg-white-A700 flex flex-col  rounded-xl items-end justify-start max-w-[1240px] mb-9 mx-auto pl-[60px] md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[93px] items-center justify-end w-full">
              <form onSubmit={sendEmail} className=" flex md:flex-1 flex-col gap-[53px] items-start justify-start w-[44%] md:w-full">
                <div className=" flex flex-col gap-[23px] items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <a
                        href="javascript:"
                        className="text-gray-600 text-sm tracking-[2.00px] uppercase"
                      >
                        <Text className="pt-5" size="txtRedHatDisplayRomanMedium14">
                          contact us
                        </Text>
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
                      <div className="font-lato sm:gap-5 gap-[39px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[37px] w-full">
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <input required name="name" onChange={e => handleChange(e.target.value, { name: "name" })} value={formData.name} placeholder=" Full name" className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px] w-full placeholder-gray-600_a0"/>
                           
                         
                        </div>
                        <div className=" flex flex-1 flex-col items-center justify-start w-full">
                        <input  required name="company" onChange={e => handleChange(e.target.value, { name: "company" })} value={formData.company} placeholder=" Company name" className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] placeholder-gray-600_a0 py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px] w-full"/>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <input  required name="email" onChange={e => handleChange(e.target.value, { name: "email" })} value={formData.email} placeholder=" Email Id" className="border-b border-gray-600 border-solid sm:pr-5 pr-[35px] py-[13px] text-[15px] placeholder-gray-600_a0 text-gray-600_a0 tracking-[1.20px] w-full"/>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <input  required name="phoneNumber"  onChange={e => handleChange(e.target.value, { name: "phoneNumber" })} value={formData.phoneNumber} placeholder=" Phone Number" className="border-b border-gray-600 border-solid sm:pr-5 placeholder-gray-600_a0 pr-[35px] py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px] w-full"/>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row font-lato gap-[39px] items-center justify-between mt-[23px] w-full">
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[47%] sm:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <SelectBox  required
                              className="text-[15px] text-left tracking-[1.20px] w-full"
                              placeholderClassName="text-gray-600_a0"
                              indicator={
                                <Img
                                  className="h-6 mr-[0] w-6"
                                  src="images/img_arrow_drop_down.svg"
                                  alt="Arrow Drop Down"
                                />
                              }
                              isMulti={false}
                              name="typeOfService"
                              options={typeOfServiceOptionsList}
                              isSearchable={false}
                              placeholder="Type of service"
                              shape="square"
                              color="gray_600"
                              variant="outline"
                              onChange={selectedValue => handleChange(selectedValue, { name: "typeOfService" })}
                              value = {formData.typeOfService}
                            />
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-[47%] sm:w-full">
                          <SelectBox  required
                            className="text-[15px] text-left tracking-[1.20px] w-full"
                            placeholderClassName="text-gray-600_a0"
                            indicator={
                              <Img
                                className="h-6 mr-[0] w-6"
                                src="images/img_arrow_drop_down.svg"
                                alt="Arrow Drop Down"
                              />
                            }
                            isMulti={false}
                            name="country"
                            options={countryOptionsList}
                            isSearchable={false}
                            placeholder="Country"
                            shape="square"
                            color="gray_600"
                            variant="outline"
                            onChange={selectedValue => handleChange(selectedValue, { name: "country" })}
                            value = {formData.country}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[39px] items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-[47%] sm:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <SelectBox  required
                          className="text-[15px] text-left tracking-[1.20px] w-full"
                          placeholderClassName="text-gray-600_a0"
                          indicator={
                            <Img
                              className="h-6 mr-[0] w-6"
                              src="images/img_arrow_drop_down.svg"
                              alt="Arrow Drop Down"
                            />
                          }
                          isMulti={false}
                          name="city"
                          options={cityOptionsList}
                          isSearchable={false}
                          placeholder="City"
                          shape="square"
                          color="gray_600"
                          variant="outline"
                          onChange={selectedValue => handleChange(selectedValue, { name: "city" })}
                          value = {formData.city}
                        />
                      </div>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-[47%] sm:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <SelectBox  required
                          className="text-[15px] text-left tracking-[1.20px] w-full"
                          placeholderClassName="text-gray-600_a0"
                          indicator={
                            <Img
                              className="h-6 mr-[0] w-6"
                              src="images/img_arrow_drop_down.svg"
                              alt="Arrow Drop Down"
                            />
                          }
                          isMulti={false}
                          name="postalCode"
                          options={postalCodeOptionsList}
                          isSearchable={false}
                          placeholder="Postal Code"
                          shape="square"
                          color="gray_600"
                          variant="outline"
                          onChange={selectedValue => handleChange(selectedValue, { name: "postalCode" })}
                          value = {formData.postalCode}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-poppins items-center justify-start w-[31%] md:w-full">
                  <Button type="submit" className="hover:bg-transparent border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-base text-center tracking-[0.16px]">
                    get in touch
                  </Button>
                </div>
              </form>
              <div className="bg-orange-400 rounded-xl rounded-l-none flex md:flex-1 flex-col font-poppins md:gap-10 gap-[66px] items-center justify-center p-[54px] md:px-10 sm:px-5 w-[49%] md:w-full sm:w-[410px]">
                <Text
                  className="mt-[58px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[0.36px]"
                  size="txtPoppinsSemiBold36Black900"
                >
                  Contact Information
                </Text>
                <div className="flex flex-col font-lato items-start justify-start mb-[156px] w-[95%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start w-full">
                    <Img
                      className="h-[30px] sm:mt-0 mt-[3px] w-[30px]"
                      src="images/img_location_black_900.svg"
                      alt="location"
                    />
                    <Text
                      className="sm:flex-1 sm:ml-[15%]  sm:mt-[-15%] leading-[33.00px] sm:text-base  text-black-900_e5_01 text-lg tracking-[0.25px] w-[88%] sm:w-[80%]"
                      size="txtLatoRegular18"
                    >
                      P 1, Karthik Enclave, Road No 1, KPHB Colony, Kukatpally,
                      Hyderabad - 500085
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[23px] items-center justify-start mt-[45px] w-3/5 md:w-full">

                    <Img
                      className="h-8 w-8"
                      src="images/img_phone_black_900.svg"
                      alt="phone"
                    />
                    <Text
                      className="text-black-900_e5_01 text-lg tracking-[0.25px] sm:text-base"
                      size="txtLatoRegular18"
                    >
                      +91 91007 92007
                    </Text>

                  
                   

                  </div>
                  <div className="flex flex-row gap-[29px] items-start justify-start md:ml-[0] ml-[5px] mt-12 w-[58%] md:w-full">
                    <Img
                      className="h-[17px] mt-2 sm:ml-2"
                      src="images/img_lock_black_900.svg"
                      alt="lock"
                    />
                    <Text
                      className="text-black-900_e5_01 text-lg tracking-[0.25px]"
                      size="txtLatoRegular18"
                    >
                      info@flankersecurity.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full bg-gray-900_01" />
      </div>
    </>
  );
};

export default ContactformPage;