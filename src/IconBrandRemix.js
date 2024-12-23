import * as React from "react";
const SvgIconBrandRemix = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <g fill="currentColor" clipPath="url(#icon-brand-remix_svg__a)">
      <path
        fillRule="evenodd"
        d="M18.953 17.631c.163 2.08.163 3.055.163 4.119h-4.812c0-.232.004-.444.008-.659.013-.668.027-1.365-.082-2.773-.143-2.06-1.03-2.519-2.662-2.519H4V12.05h7.797c2.061 0 3.092-.627 3.092-2.287 0-1.46-1.03-2.344-3.092-2.344H4V3.75h8.656c4.666 0 6.985 2.204 6.985 5.724 0 2.633-1.632 4.35-3.836 4.637 1.86.372 2.948 1.43 3.148 3.52"
        clipRule="evenodd"
      />
      <path d="M4 21.75v-2.795h5.088c.85 0 1.034.63 1.034 1.006v1.79z" />
    </g>
    <defs>
      <clipPath id="icon-brand-remix_svg__a">
        <path fill="#fff" d="M4 3.75h15.641v18H4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconBrandRemix;
