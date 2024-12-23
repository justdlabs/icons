import * as React from "react";
const SvgIconSidebarLeftArrowFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.25 21.75H8.5v-18h10.75c.966 0 1.75.784 1.75 1.75V20a1.75 1.75 0 0 1-1.75 1.75m-3.47-10.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06l-1.72-1.72z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M4.75 3.75H7v18H4.75A1.75 1.75 0 0 1 3 20V5.5c0-.966.784-1.75 1.75-1.75"
    />
  </svg>
);
export default SvgIconSidebarLeftArrowFill;
