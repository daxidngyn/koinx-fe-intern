import React from "react";

import { cn } from "@/utils/cn";

const AnglesRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0658 5.77144L1.56577 5.77144"
        stroke="#0F1629"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.02426 0.751099L14.0659 5.7711L9.02426 10.7919"
        stroke="#0F1629"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
);

AnglesRightIcon.displayName = "Angles Right";
export default AnglesRightIcon;
