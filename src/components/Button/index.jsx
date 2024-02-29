import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    gray_900: "bg-gray-900 text-white-A700",
    white_A700: "bg-white-A700 text-gray-900",
    black_900_33: "bg-black-900_33",
  },
  outline: {
    gray_200: "border-gray-200 border border-solid text-gray-600_02",
  },
};
const sizes = {
  md: "h-16 px-6",
  lg: "h-[76px] px-[35px] text-base",
  sm: "h-[50px] px-[35px] text-sm",
  xs: "h-[35px] px-8 text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  variant = "fill",
  size = "xs",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square"]),
  size: PropTypes.oneOf(["md", "lg", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_900", "white_A700", "black_900_33", "gray_200"]),
};

export { Button };
