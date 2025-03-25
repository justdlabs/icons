import * as React from "react";
const SvgIconEyeDropper = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="m18.85 10.375-4.726-4.726a.743.743 0 0 1 1.051-1.05l.525.525 2.364-2.363a2.598 2.598 0 1 1 3.675 3.675L19.376 8.8l.525.525a.742.742 0 1 1-1.05 1.05ZM7.75 20.426c-.46.46-1.608-.491-2.1 0L4.4 21.674a1.113 1.113 0 1 1-1.575-1.575l1.248-1.248c.492-.491-.46-1.64 0-2.1L14.116 6.71l3.675 3.675L7.749 20.426Zm8.992-10.041-2.625-2.626-8.992 8.992c-.46.46.46 1.64 0 2.1L3.35 20.623a.372.372 0 0 0 .525.525l1.773-1.773c.46-.46 1.64.46 2.1 0l8.992-8.99Z"
    />
  </svg>
);
export default SvgIconEyeDropper;
