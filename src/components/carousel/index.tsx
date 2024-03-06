import AngleRightIcon from "@/icons/angle-right-icon";

export default function Carousel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="overflow-x-auto relative">{children}</div>
      <button
        type="button"
        className="hidden z-10 lg:flex absolute w-8 h-8 left-0 -ml-1 top-1/2 bg-white rounded-full shadow-md -translate-x-1/2  -translate-y-1/2 items-center justify-center"
        style={{ boxShadow: "0px 0px 8px 0px #00000014" }}
      >
        <AngleRightIcon className="w-3 h-3 text-[#171717] rotate-180" />
      </button>
      <button
        type="button"
        className="hidden z-10 lg:flex absolute w-8 h-8 right-0 -mr-4 top-1/2 bg-white rounded-full shadow-md -translate-y-1/2 items-center justify-center"
        style={{ boxShadow: "0px 0px 8px 0px #00000014" }}
      >
        <AngleRightIcon className="w-3 h-3 text-[#171717]" />
      </button>
    </div>
  );
}
