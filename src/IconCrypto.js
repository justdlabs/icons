import * as React from "react";
const SvgIconCrypto = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.5 7.381a1 1 0 0 1 1 0l3.25 1.877a1 1 0 0 1 .5.866v3.752a1 1 0 0 1-.5.866L12.5 16.62a1 1 0 0 1-1 0l-3.25-1.877a1 1 0 0 1-.5-.866v-3.752a1 1 0 0 1 .5-.866L11.5 7.38Z"
    />
  </svg>
);
export default SvgIconCrypto;
