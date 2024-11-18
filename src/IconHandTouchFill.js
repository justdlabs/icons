import * as React from "react";
const SvgIconHandTouchFill = (props) => (
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
      d="M13.25 9v2.75h3.288A3.46 3.46 0 0 1 20 15.211v1.77a5.77 5.77 0 0 1-5.77 5.769h-1.064a4.62 4.62 0 0 1-3.865-2.094L6.21 15.92a.75.75 0 0 1-.07-.684l.133-.34a2.31 2.31 0 0 1 3.116-1.254l.36.166V9a1.75 1.75 0 1 1 3.5 0Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.472 4.25C8.444 4.25 6 6.681 6 9.667q0 .463.076.902a.75.75 0 1 1-1.48.25A7 7 0 0 1 4.5 9.668c0-3.827 3.128-6.917 6.972-6.917 3.45 0 6.321 2.488 6.876 5.764a.75.75 0 0 1-1.48.25c-.432-2.557-2.68-4.514-5.396-4.514Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconHandTouchFill;
