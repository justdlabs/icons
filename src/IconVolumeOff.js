import * as React from "react";
const SvgIconVolumeOff = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="m6.246 7.592-.404-.631zM12.25 3.75H13a.75.75 0 0 0-1.154-.632zm0 16.5-.404.632A.75.75 0 0 0 13 20.25zm-6.004-3.842.405-.632zM22.03 10.53a.75.75 0 1 0-1.06-1.06zm-5.303 3.182a.75.75 0 0 0 1.06 1.061zm1.06-4.242a.75.75 0 0 0-1.06 1.06zm3.183 5.303a.75.75 0 1 0 1.06-1.06zM2.75 8.5h2.957V7H2.75zm3.9-.276 6.004-3.842-.808-1.264-6.004 3.843.809 1.263ZM11.5 3.75v16.5H13V3.75zm1.154 15.868-6.003-3.842-.809 1.263 6.004 3.843zM5.707 15.5H2.75V17h2.957zM2.5 15.25v-6.5H1v6.5zm4.15.526a1.75 1.75 0 0 0-.943-.276V17a.25.25 0 0 1 .135.04l.809-1.264ZM5.708 8.5c.335 0 .662-.096.944-.276l-.809-1.263A.25.25 0 0 1 5.707 7v1.5Zm-2.957 7a.25.25 0 0 1-.25-.25H1c0 .966.784 1.75 1.75 1.75zm0-8.5A1.75 1.75 0 0 0 1 8.75h1.5a.25.25 0 0 1 .25-.25zm18.22 2.47-2.122 2.121 1.061 1.06 2.121-2.12zm-2.122 2.121-2.121 2.121 1.06 1.061 2.122-2.121-1.06-1.061Zm-2.121-1.06 2.121 2.12 1.061-1.06-2.121-2.121-1.061 1.06Zm2.121 2.12 2.122 2.122 1.06-1.06-2.121-2.122-1.06 1.06Z"
    />
  </svg>
);
export default SvgIconVolumeOff;
