import * as React from "react";
const SvgIconBrandParanoid = (props) => (
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
      strokeWidth={1.091}
      d="M5.667 5.25h-.5v4.835h9.42v9.498H19.5V5.25z"
    />
  </svg>
);
export default SvgIconBrandParanoid;
