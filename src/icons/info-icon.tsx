import React from "react";

import { cn } from "@/utils/cn";

const InfoIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.04 1.66663C5.44 1.66663 1.70667 5.39996 1.70667 9.99996C1.70667 14.6 5.44 18.3333 10.04 18.3333C14.64 18.3333 18.3733 14.6 18.3733 9.99996C18.3733 5.39996 14.64 1.66663 10.04 1.66663ZM10.8733 14.1666H9.20667V9.16663H10.8733V14.1666ZM10.8733 7.49996H9.20667V5.83329H10.8733V7.49996Z"
        fill="#ABB9BF"
      />
    </svg>
  )
);

InfoIcon.displayName = "Info";
export default InfoIcon;
