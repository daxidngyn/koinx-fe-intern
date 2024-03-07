"use client";

import { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { cn } from "@/utils/cn";

const periods = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

export default function SimplePriceChart({
  name,
  marketData,
}: {
  name: string;
  marketData: { x: number; y: number }[];
}) {
  const [selectedPeriod, setSelectedPeriod] = useState("7D");

  return (
    <div>
      <div className="mb-3 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="text-[#0B1426] font-semibold text-sm lg:text-base">
          {name} Price Chart (USD)
        </div>
        <div className="flex items-center gap-x-2 lg:gap-x-5 font-medium mt-2 lg:mt-0">
          {periods.map((period) => (
            <button
              key={period}
              type="button"
              className={cn(
                "rounded-full font-medium text-xs lg:text-[13px] relative z-0",
                selectedPeriod === period ? "text-[#0141CF]" : "text-[#5D667B]"
              )}
            >
              {period}
              <div
                className={cn(
                  "bg-[#E2ECFE] w-6 lg:w-8 lg:h-5 h-full top-1/2 left-1/2 -z-10 rounded-full -translate-x-1/2 -translate-y-1/2",
                  selectedPeriod === period ? "absolute" : "hidden"
                )}
              />
            </button>
          ))}
        </div>
      </div>

      <div
        style={{ width: "99%" }}
        className="h-80 relative flex-1 min-w-0 flex flex-col justify-center items-center"
      >
        <Chart name={name} marketData={marketData} />
      </div>
    </div>
  );
}

const Chart = ({
  name,
  marketData,
}: {
  name: string;
  marketData: { x: number; y: number }[];
}) => {
  if (!marketData) return null;

  const data = [
    {
      id: `${name} Price Chart (USD)`,
      data: [...marketData],
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      colors="#0052FE"
      margin={{ top: 15, right: 15, bottom: 25, left: 42 }}
      xScale={{ type: "time" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickValues: 6,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        truncateTickAt: 0,
        format: "%d %b",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        truncateTickAt: 0,
      }}
      enableGridX={false}
      enablePoints={false}
      enableTouchCrosshair={true}
      useMesh={true}
      tooltip={({ point }) => {
        const { x: date, y: price } = point.data;

        return (
          <div className="rounded bg-white px-2.5 py-1 shadow-md ring-1 ring-gray-200">
            <div className="flex flex-col">
              <span className="text-xs font-semibold">
                ${parseFloat(price.toString()).toFixed(2)}
              </span>
              <span className="text-xs font-medium">
                {new Date(date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </span>
            </div>
          </div>
        );
      }}
    />
  );
};
