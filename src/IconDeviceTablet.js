import * as React from "react";
const SvgIconDeviceTablet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <g fill="currentColor" clipPath="url(#icon-device-tablet_svg__a)">
      <path d="M16.5 5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm-8-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <path d="M12.5 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </g>
    <defs>
      <clipPath id="icon-device-tablet_svg__a">
        <path fill="#fff" d="M4.5 4h16v16h-16z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconDeviceTablet;
