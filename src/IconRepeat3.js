import * as React from "react";
const SvgIconRepeat3 = (props) => (
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
      d="M7.25 18.25h-3.5a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1h16.5a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1h-8M15 15l-3.25 3.25 3.25 3"
    />
  </svg>
);
export default SvgIconRepeat3;
