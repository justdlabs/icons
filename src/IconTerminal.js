import * as React from "react";
const SvgIconTerminal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.25 8.5 9 10.25 7.25 12m3.5 0h2m-9-7.5h16.5V21H3.75z"
    />
  </svg>
);
export default SvgIconTerminal;
