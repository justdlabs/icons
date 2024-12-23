import * as React from "react";
const SvgIconBrandFigma = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.665 2a3.335 3.335 0 0 0-.014 6.667 3.335 3.335 0 0 0 .014 6.666H12V12.02a3.335 3.335 0 1 0 3.347-3.354A3.335 3.335 0 0 0 15.332 2zm6.647 6.667h-3.313v3.312a3.335 3.335 0 0 1 3.313-3.312"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M8.665 22A3.334 3.334 0 0 0 12 18.667v-3.334H8.665a3.335 3.335 0 0 0 0 6.667"
    />
  </svg>
);
export default SvgIconBrandFigma;
