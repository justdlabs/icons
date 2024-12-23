import * as React from "react";
const SvgIconArrowDownRightFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.366 5.366a1.25 1.25 0 0 1 1.768 0l9.366 9.366V9.25a1.25 1.25 0 1 1 2.5 0v8.5c0 .69-.56 1.25-1.25 1.25h-8.5a1.25 1.25 0 1 1 0-2.5h5.482L5.366 7.134a1.25 1.25 0 0 1 0-1.768"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconArrowDownRightFill;
