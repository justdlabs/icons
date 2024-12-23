import * as React from "react";
const SvgIconBrandGoogle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M21.582 12.977q-.002-1.063-.182-2.045h-9.418v3.873h5.382a4.6 4.6 0 0 1-2.01 3.009v2.518H18.6c1.891-1.746 2.982-4.31 2.982-7.355"
    />
    <path
      fill="currentColor"
      d="M11.981 22.75c2.7 0 4.964-.89 6.618-2.418l-3.245-2.518c-.891.6-2.027.963-3.373.963-2.6 0-4.81-1.754-5.6-4.118H3.054v2.582c1.645 3.264 5.018 5.51 8.927 5.51Z"
    />
    <path
      fill="currentColor"
      d="M6.382 14.65a6 6 0 0 1-.318-1.9c0-.664.118-1.3.318-1.9V8.268H3.055a9.9 9.9 0 0 0-1.073 4.482c0 1.618.391 3.136 1.073 4.482l2.59-2.018z"
    />
    <path
      fill="currentColor"
      d="M11.981 6.732c1.473 0 2.782.509 3.827 1.49l2.864-2.863C16.936 3.741 14.68 2.75 11.98 2.75c-3.91 0-7.282 2.245-8.927 5.518L6.38 10.85c.79-2.364 3-4.118 5.6-4.118Z"
    />
  </svg>
);
export default SvgIconBrandGoogle;
