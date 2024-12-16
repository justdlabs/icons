import * as React from "react";
const SvgIconWindowVisit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M5.75 9.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0m3.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0m3.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 13V5.5H2.75V21h9.5M22 17.904l-7-2.154 2.154 7 1.615-3.23L22 17.903Z"
    />
  </svg>
);
export default SvgIconWindowVisit;
