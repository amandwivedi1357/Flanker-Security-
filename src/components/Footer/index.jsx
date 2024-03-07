import React from "react";

import { Text } from "components";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <footer className={props.className}>
        <div className="bg-[#070710] flex flex-col items-center justify-center sm:items-start sm:justify-start p-[105px] md:px-10  sm:px-5 w-full ">
          <div className="flex flex-col gap-[7px] items-center justify-center mt-[13px]  w-[100%] md:w-full ">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full ">
              <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-1/4 md:w-full  ">
                <Text
                  className="text-white-A700 text-xl tracking-[0.03px]"
                  size="txtPoppinsMedium20"
                >
                  Address
                </Text>
                <Text
                  className="capitalize leading-[194.00%] text-base text-white-A700_bc tracking-[0.25px] w-[99%]"
                  size="txtPoppinsRegular16"
                >
                  P 1, Karthik Enclave, Road No 1, KPHB Colony, Kukatpally,
                  Hyderabad - 500085
                </Text>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start">
                <Text
                  className="text-white-A700 text-xl tracking-[0.03px]"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  Contact Details
                </Text>
                <Text
                  className="capitalize text-base text-white-A700_bc tracking-[0.25px]"
                  size="txtPoppinsRegular16"
                >
                 +91 91007 92007
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start">
                <Text
                  className="text-white-A700 text-xl tracking-[0.03px]"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  Email Id
                </Text>
                <Text
                  className=" text-base text-white-A700_bc tracking-[0.04px]"
                  size="txtPoppinsRegular16"
                >
                  info@flankersecurity.com
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start w-[12%] md:w-full">
                <Text
                  className="text-white-A700 text-xl tracking-[0.03px]"
                  size="txtPoppinsRegular20WhiteA700"
                >
                  Quick Links
                </Text>
                <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                  <li>
                    <Text onClick={()=>navigate('/')}
                      className="hover:text-[#fcb131] capitalize text-base text-white-A700_bc tracking-[0.16px]"
                      size="txtPoppinsRegular16"
                    >
                      Home
                    </Text>
                  </li>
                  <li>
                    <Text onClick={()=>navigate('/aboutus')}
                      className="hover:text-[#fcb131] capitalize mt-[7px] text-base text-white-A700_bc tracking-[0.16px]"
                      size="txtPoppinsRegular16"
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text onClick={()=>navigate('/services')}
                      className="hover:text-[#fcb131] capitalize mt-[7px] text-base text-white-A700_bc tracking-[0.16px]"
                      size="txtPoppinsRegular16"
                    >
                      Services
                    </Text>
                  </li>
                  <li>
                    <Text onClick={()=>navigate('/gallery')}
                      className="hover:text-[#fcb131] capitalize mt-2.5 text-base text-white-A700_bc tracking-[0.16px]"
                      size="txtPoppinsRegular16"
                    >
                      Gallery
                    </Text>
                  </li>
                  <li>
                    <Text onClick={()=>navigate('/contactform')}
                      className="hover:text-[#fcb131] capitalize mt-1.5 text-base text-white-A700_bc tracking-[0.16px]"
                      size="txtPoppinsRegular16"
                    >
                      contact us
                    </Text>
                  </li>
                </ul>
              </div>
            </div>

            <Text onClick={()=>window.open('https://rayformula.com/','_blank')}
              className="text-lg sm:mt-8 cursor-pointer text-white-A700 tracking-[0.03px]"
              size="txtNunitoMedium18"
            >
              <div className="flex">
              <img className="w-5 mr-4" src="images/rayformula.svg" alt="" />  <span>Website by Rayformula </span>
              </div>
             
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
