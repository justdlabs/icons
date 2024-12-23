import * as React from "react";
const SvgIconChartPresentation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16 22.5-.857-3M8 22.5l.857-3m-1.107-6V15M12 8.5V15m4.25-3.5V15m5-10.5V19H2.75V4.5z"
    />
  </svg>
);
export default SvgIconChartPresentation;
