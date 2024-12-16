import * as React from "react";
const SvgIconCircleRightUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.75 15.25 5.82-5.82m.68 4.82v-5.5h-5.5M21.25 12a9.25 9.25 0 1 0-18.5 0 9.25 9.25 0 0 0 18.5 0"
    />
  </svg>
);
export default SvgIconCircleRightUp;
