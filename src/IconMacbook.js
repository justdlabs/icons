import * as React from "react";
const SvgIconMacbook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 4.75a1 1 0 0 1 1-1h14.5a1 1 0 0 1 1 1v12H3.75zm-2 12h20.5v2.5a1 1 0 0 1-1 1H2.75a1 1 0 0 1-1-1z"
    />
  </svg>
);
export default SvgIconMacbook;
