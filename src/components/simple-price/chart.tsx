"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";

const periods = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

export default function SimplePriceChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("7D");

  return (
    <div>
      <div>
        <div className="text-[#0B1426] font-semibold text-sm">
          Bitcoin Price Chart (USD)
        </div>
        <div className="flex items-center gap-x-2 font-medium text-xs mt-2">
          {periods.map((period) => (
            <div
              key={period}
              className={cn(
                "rounded-full",
                selectedPeriod === period
                  ? "bg-[#E2ECFE] text-[#0141CF]"
                  : "text-[#5D667B]"
              )}
            >
              {period}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
