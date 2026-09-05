"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  LocateFixed,
  MapPin,
  Navigation,
  Search,
} from "lucide-react";

type DirectoryTab = "Top Cities" | "Top Cuisines" | "Top Chains";

type Feature = {
  eyebrow?: string;
  title: string;
  description: string;
  action: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  disclaimer?: string;
};

const imageRoot = "/sites/yemekyol-com-bb18bd46/root-8a5edab2/images";

const partnerCards = [
  {
    icon: <Navigation aria-hidden="true" className="h-16 w-16 stroke-[1.4]" />,
    title: "Become a Dasher",
    description:
      "As a delivery driver, make money and work on your schedule. Sign up in minutes.",
    action: "Start earning",
  },
  {
    icon: <MapPin aria-hidden="true" className="h-16 w-16 stroke-[1.4]" />,
    title: "Become a Merchant",
    description:
      "Attract new customers and grow sales, starting with 0% commissions for up to 30 days.",
    action: "Sign up for YemekYol",
  },
  {
    icon: <Search aria-hidden="true" className="h-16 w-16 stroke-[1.4]" />,
    title: "Get the best YemekYol experience",
    description:
      "Experience the best your neighborhood has to offer, all in one app.",
    action: "Get the app",
  },
];

const features: Feature[] = [
  {
    eyebrow: "Your favorite local restaurants",
    title: "Everything you crave, delivered.",
    description:
      "Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.",
    action: "Find restaurants",
    image: `${imageRoot}/restaurants.jpg`,
    imageAlt: "Everything you crave, delivered.",
  },
  {
    title: "DashPass is delivery for less",
    description:
      "Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days.",
    action: "Get DashPass",
    image: `${imageRoot}/hero.jpg`,
    imageAlt: "DashPass is delivery for less",
    reverse: true,
  },
  {
    eyebrow: "Grocery delivery, exactly how you want it.",
    title: "Get grocery and convenience store essentials",
    description:
      "Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more.",
    action: "Shop Groceries",
    image: `${imageRoot}/grocery.jpg`,
    imageAlt: "Get grocery and convenience store essentials",
  },
  {
    title: "Convenience stores at your doorstep",
    description:
      "Stock up on snacks, household essentials, candy, or vitamins — all delivered in under an hour.",
    action: "Shop Now",
    image: `${imageRoot}/grocery.jpg`,
    imageAlt: "Convenience stores at your doorstep",
    reverse: true,
  },
  {
    eyebrow: "Helping you with to-dos and gifting",
    title: "Beauty essentials from top brands",
    description:
      "Get all your beauty and self-care needs delivered at home or on-the-go",
    action: "Shop beauty",
    image: `${imageRoot}/beauty.jpg`,
    imageAlt: "Beauty essentials from top brands",
  },
  {
    title: "Flowers for any occasion",
    description:
      "Shop hand-picked and thoughtfully-arranged blooms from florists near you.",
    action: "Send Flowers",
    image: `${imageRoot}/flowers.jpg`,
    imageAlt: "Flowers for any occasion",
    reverse: true,
  },
  {
    title: "Restock the minibar",
    description:
      "Hosting a get-together or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.*",
    disclaimer: "*Must be 21+. Enjoy responsibly.",
    action: "Shop Alcohol",
    image: `${imageRoot}/hero.jpg`,
    imageAlt: "Restock the minibar",
  },
  {
    title: "What your pets need, and want",
    description:
      "Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes.",
    action: "Get Pet Supplies",
    image: `${imageRoot}/pets.jpg`,
    imageAlt: "What your pets need, and want",
    reverse: true,
  },
  {
    eyebrow: "Unlocking opportunity for Dashers and businesses",
    title: "Sign up to dash and get paid",
    description:
      "Deliver with the #1 Food and Drink App in the U.S. As a delivery driver, you'll make money and work on your schedule. Sign up in minutes.",
    action: "Become a Dasher",
    image: `${imageRoot}/hero.jpg`,
    imageAlt: "Sign up to dash and get paid",
  },
  {
    title: "Grow your business with YemekYol",
    description:
      "Businesses large and small partner with YemekYol to reach new customers, increase order volume, and drive more sales.",
    action: "Become a Partner",
    image: `${imageRoot}/grocery.jpg`,
    imageAlt: "Grow your business with YemekYol",
    reverse: true,
  },
];

