import * as React from "react";
const SvgIconKnifeSpoon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 4.5v5.25a3.25 3.25 0 0 0 6.5 0V4.5M7 13v8m10-7.75V21m3.5-12.242C20.5 11.174 18.933 13 17 13s-3.5-1.826-3.5-4.242S15.067 4.25 17 4.25s3.5 2.091 3.5 4.508M7 4.5V10"
    />
  </svg>
);
export default SvgIconKnifeSpoon;
