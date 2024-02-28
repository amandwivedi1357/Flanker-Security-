import { Img, Text } from 'components';
import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'; // You can define your styles in this CSS file



const Slider = ({slidesData,time}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        setCurrentSlide((prevSlide) =>
          prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
        );
      }
    }, time); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container" ref={sliderRef}>
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div className="slide" key={slide.id}>
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
