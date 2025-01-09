import * as React from "react";
const SvgIconTriangleExclamation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.5 9.5v4M9.95 5.126 3.58 15.422C2.345 17.421 3.783 20 6.133 20h12.735c2.35 0 3.787-2.58 2.551-4.578L15.052 5.126c-1.173-1.896-3.929-1.896-5.102 0Z"
    />
    <path fill="currentColor" d="M12.5 17.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgIconTriangleExclamation;
