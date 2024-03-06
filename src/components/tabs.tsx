"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";

const tabs = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentinals",
  "Team",
  "Technicals",
  "Tokenomics",
];

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState("Overview");

  return (
    <div className="flex items-center gap-x-8 my-5 overflow-x-scroll border-b border-[#D3E0E6]">
      {tabs.map((tab) => (
        <button
          type="button"
          onClick={() => setSelectedTab(tab)}
          key={tab}
          className={cn(
            "font-medium pt-3.5 pb-3 whitespace-nowrap border-b-[3px]",
            selectedTab === tab
              ? "text-[#0141CF] border-[#0052FE]"
              : "text-[#3E424A] border-[#EFF2F5]"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
