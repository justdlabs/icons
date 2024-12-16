import * as React from "react";
const SvgIconStore = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 12v8a1 1 0 0 0 1 1h14.5a1 1 0 0 0 1-1v-8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.369 9.59c0 1.399-1.09 2.41-2.434 2.41-1.617 0-2.784-1.611-2.34-3.23l.955-3.53a1 1 0 0 1 .965-.739h14.97a1 1 0 0 1 .965.739l.955 3.531c.444 1.619-.723 3.23-2.34 3.23-1.344 0-2.434-1.011-2.434-2.41m-9.262 0c0 1.33 1.037 2.41 2.315 2.41C10.964 12 12 10.92 12 9.59m-4.631 0v-.011m9.262.01c0 1.332-1.037 2.411-2.316 2.411S12 10.92 12 9.59m4.631 0v-.011M12 9.589v-.01"
    />
  </svg>
);
export default SvgIconStore;
