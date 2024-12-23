import * as React from "react";
const SvgIconOptAlt = (props) => (
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
      d="M3.75 19.25h3.66a1 1 0 0 0 .875-.517l7.43-13.466a1 1 0 0 1 .875-.517h3.66m-4.5 14.5h4.5"
    />
  </svg>
);
export default SvgIconOptAlt;
