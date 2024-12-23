import * as React from "react";
const SvgIconCompassFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.928 2.526a1.25 1.25 0 0 1 1.546 1.546l-3.6 12.6a1.75 1.75 0 0 1-1.202 1.202l-12.6 3.6a1.25 1.25 0 0 1-1.546-1.545l3.6-12.6a1.75 1.75 0 0 1 1.202-1.203zM9.625 12a2.375 2.375 0 1 1 4.75 0 2.375 2.375 0 0 1-4.75 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCompassFill;
