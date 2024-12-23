import * as React from "react";
const SvgIconHeart = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5.572c6.333-6.44 17.19 5.52 0 15.178C-5.19 11.092 5.667-.868 12 5.572Z"
    />
  </svg>
);
export default SvgIconHeart;
