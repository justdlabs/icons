import * as React from "react";
const SvgIconBoltFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M14 3.106c0-1.227-1.584-1.72-2.28-.71L3.172 14.79a1.25 1.25 0 0 0 1.03 1.96h5.797v5.644c0 1.227 1.583 1.72 2.28.71l8.547-12.394a1.25 1.25 0 0 0-1.029-1.96h-5.798z"
    />
  </svg>
);
export default SvgIconBoltFill;
