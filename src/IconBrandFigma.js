import * as React from "react";
const SvgIconBrandFigma = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.286}
      d="M12.5 3.5h-3a3 3 0 1 0 0 6m3-6v6m0-6h3a3 3 0 0 1 0 6m-6 0h3m-3 0a3 3 0 1 0 0 6m3-6h3m-3 0v6m3-6a3 3 0 1 0 0 6.001 3 3 0 0 0 0-6.001m-3 6v3a3 3 0 1 1-3-3m3 0h-3"
    />
  </svg>
);
export default SvgIconBrandFigma;
