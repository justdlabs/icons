import * as React from "react";
const SvgIconEnter180 = (props) => (
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
      d="M3.75 19.25v-9.5a1 1 0 0 1 1-1h14.5m-3 4 4-4-4-4"
    />
  </svg>
);
export default SvgIconEnter180;
