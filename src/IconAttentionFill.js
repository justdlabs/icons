import * as React from "react";
const SvgIconAttentionFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.536 3a1.75 1.75 0 0 0-1.7 1.338L2.02 20.073a.75.75 0 1 0 1.458.354l.71-2.927h8.956l-.624 2.573a.75.75 0 0 0 1.458.354l.71-2.927h5.122l.71 2.927a.75.75 0 1 0 1.458-.354L18.164 4.338A1.75 1.75 0 0 0 16.464 3zm9.714 3.933L15.052 16h4.396z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconAttentionFill;
