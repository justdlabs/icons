import * as React from "react";
const SvgIconLayoutAlignBottom = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.75 4.5h.75a.75.75 0 0 0-.75-.75zm0 16.5v.75a.75.75 0 0 0 .75-.75zm-16.5 0H3.5c0 .414.336.75.75.75zm0-16.5v-.75a.75.75 0 0 0-.75.75zm4 11.75a.75.75 0 1 0 0 1.5zm8.5 1.5a.75.75 0 1 0 0-1.5zM20 4.5V21h1.5V4.5zm.75 15.75H4.25v1.5h16.5zM5 21V4.5H3.5V21zM4.25 5.25h16.5v-1.5H4.25zm4 12.5h8.5v-1.5h-8.5z"
    />
  </svg>
);
export default SvgIconLayoutAlignBottom;
