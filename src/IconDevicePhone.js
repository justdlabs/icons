import * as React from "react";
const SvgIconDevicePhone = (props) => (
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
      d="M16.25 3.25A1.25 1.25 0 0 1 17.5 4.5v15a1.25 1.25 0 0 1-1.25 1.25h-7.5A1.25 1.25 0 0 1 7.5 19.5v-15a1.25 1.25 0 0 1 1.25-1.25zM8.75 2a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 2.5 2.5h7.5a2.5 2.5 0 0 0 2.5-2.5v-15a2.5 2.5 0 0 0-2.5-2.5z"
    />
    <path
      fill="currentColor"
      d="M12.5 19.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
    />
  </svg>
);
export default SvgIconDevicePhone;
