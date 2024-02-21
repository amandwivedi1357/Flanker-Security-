import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "components";

const CardSlider = ({ ser_data }) => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="ser_cont_sm">
      {ser_data.map((data, index) => (
        <div
          key={index}
          className="Single_cont"
          onClick={() => handleCardClick(data.path)}
        >
          <img className="vector" src={data.image} alt="guard" />
          <Text
            className="title leading-[24.00px] mb-[23px] mt-[3px] text-black-900_b2 text-sm tracking-[0.25px] w-full"
            size="txtOpenSansRomanSemiBold14"
          >
            {data.title}
          </Text>
          <p className="desc">{data.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
