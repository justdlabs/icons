import * as React from "react";
const SvgIconHandPointer = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.25 10h4.5a4 4 0 0 1 4 4v.58a7.17 7.17 0 0 1-13.516 3.339L3.25 12.25l.75-.938a2 2 0 0 1 2.812-.313l.938.751v-6.5a1.75 1.75 0 1 1 3.5 0z"
    />
  </svg>
);
export default SvgIconHandPointer;
