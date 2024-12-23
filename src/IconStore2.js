import * as React from "react";
const SvgIconStore2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 10.75V20a1 1 0 0 0 1 1h14.5a1 1 0 0 0 1-1v-9.25"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.618 4.5H9.5l-.299 4.483a2.829 2.829 0 1 0 5.648.044zM9.5 4.5H4.626a1 1 0 0 0-.992.868l-.431 3.236A3.007 3.007 0 0 0 6.186 12a3.007 3.007 0 0 0 3-2.8z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.306 4.5h-4.688l.238 4.681a2.97 2.97 0 1 0 5.907-.573l-.467-3.25a1 1 0 0 0-.99-.858"
    />
  </svg>
);
export default SvgIconStore2;
