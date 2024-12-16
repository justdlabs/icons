import * as React from "react";
const SvgIconBrandOpera = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M22 12.762a10.05 10.05 0 0 1-3.334 7.472c-2.562 1.246-4.95.374-5.746-.174 2.513-.548 4.428-3.611 4.428-7.298s-1.915-6.75-4.428-7.297c.796-.548 3.184-1.42 5.746-.175A10.05 10.05 0 0 1 22 12.762"
    />
    <path
      fill="currentColor"
      d="M8.717 7.109C7.622 8.404 6.9 10.347 6.85 12.513v.474c.05 2.166.771 4.11 1.866 5.404 1.442 1.868 3.557 3.039 5.945 3.039a7.23 7.23 0 0 0 4.005-1.22A9.9 9.9 0 0 1 12 22.75h-.472C6.229 22.526 2 18.142 2 12.762 2 7.233 6.478 2.75 12 2.75h.05c2.537 0 4.85.971 6.616 2.54a7.23 7.23 0 0 0-4.004-1.22c-2.388 0-4.527 1.196-5.945 3.039"
    />
  </svg>
);
export default SvgIconBrandOpera;
