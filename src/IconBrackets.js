import * as React from "react";
const SvgIconBrackets = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.25 3.75h-2.5a1 1 0 0 0-1 1v14.5a1 1 0 0 0 1 1h2.5m9.5-16.5h2.5a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1h-2.5"
    />
  </svg>
);
export default SvgIconBrackets;
