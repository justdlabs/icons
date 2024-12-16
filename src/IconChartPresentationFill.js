import * as React from "react";
const SvgIconChartPresentationFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 4.5a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-.75.75h-5.256l.727 2.544a.75.75 0 1 1-1.442.412l-.845-2.956H9.566l-.845 2.956a.75.75 0 0 1-1.442-.412l.727-2.544H2.75A.75.75 0 0 1 2 19zm6.5 9a.75.75 0 0 0-1.5 0V15a.75.75 0 0 0 1.5 0zM12 7.75a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V8.5a.75.75 0 0 1 .75-.75m5 3.75a.75.75 0 0 0-1.5 0V15a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconChartPresentationFill;
