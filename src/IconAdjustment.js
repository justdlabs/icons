import * as React from "react";
const SvgIconAdjustment = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.75 7h-10m10 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 1 1-6.5 0m6.5 10h-8m0 0a3.25 3.25 0 1 1-6.5 0m6.5 0a3.25 3.25 0 1 0-6.5 0m0 0h-2"
    />
  </svg>
);
export default SvgIconAdjustment;
