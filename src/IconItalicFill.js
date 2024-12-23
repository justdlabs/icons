import * as React from "react";
const SvgIconItalicFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 3.75A.75.75 0 0 1 9.75 3h9.5a.75.75 0 0 1 0 1.5h-4.194l-4.545 15h3.75a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h4.194l4.545-15H9.75A.75.75 0 0 1 9 3.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconItalicFill;