const directoryData: Record<DirectoryTab, string[]> = {
  "Top Cities": [
    "New York",
    "Los Angeles",
    "Toronto",
    "Chicago",
    "Houston",
    "Brooklyn",
    "San Diego",
    "Las Vegas",
    "San Francisco",
    "Seattle",
    "Atlanta",
    "Queens",
    "Vancouver, BC",
    "Miami",
    "San Antonio",
  ],
  "Top Cuisines": [
    "Pizza",
    "Chinese food",
    "Mexican food",
    "Sushi",
    "Indian food",
    "Thai food",
    "Burgers",
    "Breakfast",
    "Desserts",
    "Coffee",
    "Healthy food",
    "Wings",
    "Sandwiches",
    "Italian food",
    "Tacos",
  ],
  "Top Chains": [
    "McDonald's",
    "Starbucks",
    "Chipotle",
    "Subway",
    "Taco Bell",
    "Chick-fil-A",
    "Wendy's",
    "Dunkin'",
    "Panera Bread",
    "Five Guys",
    "Popeyes",
    "The Cheesecake Factory",
    "Shake Shack",
    "KFC",
    "Domino's",
  ],
};

const popularCategories = [
  "Alcohol Delivery",
  "Beauty Stores",
  "Catering Near Me",
  "DashMart Near Me",
  "Flower Delivery",
  "Grocery Delivery",
  "Medicine Delivery",
  "Pet Store Near Me",
  "Retail Stores Near Me",
  "Reserve a Table",
  "Convenience Stores",
  "Halloween",
];

