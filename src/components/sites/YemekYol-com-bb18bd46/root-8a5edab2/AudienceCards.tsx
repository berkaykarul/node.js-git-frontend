import Image from "next/image";
import { audienceCards } from "@/lib/YemekYol-data";
import { ArrowRightIcon } from "@/components/sites/YemekYol-com-bb18bd46/shared/icons";

export function AudienceCards() {
  return (
    <section className="bg-black px-6 py-16 text-white md:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-12 md:grid-cols-3">
        {audienceCards.map((card) => (
          <article key={card.title} className="flex flex-col items-center text-center">
            <Image
              src={card.image}
              alt={card.imageAlt}
              width={154}
              height={154}
              className="h-[154px] w-[154px] object-contain"
            />
            <h2 className="mt-6 text-[22px] font-bold leading-tight text-[#c6c6c6] md:text-[28px]">
              {card.title}
            </h2>
            <p className="mt-3 max-w-[280px] text-[14px] leading-5 text-[#9c9c9c]">{card.body}</p>
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-1 text-[14px] font-bold text-[#eb1700]"
            >
              {card.action}
              <ArrowRightIcon className="size-4" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
