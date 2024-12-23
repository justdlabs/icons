import * as React from "react";
const SvgIconBrandLinkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M19.65 3.75H4.35A1.35 1.35 0 0 0 3 5.1v15.3a1.35 1.35 0 0 0 1.35 1.35h15.3A1.35 1.35 0 0 0 21 20.4V5.1a1.35 1.35 0 0 0-1.35-1.35M8.4 19.05H5.7v-8.1h2.7zM7.05 9.375A1.575 1.575 0 1 1 8.67 7.8a1.6 1.6 0 0 1-1.62 1.575M18.3 19.05h-2.7v-4.266c0-1.278-.54-1.737-1.242-1.737a1.565 1.565 0 0 0-1.458 1.674.6.6 0 0 0 0 .126v4.203h-2.7v-8.1h2.61v1.17a2.8 2.8 0 0 1 2.43-1.26c1.395 0 3.024.774 3.024 3.294z"
    />
  </svg>
);
export default SvgIconBrandLinkedin;
