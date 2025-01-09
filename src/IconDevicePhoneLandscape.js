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
      <path d="M3.75 7.625A1.25 1.25 0 0 1 5 6.375h15a1.25 1.25 0 0 1 1.25 1.25v7.5a1.25 1.25 0 0 1-1.25 1.25H5a1.25 1.25 0 0 1-1.25-1.25zm-1.25 7.5a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5v-7.5a2.5 2.5 0 0 0-2.5-2.5H5a2.5 2.5 0 0 0-2.5 2.5z" />
      <path d="M20 11.375a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0" />
    </g>
    <defs>
      <clipPath id="icon-device-phone-landscape_svg__a">
        <path fill="#fff" d="M2.5 2h20v20h-20z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconDevicePhoneLandscape;
