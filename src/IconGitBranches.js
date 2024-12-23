import * as React from "react";
const SvgIconGitBranches = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.5 12.75h9v-4m-9 4v-4m0 4v4m2.75-10.5a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Zm9 0a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Zm-9 13a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"
    />
  </svg>
);
export default SvgIconGitBranches;
