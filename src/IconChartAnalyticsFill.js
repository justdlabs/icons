import * as React from "react";
const SvgIconChartAnalyticsFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M3 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75V12h-4.298l-2.04-3.85a.75.75 0 0 0-1.34.03L9.96 15.324 8.412 12.4a.75.75 0 0 0-.662-.4H3z"
    />
    <path
      fill="currentColor"
      d="M3 13.5V21c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 21v-7.5h-4.75a.75.75 0 0 1-.663-.4l-1.547-2.922-3.361 7.141a.75.75 0 0 1-1.342.032L7.298 13.5z"
    />
  </svg>
);
export default SvgIconChartAnalyticsFill;
