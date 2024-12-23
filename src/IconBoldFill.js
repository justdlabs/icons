import * as React from "react";
const SvgIconBoldFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 5.438C5 4.123 6.05 3 7.417 3h5.5c2.885 0 5.166 2.382 5.166 5.25a5.3 5.3 0 0 1-1.148 3.3A5.28 5.28 0 0 1 19 15.75c0 2.867-2.282 5.25-5.167 5.25H7.417C6.05 21 5 19.877 5 18.562zm7.917 5.062c1.165 0 2.166-.975 2.166-2.25S14.082 6 12.917 6H8v4.5zM8 13.5h5.833c1.165 0 2.167.975 2.167 2.25S14.998 18 13.833 18H8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBoldFill;
