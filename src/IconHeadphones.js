import * as React from "react";
const SvgIconHeadphones = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 13.75V12a8.25 8.25 0 1 1 16.5 0v1.75m-16.5 0v5.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4.5a1 1 0 0 0-1-1zm16.5 0v5.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4.5a1 1 0 0 1 1-1z"
    />
  </svg>
);
export default SvgIconHeadphones;
