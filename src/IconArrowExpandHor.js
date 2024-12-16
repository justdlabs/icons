import * as React from "react";
const SvgIconArrowExpandHor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 7.75 22.25 12 18 16.25M6 7.75 1.75 12 6 16.25M3 12h18"
    />
  </svg>
);
export default SvgIconArrowExpandHor;
