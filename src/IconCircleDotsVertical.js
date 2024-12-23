import * as React from "react";
const SvgIconCircleDotsVertical = (props) => (
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
      stroke="currentColor"
      strokeWidth={0.5}
      d="M11.25 8a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm0 4a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm0 4a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M12 21.25a9.25 9.25 0 1 1 0-18.5 9.25 9.25 0 0 1 0 18.5Z"
    />
  </svg>
);
export default SvgIconCircleDotsVertical;
