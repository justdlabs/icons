import * as React from "react";
const SvgIconArrowDownRight = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.25 8.75v9.5h-9.5M6 6l11.6 11.6"
    />
  </svg>
);
export default SvgIconArrowDownRight;
