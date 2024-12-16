import * as React from "react";
const SvgIconChevronDoubleDown = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 13.5 4 4 4-4m-8-7 4 4 4-4"
    />
  </svg>
);
export default SvgIconChevronDoubleDown;
