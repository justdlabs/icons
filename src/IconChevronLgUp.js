import * as React from "react";
const SvgIconChevronLgUp = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.5 15.75 7.5-7.5 7.5 7.5"
    />
  </svg>
);
export default SvgIconChevronLgUp;
