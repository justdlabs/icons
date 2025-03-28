import * as React from "react";
const SvgIconBrandVisa = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 2a2.5 2.5 0 0 0-2.5 2.5v15A2.5 2.5 0 0 0 5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 20 2zm7.325 11.523 2.31-5.967h2.31l-3.723 8.889H10.85L9.181 9.27c-.08-.603-.214-.746-.374-.826C8.293 8.19 7.715 8 6.945 7.81l.064-.254h3.327c.449 0 .897.317 1.026.888z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandVisa;
