import * as React from "react";
const SvgIconBrandCss = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m3 2.75 1.602 17.969 7.187 2.031 7.227-2.031L20.617 2.75zm3.672 8.125h8.046l.235-2.265H6.477L6.28 6.422h11.055l-1.016 11.25-4.492 1.25-4.57-1.25-.274-2.344 4.844 1.29 2.422-.664.274-2.852H6.867z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandCss;
