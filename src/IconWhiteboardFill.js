import * as React from "react";
const SvgIconWhiteboardFill = (props) => (
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
      d="M12.75 3.5a.75.75 0 0 0-1.5 0v1.25h-8.5A.75.75 0 0 0 2 5.5V19c0 .414.336.75.75.75h4.21l-.672 2.013a.75.75 0 0 0 1.424.474l.829-2.487h2.709V21a.75.75 0 0 0 1.5 0v-1.25h2.71l.828 2.487a.75.75 0 0 0 1.424-.474l-.671-2.013h4.209A.75.75 0 0 0 22 19V5.5a.75.75 0 0 0-.75-.75h-8.5z"
    />
  </svg>
);
export default SvgIconWhiteboardFill;
