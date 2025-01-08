import * as React from "react";
const SvgIconBrandClerk = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 25 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <g clipPath="url(#icon-brand-clerk_svg__a)">
      <path d="M12.5 15.625a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25m5.63 4.275a.593.593 0 0 1-.073.915A9.95 9.95 0 0 1 12.5 22.5a9.95 9.95 0 0 1-5.558-1.686.593.593 0 0 1-.073-.915l2.284-2.284a.675.675 0 0 1 .786-.105 5.6 5.6 0 0 0 2.561.615 5.6 5.6 0 0 0 2.562-.616c.26-.133.58-.1.786.106l2.284 2.284Z" />
      <path
        fillOpacity={0.5}
        d="M18.058 4.186c.313.209.34.65.073.915l-2.283 2.284a.675.675 0 0 1-.787.106 5.625 5.625 0 0 0-7.57 7.57c.133.26.1.58-.106.787L5.1 18.13a.593.593 0 0 1-.915-.073A9.95 9.95 0 0 1 2.5 12.5c0-5.523 4.477-10 10-10a9.95 9.95 0 0 1 5.558 1.686"
      />
    </g>
    <defs>
      <clipPath id="icon-brand-clerk_svg__a">
        <rect width={20} height={20} x={2.5} y={2.5} fill="#fff" rx={10} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconBrandClerk;
