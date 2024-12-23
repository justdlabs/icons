import * as React from "react";
const SvgIconTranslate = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 6.567h8.5M8 6.5v-2M12 15c-4.065-1.052-6.155-3.636-6.75-8.25"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 14.75c4.064-1.02 6.154-3.527 6.75-8m2 13.25L17 11.5l4.25 8.5m-6.906-2.125h5.312"
    />
  </svg>
);
export default SvgIconTranslate;
