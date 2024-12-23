import * as React from "react";
const SvgIconChevronDoubleUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 10.5 4-4 4 4m-8 7 4-4 4 4"
    />
  </svg>
);
export default SvgIconChevronDoubleUp;
