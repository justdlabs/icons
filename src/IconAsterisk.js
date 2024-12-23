import * as React from "react";
const SvgIconAsterisk = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.003 2.75v18.5M3.993 7.375l16.02 9.25m-16.02 0 16.022-9.25"
    />
  </svg>
);
export default SvgIconAsterisk;
