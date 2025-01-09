import * as React from "react";
const SvgIconDevicePhone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.25 19.75h4.5m-6.5 3h8.5a2 2 0 0 0 2-2V4.25a2 2 0 0 0-2-2h-8.5a2 2 0 0 0-2 2v16.5a2 2 0 0 0 2 2"
    />
  </svg>
);
export default SvgIconDevicePhone;
