import React from "react";

const sizes = {
  "3xl": "text-[49px] font-bold",
  "2xl": "text-[40px] font-bold",
  xl: "text-[39px] font-bold",
  "4xl": "text-[200px] font-bold",
  s: "text-base font-bold leading-[21px]",
  md: "text-xl font-bold",
  xs: "text-sm font-bold",
  lg: "text-[25px] font-bold leading-[33px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
