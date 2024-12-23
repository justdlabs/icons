import * as React from "react";
const SvgIconHandPointerFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M11.188 9.873h4.797c2.356 0 4.265 1.963 4.265 4.384v.635c0 4.34-3.423 7.858-7.645 7.858-2.839 0-5.444-1.616-6.766-4.198l-3.033-5.924a.51.51 0 0 1 .05-.544l.602-.773a2.093 2.093 0 0 1 2.997-.342l1 .822V4.668c0-1.06.836-1.918 1.867-1.918 1.03 0 1.866.859 1.866 1.918z"
    />
  </svg>
);
export default SvgIconHandPointerFill;
