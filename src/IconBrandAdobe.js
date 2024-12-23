import * as React from "react";
const SvgIconBrandAdobe = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 21"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M14.667 1.733H22v17.333zm-5.267 0H2v17.334zm2.6 6.4 4.733 10.933h-3.066l-1.4-3.467H8.8z"
    />
  </svg>
);
export default SvgIconBrandAdobe;
