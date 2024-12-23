import * as React from "react";
const SvgIconStores = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 15.75V20a1 1 0 0 0 1 1h8.5a1 1 0 0 0 1-1v-4.25"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.75 11.5.48 2.882a1.936 1.936 0 1 0 3.708-1.037l-.687-1.716a1 1 0 0 0-.928-.629H3.677a1 1 0 0 0-.929.629l-.686 1.716a1.936 1.936 0 1 0 3.708 1.037l.48-2.882"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.75 11.5.339 2.034a2.118 2.118 0 1 1-4.178 0L6.25 11.5m11.839-4.466A2.118 2.118 0 0 1 16 9.5m1.75 5.5h2.5a1 1 0 0 0 1-1V9.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.75 5 .48 2.882a1.936 1.936 0 1 0 3.708-1.037l-.687-1.716a1 1 0 0 0-.928-.629h-8.646a1 1 0 0 0-.928.629l-.687 1.716M13.917 7l.333-2"
    />
  </svg>
);
export default SvgIconStores;
