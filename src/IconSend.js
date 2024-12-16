import * as React from "react";
const SvgIconSend = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.548 21.706a.5.5 0 0 0 .955.016L20.19 4.44a.5.5 0 0 0-.63-.631L2.277 9.497a.5.5 0 0 0 .016.955l8.444 2.471a.5.5 0 0 1 .339.34z"
    />
  </svg>
);
export default SvgIconSend;
