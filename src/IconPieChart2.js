import * as React from "react";
const SvgIconPieChart2 = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 10a7.68 7.68 0 0 0-6.5-6.5V10z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 13.75a8.25 8.25 0 1 1-7.996-8.246V13.5h7.992q.004.124.004.25"
    />
  </svg>
);
export default SvgIconPieChart2;
