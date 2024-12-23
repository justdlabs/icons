import * as React from "react";
const SvgIconBrandArc = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.45 2.9a2.2 2.2 0 0 1 1.968 1.216l3.635 7.27a7.2 7.2 0 0 0 1.58-3.372 2.2 2.2 0 1 1 4.333.772 11.62 11.62 0 0 1-3.841 6.745l1.442 2.885a2.2 2.2 0 0 1-3.935 1.967l-1.325-2.65c-1.188.409-2.462.63-3.788.63-1.37 0-2.685-.236-3.905-.671l-1.346 2.691a2.2 2.2 0 1 1-3.935-1.967l1.484-2.97a11.7 11.7 0 0 1-2.556-3.232 2.2 2.2 0 0 1 3.88-2.075q.326.61.758 1.143l3.583-7.166A2.2 2.2 0 0 1 11.45 2.9M9.606 13.708c.61.167 1.25.256 1.913.256a7.2 7.2 0 0 0 1.791-.224l-1.86-3.72z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandArc;
