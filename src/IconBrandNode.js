import * as React from "react";
const SvgIconBrandNode = (props) => (
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
      fillOpacity={0.95}
      d="M12.241 2.875a.96.96 0 0 0-.948 0L3.465 7.394A.93.93 0 0 0 3 8.212v9.055c0 .335.186.65.465.818l7.828 4.519a.96.96 0 0 0 .948 0l7.828-4.519a.93.93 0 0 0 .465-.818V8.212a.97.97 0 0 0-.465-.818z"
    />
  </svg>
);
export default SvgIconBrandNode;
