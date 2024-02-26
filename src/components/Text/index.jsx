import React from "react";

const sizeClasses = {
  txtHeeboRegular36: "font-poppins font-semibold",
  txtLeckerliOneRegular36: "font-leckerlione font-normal",
  txtLatoRegular15Gray700: "font-lato font-normal",
  txtNunitoMedium18: "font-medium font-nunito",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsBold60: "font-bold font-poppins",
  txtRedHatDisplayRomanRegular32: "font-normal font-redhatdisplay",
  txtPoppinsSemiBold36Black900: "font-poppins font-semibold",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtOpenSansRomanBold32: "font-bold font-opensans",
  txtLatoMedium20: "font-lato font-medium",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtLatoRegular15Gray600a0: "font-lato font-normal",
  txtHeeboMedium14: "font-heebo font-medium",
  txtLatoRegular15Black900cc: "font-lato font-normal",
  txtLatoRegular18: "font-lato font-normal",
  txtLatoRegular15: "font-lato font-normal",
  txtRedHatDisplayRomanMedium14: "font-medium font-redhatdisplay",
  txtPoppinsRegular36: "font-normal font-poppins",
  txtOpenSansRomanRegular16: "font-normal font-opensans",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtLatoMedium18: "font-lato font-medium",
  txtLatoMedium20Black900: "font-lato font-medium",
  txtRedHatDisplayRomanMedium14Black900e5: "font-medium font-redhatdisplay",
  txtLatoLight15: "font-lato font-light",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtOpenSansRomanBold20: "font-bold font-opensans",
  txtOpenSansRomanBold24: "font-bold font-opensans",
  txtRedHatDisplayRomanBold36: "font-bold font-redhatdisplay",
};

const Text = ({ children, className = "", size, as, isActive, onClick, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]} ${isActive ? 'border-b-orange-400' : ''}`}
      onClick={onClick} // Add onClick handler here
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
