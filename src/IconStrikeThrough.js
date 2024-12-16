import * as React from "react";
const SvgIconStrikeThrough = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.578 6.861c-.25-1.205-1.3-4.111-5.576-4.111-4.111 0-5.653 2.673-5.653 4.625 0 3.038 2.806 3.83 5.653 4.59M5.969 17.14c.384 1.205 1.755 4.111 6.033 4.111 4.11 0 5.91-2.673 5.91-4.625 0-.752-.172-1.366-.474-1.876M2.75 12h18.5"
    />
  </svg>
);
export default SvgIconStrikeThrough;
