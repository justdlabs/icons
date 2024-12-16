import * as React from "react";
const SvgIconBoltOff = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.835 8.03 3.249 3.94a.75.75 0 1 0-.998 1.12l18.5 16.5a.75.75 0 0 0 .998-1.12l-4.726-4.215 3.803-5.515a1.25 1.25 0 0 0-1.029-1.96h-5.798V3.106c0-1.227-1.583-1.72-2.279-.71zm1.128 1.006 6.931 6.182 3.427-4.968h-5.572c-.69 0-1.25-.56-1.25-1.25V3.908z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m6.119 10.518 1.128 1.006-2.57 3.726h5.572c.69 0 1.25.56 1.25 1.25v5.091l2.68-3.885 1.128 1.007-3.029 4.39c-.696 1.01-2.279.518-2.279-.709V16.75H4.201a1.25 1.25 0 0 1-1.029-1.96z"
    />
  </svg>
);
export default SvgIconBoltOff;
