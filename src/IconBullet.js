import * as React from "react";
const SvgIconBullet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <circle
      cx={12}
      cy={12}
      r={9.25}
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgIconBullet;
