import React from "react";

import { cn } from "@/utils/cn";

const ChartUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2308 1.12378H23V7.89301"
        stroke="white"
        stroke-width="1.69231"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23 1.12378L13.4385 10.6853C13.2803 10.8404 13.0676 10.9272 12.8462 10.9272C12.6247 10.9272 12.412 10.8404 12.2538 10.6853L8.36154 6.79301C8.20337 6.63797 7.99071 6.55113 7.76923 6.55113C7.54775 6.55113 7.33509 6.63797 7.17692 6.79301L1 12.9699"
        stroke="white"
        stroke-width="1.69231"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
);

ChartUpIcon.displayName = "Chart up";
export default ChartUpIcon;
