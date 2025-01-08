import * as React from "react";
const SvgIconFingerPrint = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.735 19.805q.285-.685.523-1.394m7.666 3.09a29.7 29.7 0 0 0 1.222-4.58m4.043.832c.376-2.026.573-4.115.573-6.25A8.253 8.253 0 0 0 8.898 4.08M3.762 15.655c.323-1.332.494-2.722.494-4.152a8.2 8.2 0 0 1 1.547-4.811m6.706 4.81a25.8 25.8 0 0 1-2.048 10.09m-2.378-6.478c.197-1.175.3-2.381.3-3.611a4.126 4.126 0 0 1 8.252 0q0 .954-.059 1.894"
    />
  </svg>
);
export default SvgIconFingerPrint;
