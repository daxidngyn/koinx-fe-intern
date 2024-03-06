import ArrowRightIcon from "@/icons/arrow-right-icon";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white border-[#DEE1E6] border shadow-sm rounded-lg p-4 lg:p-6">
      <h2 className="text-2xl font-semibold text-[#0F1629]">About Bitcoin</h2>

      <div className="mt-4">
        <div className="lg:border-b border-[#C9CFDD99] pb-2.5 lg:pb-4">
          <h3 className="font-bold text-lg text-[#0B1426] leading-[26px]">
            What is Bitcoin?
          </h3>
          <p className="leading-[26px] lg:mt-2.5 text-[#3E424A]">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className="mt-2.5 lg:mt-4 lg:border-b border-[#C9CFDD99] lg:pb-4">
          <h3 className="font-bold text-lg text-[#0B1426] leading-[26px]">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="leading-[26px] mt-2.5 text-[#3E424A]">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus.
          </p>
          <br />
          <p className="leading-[26px] text-[#3E424A]">
            Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam
            scelerisque fermentum sapien morbi sodales odio sed rhoncus. Diam
            praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
            vitae pellentesque auctor amet. Nunc sagittis libero adipiscing
            cursus felis pellentesque interdum. Odio cursus phasellus velit in
            senectus enim dui. Turpis tristique placerat interdum sed volutpat.
            Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam
            mi nunc praesent massa turpis a. Integer dignissim augue viverra
            nulla et quis lobortis phasellus. Integer pellentesque enim
            convallis ultricies at.
          </p>
          <br />
          <p className="leading-[26px] text-[#3E424A]">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-bold lg:font-semibold text-lg lg:text-2xl text-[#0B1426] leading-[26px]">
          Already Holding Bitcoin?
        </h3>

        <div className="mt-3.5 flex flex-col lg:flex-row lg:gap-x-8 space-y-3.5 lg:space-y-0">
          <article className="bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-md flex p-[11px] items-center">
            <Image
              src="/profits.png"
              alt="Calculate your profits"
              width={120}
              height={120}
            />
            <div className="ml-6">
              <div className="font-bold text-lg leading-[26px] text-white mr-2.5">
                Calculate your Profits
              </div>
              <button className="bg-white text-black px-3 py-0.5 rounded-lg flex items-center mt-3.5">
                <span className="text-[#0F1629] mr-2.5">Check now</span>
                <ArrowRightIcon />
              </button>
            </div>
          </article>

          <article className="bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-md flex p-[11px] items-center">
            <Image
              src="/profits.png"
              alt="Calculate your profits"
              width={120}
              height={120}
            />
            <div className="ml-6">
              <div className="font-bold text-lg leading-[26px] text-white">
                Calculate your tax liability
              </div>
              <button className="bg-white text-black px-3 py-0.5 rounded-lg flex items-center mt-3.5">
                <span className="text-[#0F1629] mr-2.5">Check now</span>
                <ArrowRightIcon />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
