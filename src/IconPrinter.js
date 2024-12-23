import * as React from "react";
const SvgIconPrinter = (props) => (
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
      d="M9.25 10.75h-2.5m0 3v6.5a1 1 0 0 0 1 1h8.5a1 1 0 0 0 1-1v-6.5m-10.5 0h10.5m-10.5 0v3.5h-3a1 1 0 0 1-1-1v-8.5a1 1 0 0 1 1-1h16.5a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1h-3v-3.5m-9.5-11h8.5a1 1 0 0 1 1 1v3H6.75v-3a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconPrinter;
