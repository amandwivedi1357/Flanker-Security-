import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import "./gallery.css"
import collage from '../../assets/Event_Sec/collage.png'
import collage2 from "../../assets/Event_Sec/collage2.png"



const GalleryPage = () => {
 

  return (
    <>
      <div className="bg-white-A700 flex flex-col mb-[-20px]   font-poppins gap-[27px] items-center justify-start mx-auto w-full">
        <div className="h-[648px] md:px-5  w-full sm:bg-[#1A1313]">
          <div className="h-[648px] m-auto w-full ">
            <Img
              className="h-[648px] m-auto object-cover w-full sm:hidden"
              src="images/img_rectangle21985_2.png"
              alt="rectangle21985"
            />
            <div className="absolute flex flex-col gap-[15px] h-max inset-[0] items-center justify-center m-auto ">
              <Text
                className="capitalize leading-[102.00px] md:text-5xl text-6xl sm:font-normal sm:text-3xl text-center text-white-A700 tracking-[0.25px] w-[90%] sm:w-[90%]"
                size="txtPoppinsBold60"
              >
"Explore Our Security Gallery: Every Image Tells a Story!            </Text>
              <Text
                className="text-[15px] text-center text-white-A700 tracking-[0.50px]"
                size="txtLatoRegular15"
              >
                Gallery
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
              <p className="head_text">Event Security </p>
          </div>
          <div className="gal_cont">
            <img src={collage2} className="w-full" alt="" />
          </div>
        </div>
       
        <Footer className="flex items-center justify-center md:px-5 w-full bg-gray-900_01" />
      </div>
    </>
  );
};

export default GalleryPage;
