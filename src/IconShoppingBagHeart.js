import * as React from "react";
const SvgIconShoppingBagHeart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M12.25 22h-8l2-13.5h11.5l.63 4.25M15.25 8.5V6.75a3.25 3.25 0 0 0-6.5 0V8.5"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M21.253 18.418C21.253 20.75 18 22.03 18 22.03s-3.251-1.28-3.251-3.612c0-1.748 1.748-2.79 3.251-1.818 1.504-.971 3.252.07 3.252 1.818Z"
    />
  </svg>
);
export default SvgIconShoppingBagHeart;
