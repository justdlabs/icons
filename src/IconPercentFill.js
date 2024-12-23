import * as React from "react";
const SvgIconPercentFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.75c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10m-4 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0m2.53-6.47a.75.75 0 0 0-1.06-1.06l-8 8a.75.75 0 1 0 1.06 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconPercentFill;
