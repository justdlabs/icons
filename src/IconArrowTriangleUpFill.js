import * as React from "react";
const SvgIconArrowTriangleUpFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M4.187 17.465C3.613 18.612 4.427 20 5.735 20h12.53c1.309 0 2.122-1.388 1.548-2.535L13.548 4.96c-.642-1.28-2.454-1.28-3.095 0z"
    />
  </svg>
);
export default SvgIconArrowTriangleUpFill;
