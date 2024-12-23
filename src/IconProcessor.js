import * as React from "react";
const SvgIconProcessor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5.497v-2M16 5.5v-2m-8 2V3.496M12 22v-2m4 2v-2m-8 2v-2m11.25-3.25h2m-2-8h2m-2 4h2m-18.5 0h2m-2 4h2m-2-8h2m10.499 3.999a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0M5.75 20h12.5a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconProcessor;
