import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import "./gallery.css"
const GalleryPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col mb-[-20px] font-poppins gap-[27px] items-center justify-start mx-auto w-full">
        <div className="h-[848px] md:px-5 relative w-full ">
          <div className="h-[848px] m-auto w-full">
            <Img
              className="h-[848px] m-auto object-cover w-full"
              src="images/img_rectangle21985_2.png"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[15px] h-max inset-[0] items-center justify-center m-auto">
              <Text
                className="capitalize md:text-5xl text-6xl text-center text-white-A700 tracking-[0.25px]"
                size="txtPoppinsBold60"
              >
                Gallery
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
        <div className="gallery_cont">
          <div className="head_cont">
              <p className="head_text">Security Guard</p>
          </div>
          <div className="gal_cont">
            
          </div>
          <div className="head_cont">
              <p className="head_text">Event Security </p>
          </div>
          <div className="gal_cont">

          </div>
        </div>
       
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default GalleryPage;
