import * as React from "react";
const SvgIconNotebookCover = (props) => (
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
      d="M8.75 3.25h-3.5a1 1 0 0 0-1 1v15.5a1 1 0 0 0 1 1h3.5m0-17.5h10a1 1 0 0 1 1 1v15.5a1 1 0 0 1-1 1h-10m0-17.5v17.5m4-13h3m-3 4h3"
    />
  </svg>
);
export default SvgIconNotebookCover;
