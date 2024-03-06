import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "@/icons/arrow-right-icon";

export default function GetStartedSection() {
  return (
    <div className="bg-[#0052FE] text-white rounded-2xl px-6 pt-6 pb-8 lg:px-12 lg:pt-10 lg:pb-12 flex flex-col items-center text-center">
      <Image
        src="get-started.svg"
        alt="Get Started"
        width={149}
        height={139}
        className="order-1 lg:order-2 lg:mt-10"
      />

      <div className="mt-2.5 lg:mt-0 flex flex-col items-center order-2 lg:order-1">
        <h2 className="font-bold text-[22px] lg:text-2xl leading-[40px] lg:max-w-72">
          Get Started with KoinX for FREE
        </h2>
        <p className="font-medium mt-5 text-sm leading-4 lg:leading-6 text-[#F2F2F2]">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
      </div>

      <Link
        href="#"
        className="order-3 bg-white text-black flex items-center rounded-lg mt-5 px-9 lg:px-6 py-3.5 w-fit"
      >
        <span className="font-semibold text-sm lg:text-base mr-3">
          Get started for FREE
        </span>
        <ArrowRightIcon />
      </Link>
    </div>
  );
}
