import * as React from "react";
const SvgIconPercent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16 8-8 8m13.25-4a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M8.25 9a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0m6 6a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0"
    />
  </svg>
);
export default SvgIconPercent;
