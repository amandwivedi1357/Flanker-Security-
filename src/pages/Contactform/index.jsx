import React, {  useState } from "react";
import emailjs from '@emailjs/browser';
import { Button, Img, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const typeOfServiceOptionsList = [
  { label: "Security Guards", value: "Security Guards" },
  { label: "Security Infrastructure", value: "Security Infrastructure" },
  { label: "Security Audits", value: "Security Audits" },
  { label: "Risk Assessment", value: "Risk Assessment" },
  { label: "Drones and Counter Drones", value: "Drones and Counter Drones" },
  { label: "Security Training", value: "Security Training" },
  { label: "Investigation", value: "Investigation" },
];
const countryOptionsList = [
  { label: "India", value: "India" },
  
];
const cityOptionsList = [
  { label: "Mumbai", value: "Mumbai" },
  { label: "Delhi", value: "Delhi" },
  { label: "Bangalore", value: "Bangalore" },
  { label: "Hyderabad", value: "Hyderabad" },
  { label: "Chennai", value: "Chennai" },
  { label: "Kolkata", value: "Kolkata" },
  { label: "Ahmedabad", value: "Ahmedabad" },
  { label: "Pune", value: "Pune" },
  { label: "Surat", value: "Surat" },
  { label: "Jaipur", value: "Jaipur" },
  { label: "Lucknow", value: "Lucknow" },
  { label: "Kanpur", value: "Kanpur" },
  { label: "Nagpur", value: "Nagpur" },
  { label: "Visakhapatnam", value: "Visakhapatnam" },
  { label: "Indore", value: "Indore" }
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
    emailjs.send('service_75aa9go', 'template_1y7g5kh', {
      user_name: formData.name,
      user_email: formData.email,
      company_name: formData.company,
      phone_number: formData.phoneNumber,
      type_of_service: formData.typeOfService,
      country: formData.country,
      city: formData.city,
      postal_code: formData.postalCode,
      
    }, "3ESxGASAWjnkszibV")
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
        <div className="md:h-[848px] h-[648px] md:px-5 relative w-full sm:-mb-44">
          <div className="absolute h-[648px] inset-[0] justify-center   w-full">
            <Img
              className="h-[648px] m-auto filter brightness-50 object-cover w-full "
              src="images/img_rectangle21985_2.webp"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[21px] h-max inset-[0] items-center justify-center m-auto">
              <Text
                className="capitalize sm:leading-[45.00px] sm:text-3xl sm:text-left sm:w-[90%] sm:font-normal md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px]"
                size="txtPoppinsBold60"
              >
                Contact for the Total  Security Solutions
              </Text>
              <Text
                className="text-[18px] sm:text-left sm:w-[90%] text-center text-white-A700_bc tracking-[0.50px]"
                size="txtLatoRegular15"
              >
                Trust the experts with your safety
              </Text>
            </div>
          </div>
          <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="bg-gray-50 sm:pt-3 sm:-mt-5 flex flex-col font-lato items-center justify-start p-[69px] sm:p-0 md:px-10 sm:px-5 w-full ">
          <div className="bg-[#fff] sm:shadow-2xl flex flex-col  rounded-xl items-end justify-start max-w-[1240px] mb-9 mx-auto pl-[60px] md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 sm:px-3 gap-[93px] items-center justify-end w-full">
              <form onSubmit={sendEmail} className=" flex md:flex-1 flex-col gap-[53px] items-start justify-start w-[44%] md:w-full">
                <div className=" flex flex-col gap-[23px] items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start sm:mt-2 w-full">
                      <a
                        
                        className="text-gray-600 text-sm tracking-[2.00px] uppercase sm:text-[15px]"
                      >
                        <Text className="pt-5" size="txtRedHatDisplayRomanMedium14">
                          contact us
                        </Text>
                      </a>
                      <Text
                        className="mt-[19px] text-4xl sm:text-[20px] md:text-[34px] text-gray-900_e5 tracking-[0.36px]"
                        size="txtPoppinsRegular36"
                      >
                        Have Questions?
                      </Text>
                      <Text
                        className="text-4xl sm:-mt-3 sm:text-[20px] md:text-[34px] text-gray-900_e5 tracking-[0.36px]"
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
                            className="text-[15px] text-left tracking-[1.20px] w-full sm:-mt-4"
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
                      <input  required name="postalCode" onChange={e => handleChange(e.target.value, { name: "postalCode" })} value={formData.postalCode} placeholder=" Postal Code" className="border-b border-gray-600 border-solid sm:-mt-4 sm:pr-5 pr-[35px] placeholder-gray-600_a0 py-[13px] text-[15px] text-gray-600_a0 tracking-[1.20px] w-full"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-poppins sm:items-start items-center justify-start w-[31%] md:w-full">
                  <Button type="submit" className="hover:bg-transparent border border-orange-400 border-solid capitalize cursor-pointer font-medium h-11 leading-[normal] min-w-[155px] text-base text-center tracking-[0.16px]">
                    get in touch
                  </Button>
                </div>
              </form>
              <div className="bg-orange-400 rounded-xl rounded-l-none sm:rounded-tr-none flex md:flex-1 flex-col font-poppins md:gap-10 gap-[66px] sm:gap-5  items-center justify-center p-[54px] sm:p-0  md:px-10 sm:px-5 w-[49%] md:w-full sm:w-[345px] sm:rounded-b-xl  ">
                <Text
                  className="mt-[58px] sm:mt-8 text-4xl sm:text-[20px] md:text-[34px] text-black-900 tracking-[0.36px]"
                  size="txtPoppinsSemiBold36Black900"
                >
                  Contact Information
                </Text>
                <div className="flex flex-col sm:mt-4 font-lato items-start justify-start mb-[156px] sm:mb-12 w-[95%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-start w-full">
                    <Img
                      className="h-[30px] sm:mt-0 mt-[3px] w-[30px]"
                      src="images/img_location_black_900.svg"
                      alt="location"
                    />
                    <Text
                      className="sm:flex-1 sm:ml-[15%]  sm:mt-[-19%] leading-[33.00px] sm:text-base  text-black-900_e5_01 text-lg tracking-[0.25px] w-[88%] sm:w-[80%]"
                      size="txtLatoRegular18"
                    >
                      P 1, Karthik Enclave, Road No 1, KPHB Colony, Kukatpally,
                      Hyderabad - 500085
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[23px] items-center justify-start mt-[45px] sm:mt-4 w-3/5 md:w-full">

                    <Img
                      className="h-8 w-8"
                      src="images/img_phone_black_900.svg"
                      alt="phone"
                    />
                    <Text
                      className="text-black-900_e5_01 text-lg sm:-ml-2 tracking-[0.25px] sm:text-base"
                      size="txtLatoRegular18"
                    >
                      +91 91007 92007
                    </Text>

                  
                   

                  </div>
                  <div className="flex sm:mt-4 flex-row gap-[29px] items-start justify-start md:ml-[0] ml-[5px] mt-12 w-[58%] md:w-full">
                    <Img
                      className="h-[17px] mt-2 sm:ml-2"
                      src="images/img_lock_black_900.svg"
                      alt="lock"
                    />
                    <Text
                      className="text-black-900_e5_01 sm:-ml-2 text-lg tracking-[0.25px] sm:mt-1 sm:pb-0"
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
        <Footer className="flex items-center  justify-center md:px-5 w-full bg-[#070710]" />
      </div>
    </>
  );
};

export default ContactformPage;