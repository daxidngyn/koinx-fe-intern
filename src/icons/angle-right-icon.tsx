import React from "react";

import { cn } from "@/utils/cn";

const AngleRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.455999 2.32321L4.9508 6.74071L0.455999 11.1581C0.00419936 11.6021 0.00419936 12.3194 0.455999 12.7634C0.907799 13.2074 1.6377 13.2074 2.0895 12.7634L7.4068 7.53761C7.8586 7.09361 7.8586 6.37641 7.4068 5.93231L2.0895 0.70661C1.6377 0.26251 0.907799 0.26251 0.455999 0.70661C0.0157993 1.15061 0.00419936 1.87921 0.455999 2.32321Z"
        fill="#757779"
      />
    </svg>
  )
);

AngleRightIcon.displayName = "Angle Right";
export default AngleRightIcon;
