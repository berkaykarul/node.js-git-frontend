"use client";

import {
  Coffee,
  Cookie,
  CupSoda,
  Home,
  Leaf,
  PawPrint,
  Percent,
  Pizza,
  Salad,
  ShoppingBasket,
  Soup,
  Store,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import { storeCategories } from "@/lib/YemekYol-data";
import { cn } from "@/lib/utils";

const icons = {
  all: UtensilsCrossed,
  grocery: ShoppingBasket,
  convenience: Store,
  alcohol: Wine,
  pets: PawPrint,
  offers: Percent,
  pickup: Home,
  pizza: Pizza,
  sushi: Soup,
  burgers: UtensilsCrossed,
  mexican: CupSoda,
  asian: Soup,
  healthy: Salad,
  dessert: Cookie,
  coffee: Coffee,
};

type CategoryRailProps = {
  activeId: string;
  onChange: (id: string) => void;
};

export function CategoryRail({ activeId, onChange }: CategoryRailProps) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {storeCategories.map((category) => {
        const Icon = icons[category.id as keyof typeof icons] ?? Leaf;
        const active = category.id === activeId;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onChange(category.id)}
            className="flex min-w-[72px] flex-col items-center gap-2"
          >
            <span
              className={cn(
                "flex size-14 items-center justify-center rounded-full bg-[#f3f3f3] text-[#191919]",
                active && "bg-[#191919] text-white",
              )}
            >
              <Icon className="size-6" />
            </span>
            <span
              className={cn(
                "text-[12px] font-semibold text-[#767676]",
                active && "text-[#191919]",
              )}
            >
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
