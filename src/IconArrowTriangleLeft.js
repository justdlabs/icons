import * as React from "react";
const SvgIconArrowTriangleLeft = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 18.265V5.735c0-.734-.785-1.21-1.449-.877L5.296 11.123a.978.978 0 0 0 0 1.754L17.8 19.142c.664.332 1.449-.143 1.449-.877Z"
    />
  </svg>
);
export default SvgIconArrowTriangleLeft;
