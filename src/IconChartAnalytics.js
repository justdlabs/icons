import * as React from "react";
const SvgIconChartAnalytics = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 12.75h4L10 17l4-8.5 2.25 4.25h4M3.75 4.5h16.5V21H3.75z"
    />
  </svg>
);
export default SvgIconChartAnalytics;
