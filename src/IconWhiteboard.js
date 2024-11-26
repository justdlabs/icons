import * as React from "react";
const SvgIconWhiteboard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 19h5.25V5.5H12M16 19l1 3m-1-3h-4m-4 0H2.75V5.5H12M8 19l-1 3m1-3h4m0-13.5v-2M12 19v2"
    />
  </svg>
);
export default SvgIconWhiteboard;
