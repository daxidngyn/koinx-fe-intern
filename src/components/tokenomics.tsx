"use client";

import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "crowdsaleInvestors",
    label: "Crowdsale Investors",
    value: 80,
    color: "#0082FF",
  },
  {
    id: "foundation",
    label: "Foundation",
    value: 20,
    color: "#FAA002",
  },
];

export default function TokenomicsSection() {
  return (
    <section className="bg-white border-[#DEE1E6] border shadow-sm rounded-lg lg:p-6 hidden xl:block">
      <h2 className="text-[#0F1629] font-semibold text-2xl">Tokenomics</h2>
      <div className="mt-6">
        <h3 className="font-semibold text-xl text-[#1D1D1D]">
          Initial Distribution
        </h3>

        <div
          className="h-48 relative flex my-4 items-center justify-center -translate-x-80"
          style={{ width: "99%" }}
        >
          <ResponsivePie
            data={data}
            margin={{ top: 10, bottom: 10 }}
            innerRadius={0.7}
            activeOuterRadiusOffset={8}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            enableArcLinkLabels={false}
            enableArcLabels={false}
            colors={["#0082FF", "#FAA002"]}
            legends={[
              {
                anchor: "right",
                direction: "column",
                justify: false,
                translateX: -200,
                translateY: 0,
                itemWidth: 100,
                itemHeight: 20,
                itemsSpacing: 0,
                symbolSize: 10,
                symbolShape: "circle",
                itemDirection: "left-to-right",
              },
            ]}
          />
        </div>

        <p className="font-medium text-[#3E424A] leading-[25px]">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </section>
  );
}
