import AnglesRightIcon from "@/icons/angles-right-icon";

export default function Breadcrumbs({ currentCoin }: { currentCoin: string }) {
  return (
    <div>
      <div className="flex items-center py-5">
        <span className="mr-2.5 text-slate-600">Cryptocurrencies</span>

        <AnglesRightIcon className="w-3 h-3 mr-1.5" />

        <span className="font-medium text-slate-950">{currentCoin}</span>
      </div>
    </div>
  );
}
