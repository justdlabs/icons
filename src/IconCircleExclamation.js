import * as React from "react";
const SvgIconCircleExclamation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.75v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9 3.75h.008v.008H12z"
    />
  </svg>
);
export default SvgIconCircleExclamation;
