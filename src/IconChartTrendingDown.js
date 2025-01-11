import * as React from "react";
const SvgIconChartTrendingDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#icon-chart-trending-down_svg__a)"
    >
      <path d="m3.5 7 6 6 4-4 8 8" />
      <path d="M21.5 10v7h-7" />
    </g>
    <defs>
      <clipPath id="icon-chart-trending-down_svg__a">
        <path fill="#fff" d="M.5 0h24v24H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconChartTrendingDown;
