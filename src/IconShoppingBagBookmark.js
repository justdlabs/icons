import * as React from "react";
const SvgIconShoppingBagBookmark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M11.75 22h-7.5l2-13.5h11.5l.556 3.75M15.25 8.5V6.75a3.25 3.25 0 0 0-6.5 0V8.5m11.5 7h-5.5V22l2.75-1.5 2.75 1.5z"
    />
  </svg>
);
export default SvgIconShoppingBagBookmark;
