import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'; // You can define your styles in this CSS file
import { Img, Text } from 'components';
import { useNavigate } from 'react-router-dom';


const Slider1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate()
  const slidesData = [
    {
      id: 1,
      content: (
          <div className={`bg-white-A700 mr-6 hover:bg-orange-400 cursor-pointer flex md:flex-1 flex-col items-start justify-end md:ml-[0] p-[27px] sm:px-5 rounded-sm w-[18%] md:w-full transition-all duration-400 
            `}
            
            onClick={()=>navigate('/guards')}
            >
            <Img
              className="h-[60px] mt-[35px] hover:filter hover:brightness-110"
              src={
               
                   "images/img_guard.svg"
                  
              }
              alt="guard"
            />
            <Text
              className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
              size="txtOpenSansRomanBold24"
            >
              Security Guards
            </Text>
            <Text
              className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
              size="txtOpenSansRomanSemiBold14"
            >
              Guarding the Now, Securing the Future.
            </Text>
          </div>
      ),
    },
    {
      id: 2,
      content: (
          <div
                    className={`bg-white-A700  cursor-pointer flex md:flex-1 ml-6 sm:ml-[2%] flex-col items-start justify-end p-[25px] sm:px-5 rounded-sm w-[22%] md:w-full transition-all duration-400 
                       
                    `}
                   
                    onClick={()=>navigate('/infrastructure')}
                  >
                    <Img
                      className="h-[60px] mt-[35px] text-black-900"
                      src={
                        
                           "images/infra_black.svg"
                          
                      }
                      alt="guard_One"
                    />
                    <Text
                      className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                      size="txtOpenSansRomanBold24"
                    >
                      Security Infra
                    </Text>
                    <Text
                      className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Guarding Tomorrow's Security Today.
                    </Text>
                  </div>
      ),
    },
    {
      id: 3,
      content: (
          <div 
                    className={`bg-white-A700  cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5 rounded-sm w-[22%] md:w-full transition-all duration-400
                      
                    `}
                    onMouseEnter={() => set(true)}
                    onMouseLeave={() => set(false)}
                    onClick={()=>navigate('/security-audits')}
                  >
                    <Img
                      className="h-[60px] mt-[35px] text-black-900"
                      src={
                        
                           "images/Audits_Black.svg"
                          
                      }
                      alt="guard_One"
                    />
                    <Text
                      className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                      size="txtOpenSansRomanBold24"
                    >
                      Security Audits
                    </Text>
                    <Text
                      className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Ensuring Safety with Strategic Audits.
                    </Text>
                  </div>
      ),
    },
    {
      id: 4,
      content: (
          <div
                    className={`bg-white-A700  cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5 rounded-sm w-[22%] md:w-full transition-all duration-400`}
                    
                    onClick={()=>navigate('/risk-assessment')}
  
                  >
                    <Img
                      className="h-[60px] mt-[35px] text-black-900"
                      src={
                        
                         
                          "images/Risk_yellow.svg"
                      }
                      alt="guard_One"
                    />
                    <Text
                      className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
                      size="txtOpenSansRomanBold24"
                    >
                      Risk Assessment
                    </Text>
                    <Text
                      className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
                      size="txtOpenSansRomanSemiBold14"
                    >
                      Assessing Today, Securing Tomorrow.
                    </Text>
                  </div>
      ),
    },
    {
      id: 5,
      content: (
          <div
          className={`bg-white-A700  cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5 rounded-sm w-[22%] md:w-full transition-all duration-400 `}
          
          onClick={()=>navigate('/drones')}
        >
          <Img
            className="h-[60px] mt-[35px] text-black-900"
            src={
              
                
                 "images/drones_yellow.svg"
            }
            alt="guard_One"
          />
          <Text
            className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
            size="txtOpenSansRomanBold24"
          >
            Drones
          </Text>
          <Text
            className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
            size="txtOpenSansRomanSemiBold14"
          >
            Our counter-drone technology stands vigilant.
          </Text>
        </div>
      ),
    },
    {
      id: 6,
      content: (
          <div
          className={`bg-white-A700  cursor-pointer flex md:flex-1 flex-col items-start justify-end p-[25px] sm:px-5 rounded-sm w-[22%] md:w-full transition-all duration-400 `}
          
          onClick={()=>navigate('/training')}
        >
          <Img
            className="h-[60px] mt-[35px] text-black-900"
            src={
              
                
                 "images/img_guard.svg"
            }
            alt="guard_One"
          />
          <Text
            className="mt-12 text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.25px]"
            size="txtOpenSansRomanBold24"
          >
            Security Training
          </Text>
          <Text
            className="leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
            size="txtOpenSansRomanSemiBold14"
          >
            Training the first line of defense.
          </Text>
        </div>
      ),
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        setCurrentSlide((prevSlide) =>
          prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
        );
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="slider-container sm:block hidden w-[100%]">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        ref={sliderRef}
      >
        {slidesData.map((slide, index) => (
          <div className="slide" key={slide.id}>
            {slide.content}
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={goToPrevSlide}>
        {"<"}
      </button>
      <button className="next-btn" onClick={goToNextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default Slider1;
