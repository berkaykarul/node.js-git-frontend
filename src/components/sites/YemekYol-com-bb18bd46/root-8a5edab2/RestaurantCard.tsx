import Image from "next/image";
import type { Restaurant } from "@/types/YemekYol";
import { StarIcon } from "@/components/sites/YemekYol-com-bb18bd46/shared/icons";

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <article className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          width={640}
          height={360}
          className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        {restaurant.dashpass ? (
          <span className="absolute left-3 top-3 rounded-full bg-white px-2 py-1 text-[11px] font-bold text-[#191919]">
            DashPass
          </span>
        ) : null}
        {restaurant.promo ? (
          <span className="absolute bottom-3 left-3 rounded-md bg-[#eb1700] px-2 py-1 text-[12px] font-bold text-white">
            {restaurant.promo}
          </span>
        ) : null}
      </div>
      <div className="mt-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[16px] font-bold text-[#191919]">{restaurant.name}</h3>
          <span className="flex shrink-0 items-center gap-1 text-[13px] font-semibold text-[#191919]">
            <StarIcon className="size-3.5" />
            {restaurant.rating.toFixed(1)}
            <span className="font-normal text-[#767676]">{restaurant.ratingsCount}</span>
          </span>
        </div>
        <p className="mt-1 text-[13px] text-[#767676]">{restaurant.cuisine}</p>
        <p className="mt-1 text-[13px] text-[#494949]">
          {restaurant.eta} • {restaurant.distance} • {restaurant.fee}
        </p>
      </div>
    </article>
  );
}
