import * as React from "react";
const SvgIconCommandRegular = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M9.25 9.25V6.5A2.75 2.75 0 1 0 6.5 9.25zm0 0h5.5m-5.5 0v5.5m5.5-5.5V6.5a2.75 2.75 0 1 1 2.75 2.75zm0 0v5.5m-5.5 0h5.5m-5.5 0v2.75a2.75 2.75 0 1 1-2.75-2.75zm5.5 0v2.75a2.75 2.75 0 1 0 2.75-2.75z"
    />
  </svg>
);
export default SvgIconCommandRegular;
