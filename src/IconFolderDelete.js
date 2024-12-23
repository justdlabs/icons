import * as React from "react";
const SvgIconFolderDelete = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.25 19.25h11V6.75H12l-2-3H2.75v8m4.5 3L5 17m0 0-2.25 2.25M5 17l-2.25-2.25M5 17l2.25 2.25"
    />
  </svg>
);
export default SvgIconFolderDelete;
