import * as React from "react";
const SvgIconAdapter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 6.25h-3a1 1 0 0 0-1 1v7a4 4 0 0 0 4 4H12m-3.25-12v-3.5m0 3.5h6.5m0 0h3a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4H12m3.25-12v-3.5M12 18.25v3"
    />
  </svg>
);
export default SvgIconAdapter;
