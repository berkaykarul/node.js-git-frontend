"use client";

import Image from "next/image";
import { landingCtas } from "@/lib/YemekYol-data";
import { ArrowRightIcon } from "@/components/sites/YemekYol-com-bb18bd46/shared/icons";

type FeatureSplitsProps = {
  onFindRestaurants: () => void;
};

export function FeatureSplits({ onFindRestaurants }: FeatureSplitsProps) {
  return (
    <section className="bg-white">
      {landingCtas.map((cta) => (
        <article
          key={cta.title}
          className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10"
        >
          <div className={cta.imageFirst ? "md:order-2" : undefined}>
            {cta.eyebrow ? (
              <p className="mb-3 text-[14px] font-bold text-[#191919]">{cta.eyebrow}</p>
            ) : null}
            <h2 className="text-[32px] font-bold leading-tight text-[#191919] md:text-[40px]">
              {cta.title}
            </h2>
            <p className="mt-4 max-w-[460px] text-[16px] leading-6 text-[#494949]">{cta.body}</p>
            {cta.footnote ? (
              <p className="mt-2 text-[12px] text-[#767676]">{cta.footnote}</p>
            ) : null}
            <button
              type="button"
              onClick={cta.action === "Find restaurants" ? onFindRestaurants : undefined}
              className="mt-5 inline-flex items-center gap-1 text-[16px] font-bold text-[#eb1700]"
            >
              {cta.action}
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
          <div className={cta.imageFirst ? "md:order-1" : undefined}>
            <Image
              src={cta.image}
              alt={cta.imageAlt}
              width={772}
              height={523}
              className="h-auto w-full rounded-[24px] object-cover"
            />
          </div>
        </article>
      ))}
    </section>
  );
}
