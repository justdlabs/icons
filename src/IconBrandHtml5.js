import * as React from "react";
const SvgIconBrandHtml5 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m3 2.75 1.602 17.969 7.187 2.031 7.227-2.031L20.617 2.75zm5.899 8.125h8.046l-.625 6.797-4.492 1.25-4.57-1.25-.273-3.477h2.187l.156 1.758 2.5.664 2.422-.664.274-2.852H6.868l-.587-6.68h11.055l-.195 2.188H8.703z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandHtml5;
