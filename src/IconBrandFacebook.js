import * as React from "react";
const SvgIconBrandFacebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M9.584 21.706v-6.65H7.52V12h2.064v-1.317c0-3.404 1.54-4.98 4.88-4.98.632 0 1.724.124 2.172.248V8.72a13 13 0 0 0-1.156-.036c-1.64 0-2.272.62-2.272 2.236V12h3.268l-.56 3.056h-2.704v6.872C18.164 21.328 22 17.112 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.69 3.228 8.625 7.584 9.706"
    />
  </svg>
);
export default SvgIconBrandFacebook;
