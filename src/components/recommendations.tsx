export default function Recommendations() {
  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg">You May Also Like</h3>
      <div className="mt-1">
        <div className="p-2.5 border-[#E3E3E3] border rounded-md">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full mr-1.5 bg-black"></div>
            <div className="text-[10px] text-[#202020]">BNB</div>
            <div className="bg-[#0AB27D0F] text-[#32BE88] text-[8px] p-[3px] rounded-sm">
              +0.52%
            </div>
          </div>

          <div className="font-medium text-xs mt-2.5">$319.34</div>
        </div>
      </div>
    </div>
  );
}
