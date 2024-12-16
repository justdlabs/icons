import * as React from "react";
const SvgIconChartTrending = (props) => (
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
      d="M15.75 7.5h5.5V13m-.514-4.975L13 15.75l-4-4L2.75 18"
    />
  </svg>
);
export default SvgIconChartTrending;
