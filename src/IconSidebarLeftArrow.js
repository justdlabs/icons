import * as React from "react";
const SvgIconSidebarLeftArrow = (props) => (
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
      d="M15.25 10.5 13 12.75 15.25 15"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 5.5a1 1 0 0 1 1-1h14.5a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1z"
    />
    <path stroke="currentColor" strokeWidth={1.5} d="M8.25 4.5V21" />
  </svg>
);
export default SvgIconSidebarLeftArrow;
