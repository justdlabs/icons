import * as React from "react";
const SvgIconCursor1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.5 14.5 4.7-4.7a.5.5 0 0 0-.179-.822L4.026 3.383a.5.5 0 0 0-.643.643l5.595 14.995a.5.5 0 0 0 .822.179zm0 0 6.75 6.75"
    />
  </svg>
);
export default SvgIconCursor1;
