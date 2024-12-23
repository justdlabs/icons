import * as React from "react";
const SvgIconBrandVercel = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path fill="currentColor" d="m12 3 10 17.32H2z" />
  </svg>
);
export default SvgIconBrandVercel;
