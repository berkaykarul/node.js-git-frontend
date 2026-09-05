"use client";

import { YemekYolMark } from "@/components/sites/YemekYol-com-bb18bd46/shared/icons";

type PromoBannerProps = {
  onSeeAll: () => void;
};

export function PromoBanner({ onSeeAll }: PromoBannerProps) {
  return (
    <div className="border-b border-[#eeeeee] bg-white">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-3">
        <div className="flex items-center gap-3 text-[14px] text-[#191919]">
          <YemekYolMark className="h-4 w-7 text-[#eb1700]" />
          Enjoy $0 delivery fee on your first order.
        </div>
        <button
          type="button"
          onClick={onSeeAll}
          className="text-[14px] font-bold text-[#191919] underline-offset-2 hover:underline"
        >
          See all
        </button>
      </div>
    </div>
  );
}
