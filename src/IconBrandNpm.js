import * as React from "react";
const SvgIconBrandNpm = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M2.313 8.766h19.375v6.83H12v1.138H7.694v-1.139H2.313zm1.076 5.692h2.153v-3.416H6.62v3.416h1.076V9.905H3.39v4.553ZM8.77 9.905v5.69h2.153v-1.137h2.154V9.905zm2.153 1.139H12v2.275h-1.077zm3.23-1.14v4.554h2.153v-3.416h1.077v3.416h1.076v-3.416h1.077v3.416h1.076V9.905z"
    />
  </svg>
);
export default SvgIconBrandNpm;
