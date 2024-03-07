import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import "./gallery.css"
import collage from '../../assets/Event_Sec/collage.webp'
import collage2 from "../../assets/Event_Sec/collage2.webp"



const GalleryPage = () => {
 

  return (
    <>
      <div className="bg-white-A700 flex flex-col mb-[-20px]   font-poppins gap-[27px] items-center justify-start mx-auto w-full ">
        <div className="h-[648px] md:px-5 relative w-full ">
          <div className="h-[648px] inset-[0] justify-center absolute m-auto w-full ">
            <Img
              className="h-[648px] filter brightness-50 m-auto object-cover w-full "
              src="images/img_rectangle21985_2.webp"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[15px] h-max inset-[0] items-center justify-center m-auto ">
              <Text
                className="capitalize sm:text-left leading-[102.00px] sm:leading-[45.00px] md:text-5xl text-6xl sm:font-normal sm:text-3xl text-center text-white-A700 tracking-[0.25px] w-[90%] sm:w-[90%]"
                size="txtPoppinsBold60"
              >
 Every Image Tells a Story!</Text>
              <Text
                className="text-[18px] sm:w-[90%] sm:leading-7 sm:text-left text-center text-white-A700_bc tracking-[0.50px]"
                size="txtLatoRegular15"
              >
               Safety framed in every image, security woven in every pixel.
              </Text>
            </div>
          </div>
          <Header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full" />
        </div>
        <div className="gallery_cont">
          <div className="head_cont">
              <p className="head_text sm:text-xl">Security Guard</p>
          </div>
          <div className="image-container">
      <img className="w-full" src={collage} alt="" />

    </div>
          <div className="head_cont">
              <p className="head_text mt-12">Event Security </p>
          </div>
          <div className="gal_cont">
            <img src={collage2} className="w-full" alt="" />
          </div>
        </div>
       
        <Footer className="flex items-center justify-center md:px-5 w-full bg-[#070710]" />
      </div>
    </>
  );
};

export default GalleryPage;
