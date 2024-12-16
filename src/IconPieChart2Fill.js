import * as React from "react";
const SvgIconPieChart2Fill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path fill="currentColor" d="M14 2.75a8 8 0 0 1 8 8h-8z" />
    <path
      fill="currentColor"
      d="M20 13.75a9 9 0 1 1-8-8.945v7.945h7.945q.055.492.055 1"
    />
  </svg>
);
export default SvgIconPieChart2Fill;
