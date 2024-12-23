import * as React from "react";
const SvgIconApple = (props) => (
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
      d="M8.94 2.25c1.91 1.003 2.804 2.47 3.06 4.627m0 0c-12.238-5.141-9.688 17.993-.001 13.88 9.69 4.113 12.24-19.021 0-13.88Z"
    />
  </svg>
);
export default SvgIconApple;
