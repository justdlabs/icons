import * as React from "react";
const SvgIconCirclePlaceholderDashed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <circle
      cx={12}
      cy={12}
      r={9.25}
      stroke="currentColor"
      strokeDasharray="3 4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgIconCirclePlaceholderDashed;
