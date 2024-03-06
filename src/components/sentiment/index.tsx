import InfoIcon from "@/icons/info-icon";
import NewsIcon from "@/icons/news-icon";

export default function SentimentSection() {
  return (
    <section className="bg-white border-[#DEE1E6] border shadow-sm rounded-lg p-4">
      <div>
        <h2 className="font-semibold text-2xl">Sentiment</h2>
      </div>
      <div className="space-y-4 mt-4">
        <KeyEvents />
        <AnalystEstimates />
      </div>
    </section>
  );
}

const KeyEvents = () => {
  return (
    <div>
      <div className="flex items-center">
        <h3 className="font-semibold text-lg mr-1.5">Key Events</h3>
        <InfoIcon />
      </div>
      <div className="mt-4 flex space-x-3.5">
        <article className="bg-[#E8F4FD] border border-[#E8F4FD] rounded-lg p-3">
          <div className="flex gap-x-4">
            <div className="rounded-full bg-[#0082FF] w-8 h-8 flex items-center justify-center p-2">
              <NewsIcon />
            </div>

            <div>
              <p className="text-sm font-medium">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className="text-xs mt-2 leading-[14px]">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
        </article>

        <article className="bg-[#EBF9F4] border border-[#E8F4FD] rounded-lg p-3">
          <div className="flex gap-x-4">
            <div className="rounded-full bg-[#0FBA83] w-8 h-8 flex items-center justify-center p-2">
              <NewsIcon />
            </div>

            <div>
              <p className="text-sm font-medium">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className="text-xs mt-2 leading-[14px]">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

const AnalystEstimates = () => {
  return (
    <div>
      <div className="flex items-center">
        <h3 className="font-semibold text-lg mr-1.5">Analyst Estimates</h3>
        <InfoIcon />
      </div>

      <div className="mt-6 flex items-center">
        <div className="bg-[#EBF9F4] text-[#0FBA83] flex items-center justify-center rounded-full w-[120px] h-[120px]">
          <span className="font-medium text-4xl">76</span>
          <span className="font-medium">%</span>
        </div>

        <div className="space-y-3 ml-3 w-full">
          <div className="flex items-center">
            <span className="text-sm text-[#7C7E8C] min-w-14">Buy</span>
            <div className="bg-[#00B386] h-2 rounded-sm" />
            <span className="text-sm text-[#7C7E8C] min-w-10 text-right">
              76%
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-[#7C7E8C] min-w-14">Hold</span>
            <div className="bg-[#C7C8CE] h-2 rounded-sm" />
            <span className="text-sm text-[#7C7E8C] min-w-10 text-right">
              8%
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-[#7C7E8C] min-w-14">Sell</span>
            <div className="bg-[#F7324C] h-2 rounded-sm" />
            <span className="text-sm text-[#7C7E8C] min-w-10 text-right">
              16%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
