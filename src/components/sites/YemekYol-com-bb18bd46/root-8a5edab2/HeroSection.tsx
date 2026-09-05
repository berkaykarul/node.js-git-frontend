"use client";

import { YemekYolMark } from "@/components/sites/YemekYol-com-bb18bd46/shared/icons";
import { AddressSearch } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/AddressSearch";

type HeroSectionProps = {
  onSubmitAddress: (address: string) => void;
  onSignIn: () => void;
  onSignUp: () => void;
};

export function HeroSection({ onSubmitAddress, onSignIn, onSignUp }: HeroSectionProps) {
  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-[#eb1700]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/sites/YemekYol-com-bb18bd46/root-8a5edab2/images/hero-desktop.png')",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-[1200px] items-start justify-end px-6 pt-5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onSignIn}
            className="flex h-10 items-center rounded-full px-4 text-[16px] font-medium text-white"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={onSignUp}
            className="flex h-10 items-center rounded-full bg-white px-4 text-[16px] font-medium text-[#191919]"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-[750px] flex-col items-center px-4 pb-16 pt-10 text-center text-white">
        <div className="mb-8 flex items-center gap-3">
          <YemekYolMark className="h-7 w-[42px]" />
          <span className="font-heading text-[28px] font-black uppercase tracking-[0.12em]">
            YemekYol
          </span>
        </div>
        <h1 className="font-heading text-[32px] font-black uppercase leading-none tracking-[-0.8px] md:text-[40px] md:leading-[40px]">
          $0 Delivery Fee On First Order
        </h1>
        <p className="mt-2 text-[12px] font-medium text-white/90">Other fees apply</p>
        <div className="mt-8 w-full">
          <AddressSearch onSubmitAddress={onSubmitAddress} onSignIn={onSignIn} />
        </div>
      </div>
    </section>
  );
}
