import * as React from "react";
const SvgIconBrandDigitalOcean = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <g
      fill="currentColor"
      fillRule="evenodd"
      clipPath="url(#icon-brand-digital-ocean_svg__a)"
      clipRule="evenodd"
    >
      <path d="M11.24 22.75v-3.581c3.791 0 6.734-3.76 5.278-7.749a5.35 5.35 0 0 0-3.194-3.194c-3.99-1.445-7.748 1.487-7.748 5.278H2.005c0-6.042 5.843-10.754 12.178-8.775 2.765.87 4.974 3.068 5.833 5.833 1.979 6.345-2.723 12.188-8.775 12.188Z" />
      <path d="M7.69 19.18h3.561v-3.56h-3.56v3.56Zm-2.743 2.743h2.744V19.18H4.947zM2.654 19.18h2.293v-2.294H2.654z" />
    </g>
    <defs>
      <clipPath id="icon-brand-digital-ocean_svg__a">
        <path fill="#fff" d="M2 2.75h20v20H2z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconBrandDigitalOcean;
