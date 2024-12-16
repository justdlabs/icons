import * as React from "react";
const SvgIconGearFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.154 2.78A1.75 1.75 0 0 1 11.61 2h.78a1.75 1.75 0 0 1 1.456.78l1.17 1.754a.25.25 0 0 0 .264.105l1.793-.414a1.75 1.75 0 0 1 1.63.468l.604.604a1.75 1.75 0 0 1 .468 1.63L19.36 8.72a.25.25 0 0 0 .105.264l1.755 1.17c.487.325.779.871.779 1.456v.78a1.75 1.75 0 0 1-.78 1.456l-1.754 1.17a.25.25 0 0 0-.105.264l.414 1.793a1.75 1.75 0 0 1-.468 1.63l-.604.604a1.75 1.75 0 0 1-1.63.468l-1.793-.414a.25.25 0 0 0-.264.105l-1.17 1.755A1.75 1.75 0 0 1 12.39 22h-.78a1.75 1.75 0 0 1-1.456-.78l-1.17-1.754a.25.25 0 0 0-.264-.105l-1.793.414a1.75 1.75 0 0 1-1.63-.468l-.604-.604a1.75 1.75 0 0 1-.468-1.63l.414-1.793a.25.25 0 0 0-.105-.264l-1.755-1.17A1.75 1.75 0 0 1 2 12.39v-.78c0-.585.292-1.131.78-1.456l1.754-1.17a.25.25 0 0 0 .105-.264l-.414-1.793a1.75 1.75 0 0 1 .468-1.63l.604-.604a1.75 1.75 0 0 1 1.63-.468l1.793.414a.25.25 0 0 0 .264-.105zM8.875 12a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconGearFill;
