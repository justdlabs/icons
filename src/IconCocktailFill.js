import * as React from "react";
const SvgIconCocktailFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M3.74 3C2.107 3 1.364 5.037 2.612 6.088l8.638 7.276V20.5h-3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-3.5v-7.136l8.638-7.276C22.636 5.037 21.893 3 20.26 3z"
    />
  </svg>
);
export default SvgIconCocktailFill;
