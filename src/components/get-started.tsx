import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/icons/arrow-right-icon";

export default function GetStartedSection() {
  return (
    <div className="bg-[#0052FE] text-white rounded-2xl p-6 flex flex-col items-center text-center">
      <Image src="get-started.svg" alt="Get Started" width={149} height={139} />

      <div className="mt-2.5 flex flex-col items-center">
        <h2 className="font-bold text-[22px] leading-[40px]">
          Get Started with KoinX for FREE
        </h2>
        <p className="font-medium mt-5 text-sm leading-4">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <Link
          href="#"
          className="bg-white text-black flex items-center rounded-lg mt-5 px-9 py-3.5 w-fit"
        >
          <span className="font-semibold text-sm mr-3.5">
            Get started for FREE
          </span>
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
