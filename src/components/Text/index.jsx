import React from "react";

const sizes = {
  xs: "text-[10px] font-normal",
  lg: "text-base font-normal leading-[21px]",
  s: "text-xs font-normal",
  "2xl": "text-[39px] font-normal leading-[52px]",
  "3xl": "text-5xl font-normal",
  xl: "text-xl font-normal leading-[27px]",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600_02 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
