import * as React from "react";
const SvgIconSquareArrowInTl = (props) => (
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
      d="M9 9 3.5 3.5m6.75.25v6a.5.5 0 0 1-.5.5h-6m10-3.5h6.5a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1H7.75a1 1 0 0 1-1-1v-6.5"
    />
  </svg>
);
export default SvgIconSquareArrowInTl;
