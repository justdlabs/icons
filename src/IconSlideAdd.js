import * as React from "react";
const SvgIconSlideAdd = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.25 7.611V3.5H2.75V18h4m7.306-6.5v3.306m0 0V18m0-3.194H10.75m3.306 0h3.194M6.75 7.61h14.5V22H6.75V7.611Z"
    />
  </svg>
);
export default SvgIconSlideAdd;
