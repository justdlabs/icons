import * as React from "react";
const SvgIconPaperclip2 = (props) => (
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
      d="M6.75 8.75V16a5.25 5.25 0 1 0 10.5 0V5.375a2.625 2.625 0 0 0-5.25 0v9.875"
    />
  </svg>
);
export default SvgIconPaperclip2;
