import * as React from "react";
const SvgIconCrop = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2.75 5.75h14.5a1 1 0 0 1 1 1v14.5M5.75 2.75v14.5a1 1 0 0 0 1 1h14.5"
    />
  </svg>
);
export default SvgIconCrop;
