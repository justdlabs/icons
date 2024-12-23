import * as React from "react";
const SvgIconCommand = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`justd-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="m4.296 20.141.34-.668zm-.437-.437-.668.34zm16.282 0-.668-.34zm-.437.437-.34-.668zm.437-15.845-.668.34zm-.437-.437.34-.668zm-15.845.437-.668-.34zm.437-.437-.34-.668zM19.5 5.35v13.3H21V5.35zm-.85 14.15H5.35V21h13.3zM4.5 18.65V5.35H3v13.3zM5.35 4.5h13.3V3H5.35zm0 15c-.292 0-.467 0-.596-.011-.12-.01-.134-.025-.117-.016l-.681 1.336c.23.118.463.157.676.175.205.017.45.016.718.016zM3 18.65c0 .268 0 .514.016.718.018.213.057.446.175.677l1.336-.682c.009.017-.006.003-.016-.117a8 8 0 0 1-.011-.596zm1.636.823a.25.25 0 0 1-.109-.11l-1.336.681c.168.33.435.598.765.765zM19.5 18.65c0 .292 0 .467-.011.596-.01.12-.025.134-.016.117l1.336.681a1.8 1.8 0 0 0 .175-.676c.017-.204.016-.45.016-.718zM18.65 21c.268 0 .514 0 .718-.016a1.8 1.8 0 0 0 .677-.175l-.682-1.336c.017-.009.003.006-.117.016-.13.01-.304.011-.596.011zm.823-1.637a.25.25 0 0 1-.11.11l.681 1.336a1.75 1.75 0 0 0 .765-.765zM21 5.35c0-.268 0-.513-.016-.718a1.8 1.8 0 0 0-.175-.676l-1.336.68c-.009-.016.006-.002.016.118.01.13.011.304.011.596zm-2.35-.85c.292 0 .467 0 .596.011.12.01.134.025.117.016l.681-1.336a1.8 1.8 0 0 0-.676-.175C19.164 3 18.918 3 18.65 3zm2.16-.544a1.75 1.75 0 0 0-.765-.765l-.682 1.336a.25.25 0 0 1 .11.11l1.336-.681ZM4.5 5.35c0-.292 0-.467.011-.596.01-.12.025-.134.016-.117l-1.336-.681a1.8 1.8 0 0 0-.175.676C3 4.837 3 5.082 3 5.35zM5.35 3c-.268 0-.513 0-.718.016a1.8 1.8 0 0 0-.676.175l.68 1.336c-.016.009-.002-.006.118-.016.13-.01.304-.011.596-.011zm-.823 1.636a.25.25 0 0 1 .11-.109l-.681-1.336a1.75 1.75 0 0 0-.765.765zm6.254 5.395v-1.64h-1.5v1.64zm-2.39.75h1.64v-1.5h-1.64zm6.328-.75v-1.64h-1.5v1.64zm.89-.75h-1.64v1.5h1.64zm-5.578 1.5h3.938v-1.5H10.03v1.5Zm3.938 2.438H10.03v1.5h3.938zm-3.188.75V10.03h-1.5v3.938zm2.438-3.938v3.938h1.5V10.03h-1.5Zm1.5 5.578v-1.64h-1.5v1.64zm-3.938 0v-1.64h-1.5v1.64zm-.75-2.39h-1.64v1.5h1.64zm3.938 1.5h1.64v-1.5h-1.64zm-6.469.89a.89.89 0 0 1 .89-.89v-1.5A2.39 2.39 0 0 0 6 15.609zm10.5 0a2.39 2.39 0 0 0-2.39-2.39v1.5a.89.89 0 0 1 .89.89zm-4.781 0A2.39 2.39 0 0 0 15.609 18v-1.5a.89.89 0 0 1-.89-.89zM16.5 8.391a.89.89 0 0 1-.89.89v1.5A2.39 2.39 0 0 0 18 8.391zm-1.781 0a.89.89 0 0 1 .89-.891V6a2.39 2.39 0 0 0-2.39 2.39zM8.39 18a2.39 2.39 0 0 0 2.39-2.39h-1.5a.89.89 0 0 1-.89.89zM6 8.39a2.39 2.39 0 0 0 2.39 2.391v-1.5a.89.89 0 0 1-.89-.89zm2.39 8.11a.89.89 0 0 1-.89-.89H6A2.39 2.39 0 0 0 8.39 18zm0-10.5A2.39 2.39 0 0 0 6 8.39h1.5a.89.89 0 0 1 .89-.89zm7.22 1.5a.89.89 0 0 1 .89.89H18A2.39 2.39 0 0 0 15.61 6zm.89 8.11a.89.89 0 0 1-.89.89V18A2.39 2.39 0 0 0 18 15.61zm-5.719-7.22A2.39 2.39 0 0 0 8.391 6v1.5a.89.89 0 0 1 .89.89z"
    />
  </svg>
);
export default SvgIconCommand;
