import * as React from "react";
const SvgIconAtomFill = (props) => (
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
      d="M18.386 12c2.311-3.245 3.49-6.598 1.851-8.237s-4.992-.46-8.237 1.85c-3.245-2.31-6.598-3.489-8.237-1.85S3.303 8.755 5.613 12c-2.31 3.245-3.489 6.598-1.85 8.237.528.528 1.233.763 2.054.763 1.732 0 3.983-1.047 6.188-2.614C14.2 19.953 16.45 21 18.188 21c.82 0 1.527-.236 2.054-.763 1.634-1.639.455-4.992-1.856-8.237m.79-7.177c.717.717.233 3.038-1.736 5.933a28 28 0 0 0-1.986-2.21 28 28 0 0 0-2.21-1.984c2.895-1.968 5.216-2.455 5.933-1.739Zm-14.352 0c.206-.207.546-.314.995-.314 1.108 0 2.877.647 4.936 2.053a29 29 0 0 0-2.209 1.984 28 28 0 0 0-1.983 2.21c-1.97-2.895-2.456-5.216-1.74-5.933Zm0 14.353c-.717-.716-.23-3.037 1.739-5.932a28 28 0 0 0 4.193 4.193c-2.895 1.97-5.216 2.456-5.932 1.74ZM12 13.125a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m7.177 6.052c-.717.718-3.038.233-5.933-1.736a29 29 0 0 0 2.21-1.986q1.05-1.054 1.984-2.211c1.968 2.895 2.455 5.216 1.739 5.932z"
    />
  </svg>
);
export default SvgIconAtomFill;
