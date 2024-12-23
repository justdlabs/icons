import * as React from "react";
const SvgIconChartBarDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.248 17.5V20m-6.166-6.5V20M8.916 9.5V20M2.75 5.5V20"
    />
  </svg>
);
export default SvgIconChartBarDown;
