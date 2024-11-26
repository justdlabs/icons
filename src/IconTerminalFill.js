import * as React from "react";
const SvgIconTerminalFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 21zm3.72 3.47a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 0 1 0 1.06l-1.75 1.75a.75.75 0 0 1-1.06-1.06l.689-.69a.75.75 0 0 0 0-1.06l-.69-.69a.75.75 0 0 1 0-1.06Zm4.03 3.28a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconTerminalFill;
