import * as React from "react";
const SvgIconSunsetFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.75 13a.75.75 0 0 1-.75-.75V12a9 9 0 0 1 18 0v.25a.75.75 0 0 1-.75.75zM1 16.25a.75.75 0 0 1 .75-.75h20.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75m5 4a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSunsetFill;
