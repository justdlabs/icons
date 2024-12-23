import * as React from "react";
const SvgIconEyeClosed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 13.77c4.79 5.093 11.71 5.093 16.5 0M3.75 8.373c2.395-2.547 5.323-3.82 8.25-3.82s5.855 1.273 8.25 3.82M12 17.75V21m-3.75-3.75-1.5 2.482m8.75-2.482 1.75 2.482"
    />
  </svg>
);
export default SvgIconEyeClosed;
