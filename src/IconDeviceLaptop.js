import * as React from "react";
const SvgIconDeviceLaptop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <g clipPath="url(#icon-device-laptop_svg__a)">
      <path
        fill="currentColor"
        d="M19.375 5.75a.625.625 0 0 1 .625.625v9.375H5V6.375a.625.625 0 0 1 .625-.625zM5.625 4.5A1.875 1.875 0 0 0 3.75 6.375V17h17.5V6.375A1.875 1.875 0 0 0 19.375 4.5zM2.5 17.625h20a1.875 1.875 0 0 1-1.875 1.875H4.375A1.875 1.875 0 0 1 2.5 17.625"
      />
    </g>
    <defs>
      <clipPath id="icon-device-laptop_svg__a">
        <path fill="#fff" d="M2.5 2h20v20h-20z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconDeviceLaptop;
