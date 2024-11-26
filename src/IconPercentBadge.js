import * as React from "react";
const SvgIconPercentBadge = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.99 15.743 6-6m6 3a3.75 3.75 0 0 1-1.593 3.07 3.75 3.75 0 0 1-1.043 3.296 3.75 3.75 0 0 1-3.296 1.043 3.75 3.75 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.74 3.74 0 0 1-3.296-1.043 3.75 3.75 0 0 1-1.043-3.297 3.75 3.75 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 2.564-4.221 3.75 3.75 0 0 1 1.775-.118 3.75 3.75 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043 3.75 3.75 0 0 1 1.043 3.297 3.75 3.75 0 0 1 1.593 3.068Zm-11.25-2.25h.008v.007H9.74zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m4.125 4.5h.008V15h-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
    />
  </svg>
);
export default SvgIconPercentBadge;
