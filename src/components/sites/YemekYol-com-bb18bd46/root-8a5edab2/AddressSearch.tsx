"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  LocateIcon,
  PinIcon,
  UserIcon,
} from "@/components/sites/YemekYol-com-bb18bd46/shared/icons";

type AddressSearchProps = {
  variant?: "hero" | "feed";
  value?: string;
  onSubmitAddress: (address: string) => void;
  onSignIn: () => void;
};

const suggestions = [
  "1 Market St, San Francisco, CA 94105",
  "101 California St, San Francisco, CA 94111",
  "Ferry Building, San Francisco, CA 94111",
];

export function AddressSearch({
  variant = "hero",
  value = "",
  onSubmitAddress,
  onSignIn,
}: AddressSearchProps) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  );

  function submit(next = query) {
    const address = next.trim() || "1 Market St, San Francisco, CA 94105";
    setQuery(address);
    setOpen(false);
    onSubmitAddress(address);
  }

  if (variant === "feed") {
    return (
      <form
        className="flex min-w-0 flex-1 items-center gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <label className="flex min-w-0 max-w-xl flex-1 items-center gap-2 rounded-full bg-[#f3f3f3] px-4 py-2.5">
          <PinIcon className="size-5 shrink-0 text-[#191919]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="min-w-0 flex-1 bg-transparent text-[14px] font-medium text-[#191919] outline-none"
            aria-label="Delivery address"
          />
        </label>
      </form>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <form
        className="flex h-14 items-center rounded-full bg-white pl-4 pr-1.5 shadow-[0_2px_8px_rgba(25,25,25,0.2)]"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <PinIcon className="mr-2 size-6 shrink-0 text-[#767676]" />
        <input
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Enter delivery address"
          aria-label="Enter delivery address"
          className="h-[22px] min-w-0 flex-1 text-[16px] font-medium leading-[22px] tracking-[-0.01px] text-[#191919] outline-none placeholder:text-[#767676]"
        />
        <button
          type="submit"
          aria-label="Find Restaurants"
          className="inline-flex size-10 items-center justify-center rounded-full bg-[#eb1700] text-white"
        >
          <ArrowRightIcon className="size-5" />
        </button>
      </form>
      {open && filtered.length > 0 ? (
        <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl bg-white py-2 shadow-[0_8px_24px_rgba(25,25,25,0.16)]">
          {filtered.map((item) => (
            <li key={item}>
              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] text-[#191919] hover:bg-[#f7f7f7]"
                onClick={() => submit(item)}
              >
                <PinIcon className="size-5 text-[#767676]" />
                {item}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={onSignIn}
          className="flex h-8 items-center gap-2 rounded-full bg-white px-3 text-[14px] font-medium text-[#191919] shadow-[0_2px_8px_rgba(25,25,25,0.2)]"
        >
          <UserIcon className="size-4" />
          Sign in for saved address
        </button>
        <button
          type="button"
          onClick={() => submit("Current location · San Francisco, CA")}
          className="flex h-8 items-center gap-2 rounded-full bg-white px-3 text-[14px] font-medium text-[#191919] shadow-[0_2px_8px_rgba(25,25,25,0.2)]"
        >
          <LocateIcon className="size-4" />
          Use current Location
        </button>
      </div>
    </div>
  );
}

