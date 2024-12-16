import * as React from "react";
const SvgIconProcessorFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M9.499 12.749a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.746a.75.75 0 0 1 .75.75V4.75h2.5V3.5a.75.75 0 0 1 1.5 0v1.25h1.5c.966 0 1.75.784 1.75 1.75V8h1.25a.75.75 0 0 1 0 1.5H20V12h1.25a.75.75 0 0 1 0 1.5H20V16h1.25a.75.75 0 0 1 0 1.5H20V19a1.75 1.75 0 0 1-1.75 1.75h-1.5V22a.75.75 0 0 1-1.5 0v-1.25h-2.5V22a.75.75 0 0 1-1.5 0v-1.25h-2.5V22a.75.75 0 0 1-1.5 0v-1.25h-1.5A1.75 1.75 0 0 1 4 19v-1.5H2.75a.75.75 0 0 1 0-1.5H4v-2.5H2.75a.75.75 0 0 1 0-1.5H4V9.5H2.75a.75.75 0 0 1 0-1.5H4V6.5c0-.966.784-1.75 1.75-1.75h1.5V3.496a.75.75 0 0 1 1.5 0V4.75h2.5V3.496a.75.75 0 0 1 .75-.75m-.001 6.003a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconProcessorFill;
