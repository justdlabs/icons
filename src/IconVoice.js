import * as React from "react";
const SvgIconVoice = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7.75 4.5V21m-4-10.5V15M12 8.5V17m4.25-10.5V19m4-8.5V15"
    />
  </svg>
);
export default SvgIconVoice;
