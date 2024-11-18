import * as React from "react";
const SvgIconBrandWindows = (props) => (
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
      d="m2 5.582 8.148-1.11.004 7.86-8.145.046zm8.144 7.655.007 7.867-8.145-1.12v-6.8zm.988-8.91L21.936 2.75v9.482l-10.804.085zM21.94 13.31l-.003 9.439-10.804-1.525-.015-7.932z"
    />
  </svg>
);
export default SvgIconBrandWindows;
