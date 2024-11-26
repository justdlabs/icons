import * as React from "react";
const SvgIconLayoutAlignRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.25 4.5H21a.75.75 0 0 0-.75-.75zm0 16.5v.75A.75.75 0 0 0 21 21zm-16.5 0H3c0 .414.336.75.75.75zm0-16.5v-.75A.75.75 0 0 0 3 4.5zM15.5 17a.75.75 0 0 0 1.5 0zM17 8.5a.75.75 0 0 0-1.5 0zm2.5-4V21H21V4.5zm.75 15.75H3.75v1.5h16.5zM4.5 21V4.5H3V21zM3.75 5.25h16.5v-1.5H3.75zM17 17V8.5h-1.5V17z"
    />
  </svg>
);
export default SvgIconLayoutAlignRight;
