import React from "react";

import { cn } from "@/utils/cn";

const CaretUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.5 0L11 8H0L5.5 0Z" fill={props.color} />
    </svg>
  )
);

CaretUpIcon.displayName = "Caret Up";
export default CaretUpIcon;
