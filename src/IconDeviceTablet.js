import * as React from "react";
const SvgIconDeviceTablet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M17.5 3.25a1.25 1.25 0 0 1 1.25 1.25v15a1.25 1.25 0 0 1-1.25 1.25h-10a1.25 1.25 0 0 1-1.25-1.25v-15A1.25 1.25 0 0 1 7.5 3.25zM7.5 2A2.5 2.5 0 0 0 5 4.5v15A2.5 2.5 0 0 0 7.5 22h10a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 2z"
    />
    <path
      fill="currentColor"
      d="M12.5 19.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
    />
  </svg>
);
export default SvgIconDeviceTablet;
