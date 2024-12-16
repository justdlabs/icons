import * as React from "react";
const SvgIconBrandDigitalOcean = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.24 22.75v-3.581c3.791 0 6.734-3.76 5.278-7.749a5.35 5.35 0 0 0-3.194-3.194c-3.99-1.445-7.748 1.487-7.748 5.278H2.005c0-6.042 5.843-10.754 12.178-8.775 2.765.87 4.974 3.068 5.833 5.833 1.979 6.345-2.723 12.188-8.775 12.188Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.69 19.18h3.56v-3.56H7.692v3.56Zm-2.743 2.743H7.69v-2.744H4.948v2.744ZM2.654 19.18h2.293v-2.294H2.654z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandDigitalOcean;
