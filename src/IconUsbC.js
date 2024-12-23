import * as React from "react";
const SvgIconUsbC = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.75 12h12.5M6 17.25h12a5.25 5.25 0 1 0 0-10.5H6a5.25 5.25 0 0 0 0 10.5"
    />
  </svg>
);
export default SvgIconUsbC;
