import * as React from "react";
const SvgIconLogout = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.25 12H9m11.25 0-4.5 4.5m4.5-4.5-4.5-4.5m-4.5 12.75h-6.5a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1h6.5"
    />
  </svg>
);
export default SvgIconLogout;
