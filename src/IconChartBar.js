import * as React from "react";
const SvgIconChartBar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 11.5V20M8.916 5.5V20m6.166-5.5V20m6.166-11.5V20"
    />
  </svg>
);
export default SvgIconChartBar;
