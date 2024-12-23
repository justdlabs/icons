import * as React from "react";
const SvgIconSunset = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 12.25V12a8.25 8.25 0 1 1 16.5 0v.25m-18.5 4h20.5m-15.5 4h10.5"
    />
  </svg>
);
export default SvgIconSunset;
