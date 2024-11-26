import * as React from "react";
const SvgIconShoppingBagEdit = (props) => (
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M10.75 22h-6.5l2-13.5h11.5l.74 4.994M15.25 8.5V6.75a3.25 3.25 0 0 0-6.5 0V8.5m5 12.167V23h2.333l3.75-3.75a1.65 1.65 0 1 0-2.333-2.333z"
    />
  </svg>
);
export default SvgIconShoppingBagEdit;
