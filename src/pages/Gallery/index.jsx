import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import "./gallery.css"
import img from "../../assets/Event_Sec/Img.webp"
import img1 from "../../assets/Event_Sec/IMG_3590.webp"
import img2 from "../../assets/Event_Sec/IMG_3596.webp"
import img3 from "../../assets/Event_Sec/IMG_3632.webp"
import img4 from "../../assets/Event_Sec/IMG_3637.webp"
import img5 from "../../assets/Event_Sec/IMG_3643.webp"
import img6 from "../../assets/Event_Sec/IMG_3649.webp"


const images = [
  {
    src:img
  },
  {
    src:img1
  },
  {
    src:img2
  },
  {
    src:img3
  },
  {
    src:img4
  },
  {
    src:img5
  },
  {
    src:img6
  },
]

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
                className="capitalize md:text-5xl text-6xl sm:font-normal sm:text-3xl text-center text-white-A700 tracking-[0.25px]"
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
          <div className="image-container">
      {images.map((imageName, index) => (
        <div key={index} className="image-wrapper">
          <img src={imageName.src} alt={imageName} />
          <div className="overlay"></div>
        </div>
      ))}
    </div>
          <div className="head_cont">
              <p className="head_text">Event Security </p>
          </div>
          <div className="gal_cont">

          </div>
        </div>
       
        <Footer className="flex items-center justify-center md:px-5 w-full bg-gray-900_01" />
      </div>
    </>
  );
};

export default GalleryPage;
