import Slider from 'react-slick';
import 'react-slick/slick/slick.css';
import 'react-slick/slick/slick-theme.css';

const SliderSlick = () => {
  const settings = {
    dots: false, // Hide navigation dots
    arrows: true, // Show navigation arrows
    infinite: true, // Enable infinite looping
    slidesToShow: 4, // Display 4 cards at a time
    slidesToScroll: 1, // Scroll by 1 card at a time
    responsive: [
      // Responsive adjustments for different screen sizes
      {
        breakpoint: 768, // Apply at screens wider than 768px
        settings: {
          slidesToShow: 3, // Display 3 cards on medium screens
        },
      },
      {
        breakpoint: 576, // Apply at screens wider than 576px
        settings: {
          slidesToShow: 2, // Display 2 cards on small screens
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Render your card content here */}
    </Slider>
  );
};
export {SliderSlick}