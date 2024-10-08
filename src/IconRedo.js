import * as React from "react";
const SvgIconRedo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.25 3.25 3 3-3 3m2.25-3H9.75a6.25 6.25 0 1 0 0 12.5h8.5"
    />
  </svg>
);
export default SvgIconRedo;
