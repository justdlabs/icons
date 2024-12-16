import * as React from "react";
const SvgIconChartBarUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 17.5V20m6.166-6.5V20m6.166-10.5V20m6.166-14.5V20"
    />
  </svg>
);
export default SvgIconChartBarUp;
