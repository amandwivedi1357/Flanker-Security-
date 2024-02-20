import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-sm" };
const variants = {
  outline: {
    orange_400:
      "border border-orange-400 border-solid shadow-bs text-orange-400",
  },
  fill: { orange_400: "bg-orange-400 shadow-bs text-black-900_e5" },
};
const sizes = { xs: "p-2.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "fill",
  color = "orange_400",
  type = "button", // Default type is "button"
  ...restProps
}) => {
  return (
    <button
      type={type} // Include the type attribute
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["orange_400"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]), // Add the type prop
};

export { Button };
