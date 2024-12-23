import * as React from "react";
const SvgIconSettings = (props) => (
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M11.501 3.037a1 1 0 0 1 .998 0l7.25 4.174a1 1 0 0 1 .501.867v7.844a1 1 0 0 1-.501.866l-7.25 4.174a1 1 0 0 1-.998 0l-7.25-4.173a1 1 0 0 1-.501-.867V8.078a1 1 0 0 1 .501-.867z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M15.25 12a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z"
    />
  </svg>
);
export default SvgIconSettings;
