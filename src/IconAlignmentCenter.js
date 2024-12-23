import * as React from "react";
const SvgIconAlignmentCenter = (props) => (
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
      d="M3.75 4.75h16.5M7.75 12h8.5m-12.5 7.25h16.5"
    />
  </svg>
);
export default SvgIconAlignmentCenter;
