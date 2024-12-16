import * as React from "react";
const SvgIconHand5 = (props) => (
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
      d="M16.25 8.5V8a1.5 1.5 0 0 1 3 0v6.985a7.015 7.015 0 0 1-13.57 2.498l-2.43-6.379a1.732 1.732 0 0 1 2.91-.486l1.09 1.25V6a1.5 1.5 0 1 1 3 0v5.75m0-1.25V5a1.5 1.5 0 0 1 3 0v7.25m0-3.75V6a1.5 1.5 0 0 1 3 0v6.75"
    />
  </svg>
);
export default SvgIconHand5;
