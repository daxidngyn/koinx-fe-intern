"use client";

import React, { useEffect, useState, useRef, memo } from "react";
import { cn } from "@/utils/cn";

const periods = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

export default function SimplePriceChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("7D");

  return (
    <div>
      <div className="mb-3 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="text-[#0B1426] font-semibold text-sm lg:text-base">
          Bitcoin Price Chart (USD)
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

      <TradingViewWidget />
    </div>
  );
}

const TradingViewWidget = memo(() => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
});

TradingViewWidget.displayName = "TradingView Widget";
