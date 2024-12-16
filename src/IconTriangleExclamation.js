import * as React from "react";
const SvgIconTriangleExclamation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 9.5v4M9.45 5.126 3.08 15.422C1.845 17.421 3.283 20 5.633 20h12.735c2.35 0 3.787-2.58 2.551-4.578L14.552 5.126c-1.173-1.896-3.93-1.896-5.103 0Z"
    />
    <circle cx={12} cy={16.25} r={1} fill="currentColor" />
  </svg>
);
export default SvgIconTriangleExclamation;
