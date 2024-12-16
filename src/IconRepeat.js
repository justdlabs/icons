import * as React from "react";
const SvgIconRepeat = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.5 2.75 2.646 2.646a.5.5 0 0 1 0 .708L17.5 8.75m-11 12.5-2.647-2.646a.5.5 0 0 1 0-.708L6.5 15.25m-1.25 3h14a1 1 0 0 0 1-1v-4m-16.5-3v-3.5a1 1 0 0 1 1-1h14"
    />
  </svg>
);
export default SvgIconRepeat;