const footerColumns = [
  {
    title: "Get to Know Us",
    links: [
      "About Us",
      "Careers",
      "Investors",
      "Company Blog",
      "Engineering Blog",
      "Merchant Blog",
      "Gift Cards",
      "Promotions",
      "Dasher Central",
      "LinkedIn",
      "Glassdoor",
      "Accessibility",
      "Newsroom",
    ],
  },
  {
    title: "Let Us Help You",
    links: ["Account Details", "Order History", "Help"],
  },
  {
    title: "Doing Business",
    links: [
      "Become a Dasher",
      "YemekYol Merchant",
      "Get Dashers for Deliveries",
      "Get YemekYol for Business",
    ],
  },
];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 99.5 56.5"
    >
      <path
        d="M16 8 29 28 16 48M42 8l13 20-13 20M68 8l13 20-13 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="10"
      />
    </svg>
  );
}

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex items-center gap-3 ${light ? "text-white" : "text-[#191919]"}`}>
      <BrandMark className="h-7 w-11" />
      <span className="font-heading text-[28px] font-black uppercase tracking-[0.12em] leading-none">
        YemekYol
      </span>
    </span>
  );
}

function ArrowLink({ children }: { children: string }) {
  return (
    <a
      className="group inline-flex items-center gap-1 text-base font-bold text-[#eb1700] transition-opacity hover:opacity-75"
      href="#feed"
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function HeroSection() {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  function submitAddress(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(address.trim() ? "Address ready — let's find your favorites." : "Enter an address to find restaurants.");
  }

  function useLocation() {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setAddress("Current location");
          setStatus("");
        },
        () => setStatus("Location access was not available."),
      );
      return;
    }
    setStatus("Location access was not available.");
  }

  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-[#eb1700]">
      <Image
        alt=""
        aria-hidden="true"
        className="object-cover object-center opacity-40 mix-blend-multiply"
        fill
        priority
        sizes="100vw"
        src={`${imageRoot}/hero.jpg`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(235,23,0,.3),rgba(235,23,0,.85))]" />
      <header className="relative z-10 mx-auto flex max-w-[1200px] items-start justify-end gap-2 px-6 pt-5">
        <a
          className="inline-flex h-10 items-center rounded-full px-4 text-base font-medium text-white transition-colors hover:bg-white/10"
          href="#footer"
        >
          Sign In
        </a>
        <a
          className="inline-flex h-10 items-center rounded-full bg-white px-4 text-base font-medium text-[#191919] transition-colors hover:bg-[#f3f3f3]"
          href="#footer"
        >
          Sign Up
        </a>
      </header>
      <div className="relative z-10 mx-auto flex max-w-[750px] flex-col items-center px-4 pb-16 pt-10 text-center text-white">
        <div className="mb-8">
          <Wordmark light />
        </div>
        <h1 className="font-heading text-[32px] font-black uppercase leading-none tracking-[-0.8px] md:text-[40px] md:leading-10">
          $0 Delivery Fee On First Order
        </h1>
        <p className="mt-2 text-xs font-medium text-white/90">Other fees apply</p>
        <form className="mt-8 w-full max-w-[560px]" onSubmit={submitAddress}>
          <div className="flex h-14 items-center rounded-full bg-white pl-4 pr-1.5 shadow-[0_2px_8px_rgba(25,25,25,0.2)]">
            <MapPin aria-hidden="true" className="mr-2 h-6 w-6 shrink-0 text-[#767676]" />
            <label className="sr-only" htmlFor="delivery-address">
              Enter delivery address
            </label>
            <input
              className="h-[22px] min-w-0 flex-1 bg-transparent text-left text-base font-medium leading-[22px] tracking-[-0.01px] text-[#191919] outline-none placeholder:text-[#767676]"
              id="delivery-address"
              onChange={(event) => setAddress(event.target.value)}
              placeholder="Enter delivery address"
              value={address}
            />
            <button
              aria-label="Find Restaurants"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eb1700] text-white transition-transform hover:scale-105 active:translate-y-px"
              type="submit"
            >
              <Search aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </form>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            className="inline-flex h-8 items-center gap-2 rounded-full bg-white px-3 text-sm font-medium text-[#191919] shadow-[0_2px_8px_rgba(25,25,25,0.2)] transition-colors hover:bg-[#f3f3f3]"
            href="#footer"
          >
            <MapPin aria-hidden="true" className="h-4 w-4" />
            Sign in for saved address
          </a>
          <button
            className="inline-flex h-8 items-center gap-2 rounded-full bg-white px-3 text-sm font-medium text-[#191919] shadow-[0_2px_8px_rgba(25,25,25,0.2)] transition-colors hover:bg-[#f3f3f3] active:translate-y-px"
            onClick={useLocation}
            type="button"
          >
            <LocateFixed aria-hidden="true" className="h-4 w-4" />
            Use current Location
          </button>
        </div>
        {status ? <p className="mt-4 text-sm font-medium text-white">{status}</p> : null}
      </div>
    </section>
  );
}

function PartnerBand() {
  return (
    <section className="bg-black px-6 py-16 text-white md:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-12 md:grid-cols-3">
        {partnerCards.map((card) => (
          <article className="flex flex-col items-center text-center" key={card.title}>
            <div className="flex h-[154px] w-[154px] items-center justify-center rounded-full border border-white/30 text-white">
              {card.icon}
            </div>
            <h2 className="mt-6 max-w-[300px] text-[22px] font-bold leading-[1.25] text-[#c6c6c6] md:text-[28px]">
              {card.title}
            </h2>
            <p className="mt-3 max-w-[280px] text-sm leading-5 text-[#9c9c9c]">{card.description}</p>
            <a className="mt-3 text-sm font-bold text-[#eb1700] transition-opacity hover:opacity-75" href="#footer">
              {card.action}
              <ArrowRight aria-hidden="true" className="ml-1 inline h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function OfferNotice() {
  return (
    <div className="border-b border-[#eeeeee] bg-white">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-3">
        <div className="flex items-center gap-3 text-sm text-[#191919]">
          <BrandMark className="h-4 w-7 text-[#eb1700]" />
          <span>Enjoy $0 delivery fee on your first order.</span>
        </div>
        <a className="shrink-0 text-sm font-bold text-[#191919] underline-offset-2 hover:underline" href="#feed">
          See all
        </a>
      </div>
    </div>
  );
}

function FeatureArticle({ feature }: { feature: Feature }) {
  return (
    <article className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10">
      <div className={feature.reverse ? "md:order-2" : "md:order-1"}>
        {feature.eyebrow ? <p className="mb-3 text-sm font-bold text-[#191919]">{feature.eyebrow}</p> : null}
        <h2 className="font-heading text-[32px] font-bold leading-[1.25] text-[#191919] md:text-[40px]">{feature.title}</h2>
        <p className="mt-4 max-w-[460px] text-base leading-6 text-[#494949]">{feature.description}</p>
        {feature.disclaimer ? <p className="mt-2 text-xs text-[#767676]">{feature.disclaimer}</p> : null}
        <div className="mt-5">
          <ArrowLink>{feature.action}</ArrowLink>
        </div>
      </div>
      <div className={feature.reverse ? "md:order-1" : "md:order-2"}>
        <Image
          alt={feature.imageAlt}
          className="aspect-[772/523] w-full rounded-[24px] object-cover"
          height={523}
          loading="lazy"
          sizes="(min-width: 768px) 50vw, 100vw"
          src={feature.image}
          width={772}
        />
      </div>
    </article>
  );
}

function NeighborhoodSection() {
  const [activeTab, setActiveTab] = useState<DirectoryTab>("Top Cities");
  const items = directoryData[activeTab];

  return (
    <section className="bg-white px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="font-heading text-[28px] font-bold text-[#191919] md:text-[32px]">Get more from your neighborhood</h2>
        <div aria-label="Neighborhood directories" className="mt-6 flex gap-6 overflow-x-auto border-b border-[#e0e0e0]" role="tablist">
          {(Object.keys(directoryData) as DirectoryTab[]).map((tab) => {
            const selected = tab === activeTab;
            return (
              <button
                aria-selected={selected}
                className={`shrink-0 border-b-2 pb-3 text-base ${selected ? "border-[#191919] font-bold text-[#191919]" : "border-transparent font-medium text-[#767676]"}`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                role="tab"
                type="button"
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-5">
          {items.map((item) => (
            <a className="text-left text-base text-[#191919] underline-offset-2 hover:underline" href="#feed" key={item}>
              {item}
            </a>
          ))}
        </div>
        <button className="mt-8 text-base font-bold text-[#191919] underline-offset-2 hover:underline" type="button">
          See more
        </button>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-white px-6 pb-16 pt-8 md:px-10" id="footer">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-xl font-bold text-[#191919]">Popular Categories</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {popularCategories.map((category) => (
            <a className="text-sm text-[#494949] underline-offset-2 hover:underline" href="#feed" key={category}>
              {category}
            </a>
          ))}
        </div>
        <div className="mt-12 grid gap-10 border-t border-[#e0e0e0] pt-10 md:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-bold text-[#191919]">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a className="text-sm text-[#494949] underline-offset-2 hover:underline" href="#footer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-[#e0e0e0] pt-8 text-xs text-[#767676] md:flex-row md:items-center md:justify-between">
          <a className="flex items-center gap-2 text-[#191919]" href="#top">
            <BrandMark className="h-5 w-8 text-[#eb1700]" />
            <span className="font-heading text-sm font-black uppercase tracking-[0.14em]">YemekYol</span>
          </a>
          <div className="flex flex-wrap gap-4">
            <a className="hover:underline" href="#terms">Terms of Service</a>
            <a className="hover:underline" href="#privacy">Privacy</a>
            <a className="hover:underline" href="#locations">Delivery Locations</a>
            <span>© 2026 YemekYol clone for demo use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function YemekYolHomepage() {
  return (
    <main className="bg-white" id="top">
      <HeroSection />
      <PartnerBand />
      <OfferNotice />
      <section aria-label="YemekYol services" className="bg-white">
        {features.map((feature) => <FeatureArticle feature={feature} key={feature.title} />)}
      </section>
      <NeighborhoodSection />
      <SiteFooter />
    </main>
  );
}
