import * as React from "react";
const SvgIconOpenLink2 = (props) => (
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
      d="M18.25 14v4.65c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H5.35c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437c-.109-.214-.109-.494-.109-1.054V7.35c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437c.214-.109.494-.109 1.054-.109h3.9m4.5-2h6.5m0 0v6.5m0-6.5L11 13"
    />
  </svg>
);
export default SvgIconOpenLink2;
