import * as React from "react";
const SvgIconBrandLinear = (props) => (
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
      d="M2.245 15.055c-.044-.19.182-.31.32-.172l7.302 7.303c.138.138.018.364-.172.319a10.03 10.03 0 0 1-7.45-7.45M2 12.128a.2.2 0 0 0 .058.152L12.47 22.692a.2.2 0 0 0 .152.058q.711-.045 1.393-.185a.194.194 0 0 0 .095-.33L2.515 10.64a.194.194 0 0 0-.33.095q-.141.69-.185 1.393m.842-3.437a.2.2 0 0 0 .042.22l12.955 12.955a.2.2 0 0 0 .22.042 10 10 0 0 0 1.037-.537.197.197 0 0 0 .036-.308L3.687 7.617a.196.196 0 0 0-.308.037 10 10 0 0 0-.537 1.037m1.69-2.326a.197.197 0 0 1-.01-.271A9.99 9.99 0 0 1 11.99 2.75C17.518 2.75 22 7.231 22 12.76a9.99 9.99 0 0 1-3.344 7.467.197.197 0 0 1-.27-.009L4.531 6.365Z"
    />
  </svg>
);
export default SvgIconBrandLinear;
