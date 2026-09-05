"use client";

import { useEffect, useState } from "react";
import { AuthModal } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/AuthModal";
import { AudienceCards } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/AudienceCards";
import { FeatureSplits } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/FeatureSplits";
import { HeroSection } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/HeroSection";
import { NeighborhoodTabs } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/NeighborhoodTabs";
import { PromoBanner } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/PromoBanner";
import { SiteFooter } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/SiteFooter";
import { StickyHeader } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/StickyHeader";
import { StoreFeed } from "@/components/sites/YemekYol-com-bb18bd46/root-8a5edab2/StoreFeed";

export function YemekYolHome() {
  const [address, setAddress] = useState("");
  const [authOpen, setAuthOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openFeed(nextAddress: string) {
    setAddress(nextAddress);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  if (address) {
    return (
      <>
        <StoreFeed
          address={address}
          onChangeAddress={setAddress}
          onSignIn={() => setAuthOpen(true)}
          onBack={() => setAddress("")}
        />
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <StickyHeader
        visible={scrolled}
        onSignIn={() => setAuthOpen(true)}
        onSignUp={() => setAuthOpen(true)}
      />
      <HeroSection
        onSubmitAddress={openFeed}
        onSignIn={() => setAuthOpen(true)}
        onSignUp={() => setAuthOpen(true)}
      />
      <AudienceCards />
      <PromoBanner onSeeAll={() => openFeed("1 Market St, San Francisco, CA 94105")} />
      <FeatureSplits
        onFindRestaurants={() => openFeed("1 Market St, San Francisco, CA 94105")}
      />
      <NeighborhoodTabs />
      <SiteFooter />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
