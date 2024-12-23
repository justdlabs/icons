import * as React from "react";
const SvgIconSortAsc = (props) => (
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
      d="M3.75 18.25h14.5M3.75 12h7.5m-7.5-6.25h5.5m8.75 7.5v-8M14.75 8 18 4.75 21.25 8"
    />
  </svg>
);
export default SvgIconSortAsc;
