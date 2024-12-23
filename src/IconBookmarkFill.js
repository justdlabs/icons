import * as React from "react";
const SvgIconBookmarkFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M5.75 2A1.75 1.75 0 0 0 4 3.75v16.502c0 1.4 1.565 2.234 2.727 1.451l5.133-3.455a.25.25 0 0 1 .28 0l5.133 3.455c1.162.783 2.727-.05 2.727-1.451V3.75A1.75 1.75 0 0 0 18.25 2z"
    />
  </svg>
);
export default SvgIconBookmarkFill;
