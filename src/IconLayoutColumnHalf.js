import * as React from "react";
const SvgIconLayoutColumnHalf = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.25 4.5H21a.75.75 0 0 0-.75-.75zm0 16.5v.75A.75.75 0 0 0 21 21zm-16.5 0H3c0 .414.336.75.75.75zm0-16.5v-.75A.75.75 0 0 0 3 4.5zm15.75 0V21H21V4.5zm.75 15.75H3.75v1.5h16.5zM4.5 21V4.5H3V21zM3.75 5.25h16.5v-1.5H3.75z"
    />
    <path fill="currentColor" d="M11.25 4.5V21h1.5V4.5z" />
  </svg>
);
export default SvgIconLayoutColumnHalf;
