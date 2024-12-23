import * as React from "react";
const SvgIconAcademicCap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.26 10.147a60 60 0 0 0-.491 6.347A48.6 48.6 0 0 1 12 20.904a48.6 48.6 0 0 1 8.232-4.41 61 61 0 0 0-.491-6.347m0 0a51 51 0 0 1 2.658-.814A60 60 0 0 0 12 3.493 60 60 0 0 0 1.601 9.334 50.6 50.6 0 0 1 12 13.49a50.7 50.7 0 0 1 7.741-3.342ZM6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 0v-3.675A55 55 0 0 1 12 8.443m-7.007 11.55A5.98 5.98 0 0 0 6.75 15.75v-1.5"
    />
  </svg>
);
export default SvgIconAcademicCap;
