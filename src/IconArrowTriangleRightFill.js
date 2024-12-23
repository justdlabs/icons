import * as React from "react";
const SvgIconArrowTriangleRightFill = (props) => (
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
      d="M6.535 4.187C5.388 3.613 4 4.427 4 5.735v12.53c0 1.309 1.388 2.122 2.535 1.547l12.505-6.265c1.28-.64 1.28-2.454 0-3.095z"
    />
  </svg>
);
export default SvgIconArrowTriangleRightFill;
