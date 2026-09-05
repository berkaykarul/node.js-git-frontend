"use client";

import { useState } from "react";
import { topChains, topCities, topCuisines } from "@/lib/YemekYol-data";
import type { NeighborhoodTab } from "@/types/YemekYol";

const tabs: { id: NeighborhoodTab; label: string }[] = [
  { id: "cities", label: "Top Cities" },
  { id: "cuisines", label: "Top Cuisines" },
  { id: "chains", label: "Top Chains" },
];

const lists: Record<NeighborhoodTab, string[]> = {
  cities: topCities,
  cuisines: topCuisines,
  chains: topChains,
};

export function NeighborhoodTabs() {
  const [tab, setTab] = useState<NeighborhoodTab>("cities");
  const [expanded, setExpanded] = useState(false);
  const items = expanded ? lists[tab] : lists[tab].slice(0, 15);

  return (
    <section className="bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-[28px] font-bold text-[#191919] md:text-[32px]">
          Get more from your neighborhood
        </h2>
        <div role="tablist" className="mt-6 flex gap-6 border-b border-[#e0e0e0]">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => {
                setTab(item.id);
                setExpanded(false);
              }}
              className={
                tab === item.id
                  ? "border-b-2 border-[#191919] pb-3 text-[16px] font-bold text-[#191919]"
                  : "border-b-2 border-transparent pb-3 text-[16px] font-medium text-[#767676]"
              }
            >
              {item.label}
            </button>
          ))}
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-5">
          {items.map((item) => (
            <li key={item}>
              <button
                type="button"
                className="text-left text-[16px] text-[#191919] hover:underline"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-8 text-[16px] font-bold text-[#191919]"
        >
          {expanded ? "See less" : "See more"}
        </button>
      </div>
    </section>
  );
}
