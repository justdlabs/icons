import * as React from "react";
const SvgIconUnderlineFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.5 3.75a.75.75 0 0 0-1.5 0V12a7 7 0 1 0 14 0V3.75a.75.75 0 0 0-1.5 0V12a5.5 5.5 0 1 1-11 0zM5.75 20a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z"
    />
  </svg>
);
export default SvgIconUnderlineFill;
