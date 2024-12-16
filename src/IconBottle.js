import * as React from "react";
const SvgIconBottle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 1.75v5.062a1 1 0 0 1-.322.735L7.072 9.953a1 1 0 0 0-.322.735V21.25a1 1 0 0 0 1 1h8.5a1 1 0 0 0 1-1V10.688a1 1 0 0 0-.322-.735l-2.606-2.406A1 1 0 0 1 14 6.812V1.75m-4 0h4m-4 0h-.625m4.625 0h.625"
    />
  </svg>
);
export default SvgIconBottle;
