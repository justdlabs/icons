import * as React from "react";
const SvgIconBrandHetzner = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M21.099 2.75h-2.753c-.616 0-.877.261-.877.878v6.951H6.53V3.628c0-.617-.26-.878-.877-.878H2.878c-.617 0-.878.261-.878.878v17.888c0 .617.261.878.878.878h2.776c.616 0 .877-.237.877-.878v-7.07h10.961v7.07c0 .617.261.878.878.878h2.752c.617 0 .878-.26.878-.878V3.628c-.024-.593-.285-.878-.901-.878"
    />
  </svg>
);
export default SvgIconBrandHetzner;
