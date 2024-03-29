import React from "react";

import { cn } from "@/utils/cn";

const MenuIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      width="21"
      height="15"
      viewBox="0 0 21 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.0119629 2.80613V0.521484H20.5738V2.80613H0.0119629ZM0.0119629 8.51805H20.5738V6.2334H0.0119629V8.51805ZM0.0119629 14.2299H20.5738V11.9452H0.0119629V14.2299Z"
        fill="#0B182F"
      />
    </svg>
  )
);

MenuIcon.displayName = "Menu";
export default MenuIcon;
