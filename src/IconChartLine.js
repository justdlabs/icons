import * as React from "react";
const SvgIconChartLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1.75 16.833 4.43-5.041a1 1 0 0 1 1.45-.056l5.62 5.484a1 1 0 0 0 1.487-.1L22.25 7.5"
    />
  </svg>
);
export default SvgIconChartLine;
