import * as React from "react";
const SvgIconLayoutColumnVerticalAdd = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M2.75 20H2c0 .414.336.75.75.75zm0-14.5v-.75A.75.75 0 0 0 2 5.5zM12 20v.75a.75.75 0 0 0 .75-.75zm9.25-14.5H22a.75.75 0 0 0-.75-.75zM20.5 11a.75.75 0 0 0 1.5 0zm-7.75-5.25a.75.75 0 0 0-1.5 0zM3.5 20V5.5H2V20zm8.5-.75H2.75v1.5H12zM20.5 5.5V11H22V5.5zm-17.75.75H12v-1.5H2.75zm9.25 0h9.25v-1.5H12zM12.75 20V5.75h-1.5V20z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 14.5v3.25m0 0V21m0-3.25h-3.25m3.25 0h3.25"
    />
  </svg>
);
export default SvgIconLayoutColumnVerticalAdd;
