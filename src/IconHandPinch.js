import * as React from "react";
const SvgIconHandPinch = (props) => (
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
      d="M2.263 8.367c-.684 1.778-.684 3.378 0 5.156m13.832-6.919-4.461 2.678-2.06-3.71c-.57-1.025-1.83-1.376-2.816-.785-.985.592-1.323 1.902-.754 2.927l3.09 5.566-1.223-.194c-1.125-.178-2.176.626-2.347 1.796l-.186 1.272 5.582 3.662a7.15 7.15 0 0 0 7.635.155c3.533-2.121 4.744-6.82 2.704-10.493l-.942-1.697c-.854-1.537-2.744-2.064-4.222-1.177"
    />
  </svg>
);
export default SvgIconHandPinch;
