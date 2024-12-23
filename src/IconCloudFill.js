import * as React from "react";
const SvgIconCloudFill = (props) => (
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
      d="M12 4a6.75 6.75 0 0 0-6.22 4.124A6.002 6.002 0 0 0 7 20h11.125a4.875 4.875 0 0 0 .61-9.712A6.75 6.75 0 0 0 12 4"
    />
  </svg>
);
export default SvgIconCloudFill;
