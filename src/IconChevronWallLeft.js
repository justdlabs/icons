import * as React from "react";
const SvgIconChevronWallLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.5 18-6-6 6-6m-10 0v12"
    />
  </svg>
);
export default SvgIconChevronWallLeft;
