import * as React from "react";
const SvgIconDevicePhoneLandscape = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <g fill="currentColor" clipPath="url(#icon-device-phone-landscape_svg__a)">
      <path d="M5.5 8.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1zm-1 6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2z" />
      <path d="M18.5 11.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
    </g>
    <defs>
      <clipPath id="icon-device-phone-landscape_svg__a">
        <path fill="#fff" d="M4.5 4h16v16h-16z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconDevicePhoneLandscape;
