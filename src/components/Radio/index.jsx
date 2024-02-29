import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary: "checked:border-gray-600_02 checked:border-[0.5px] checked:bg-white-A700 bg-teal-A700",
};
const sizes = {
  xs: "h-[21px] w-5",
  sm: "h-[23px] w-[11px] text-base rounded-[5px]",
};

const Radio = React.forwardRef(
  ({ className = "", name = "", label = "", id = "radio_id", variant = "primary", size = "xs", ...restProps }, ref) => {
    return (
      <label className={className + " flex items-center justify-center gap-[5px] cursor-pointer"}>
        <input
          className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
          ref={ref}
          type="radio"
          name={name}
          {...restProps}
          id={id}
        />
        <span>{label}</span>
      </label>
    );
  },
);

Radio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { Radio };
