import * as React from "react";
const SvgIconRotate2Right = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M11 21.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-8-10a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1.07 3.268a1 1 0 1 0 1 1.732 1 1 0 0 0-1-1.732m2.562 5.026a1 1 0 1 1 1-1.732 1 1 0 0 1-1 1.732M5.073 8.75a1 1 0 1 0 1-1.732 1 1 0 0 0-1 1.732"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.75 15.5V21h5.5M15 20.438A8.25 8.25 0 1 0 8.75 5.165"
    />
  </svg>
);
export default SvgIconRotate2Right;
