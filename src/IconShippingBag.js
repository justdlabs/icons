import * as React from "react";
const SvgIconShippingBag = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 8a3 3 0 1 1-6 0M4.693 4.69l-.879 14.5a1 1 0 0 0 .999 1.06h14.375a1 1 0 0 0 .998-1.06l-.879-14.5a1 1 0 0 0-.998-.94H5.69a1 1 0 0 0-.998.94Z"
    />
  </svg>
);
export default SvgIconShippingBag;
