"use client";

import { useMemo, useState } from "react";
import { restaurants } from "@/lib/YemekYol-data";
import {
  CartIcon,
  YemekYolMark,
  MenuIcon,
  SearchIcon,
} from "@/components/sites/YemekYol-com-bb18bd46/shared/icons";
import { AddressSearch } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/AddressSearch";
import { CategoryRail } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/CategoryRail";
import { RestaurantCard } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/RestaurantCard";

type StoreFeedProps = {
  address: string;
  onChangeAddress: (address: string) => void;
  onSignIn: () => void;
  onBack: () => void;
};

export function StoreFeed({ address, onChangeAddress, onSignIn, onBack }: StoreFeedProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return restaurants.filter((restaurant) => {
      const matchesCategory =
        category === "all" || restaurant.categoryIds.includes(category);
      const haystack = `${restaurant.name} ${restaurant.cuisine}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="min-h-screen bg-white text-[#191919]">
      <header className="sticky top-0 z-30 border-b border-[#eeeeee] bg-white">
        <div className="mx-auto flex max-w-[1180px] items-center gap-4 px-4 py-3 md:px-8">
          <button
            type="button"
            aria-label="Open menu"
            onClick={onBack}
            className="flex size-10 items-center justify-center rounded-full hover:bg-[#f3f3f3]"
          >
            <MenuIcon className="size-6" />
          </button>
          <button type="button" onClick={onBack} className="hidden items-center gap-2 sm:flex">
            <YemekYolMark className="h-6 w-10 text-[#eb1700]" />
          </button>
          <AddressSearch
            variant="feed"
            value={address}
            onSubmitAddress={onChangeAddress}
            onSignIn={onSignIn}
          />
          <label className="hidden min-w-0 flex-[1.2] items-center gap-2 rounded-full bg-[#f3f3f3] px-4 py-2.5 md:flex">
            <SearchIcon className="size-5 text-[#767676]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search YemekYol"
              aria-label="Search YemekYol"
              className="min-w-0 flex-1 bg-transparent text-[14px] font-medium outline-none placeholder:text-[#767676]"
            />
          </label>
          <button
            type="button"
            onClick={onSignIn}
            className="hidden h-10 items-center rounded-full px-4 text-[14px] font-semibold md:flex"
          >
            Sign In
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="flex size-10 items-center justify-center rounded-full bg-[#f3f3f3]"
          >
            <CartIcon className="size-5" />
          </button>
        </div>
        <div className="px-4 pb-3 md:hidden">
          <label className="flex items-center gap-2 rounded-full bg-[#f3f3f3] px-4 py-2.5">
            <SearchIcon className="size-5 text-[#767676]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search YemekYol"
              aria-label="Search YemekYol"
              className="min-w-0 flex-1 bg-transparent text-[14px] font-medium outline-none"
            />
          </label>
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] px-4 py-6 md:px-8">
        <CategoryRail activeId={category} onChange={setCategory} />
        <div className="mt-8">
          <h1 className="text-[22px] font-bold">Restaurants near {address}</h1>
          <p className="mt-1 text-[14px] text-[#767676]">
            {filtered.length} {filtered.length === 1 ? "place" : "places"} delivering now
          </p>
        </div>
        {filtered.length === 0 ? (
          <p className="mt-10 text-[16px] text-[#767676]">No restaurants match that search.</p>
        ) : (
          <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
