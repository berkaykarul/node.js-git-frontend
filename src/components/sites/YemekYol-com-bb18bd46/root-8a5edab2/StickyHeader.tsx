"use client";

import { YemekYolMark } from "@/components/sites/YemekYol-com-bb18bd46/shared/icons";

type StickyHeaderProps = {
  visible: boolean;
  onSignIn: () => void;
  onSignUp: () => void;
};

export function StickyHeader({ visible, onSignIn, onSignUp }: StickyHeaderProps) {
  if (!visible) return null;

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-12 bg-black">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <div className="flex items-center gap-2 text-white">
          <YemekYolMark className="h-5 w-8" />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onSignIn}
            className="flex h-8 items-center rounded-full px-3 text-[14px] font-medium text-white"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={onSignUp}
            className="flex h-8 items-center rounded-full bg-white px-3 text-[14px] font-medium text-[#191919]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
