import * as React from "react";
const SvgIconBackpack = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 10.5v7.75a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3V10.5m-10-5.75v-2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v2m-6 6.5v2m6.5-2v2m-5.5 4h4.5m6-9v-2.5a1 1 0 0 0-1-1H4.75a1 1 0 0 0-1 1v2.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3"
    />
  </svg>
);
export default SvgIconBackpack;
