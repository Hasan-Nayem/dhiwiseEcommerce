import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700",
  },
  underline: {
    gray_200: "text-gray-600_02 border-b border-gray-200 border-solid",
  },
};
const sizes = {
  xs: "h-[27px]",
  lg: "h-[71px] px-[21px] text-base",
  sm: "h-[35px] pr-[35px] text-sm",
  md: "h-[51px] px-[21px] text-base",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "square",
      variant = "underline",
      size = "md",
      color = "gray_200",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs", "lg", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "underline"]),
  color: PropTypes.oneOf(["white_A700", "gray_200"]),
};

export { Input };
