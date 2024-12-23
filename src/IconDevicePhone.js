import * as React from "react";
const SvgIconDevicePhone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 19.25h4.5m-7.5 3h10.5a1 1 0 0 0 1-1V2.75a1 1 0 0 0-1-1H6.75a1 1 0 0 0-1 1v18.5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconDevicePhone;
