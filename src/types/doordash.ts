export type NeighborhoodTab = "cities" | "cuisines" | "chains";

export type LandingCta = {
  title: string;
  eyebrow?: string;
  body: string;
  action: string;
  image: string;
  imageAlt: string;
  imageFirst?: boolean;
  footnote?: string;
};

export type AudienceCard = {
  title: string;
  body: string;
  action: string;
  image: string;
  imageAlt: string;
};

export type StoreCategory = {
  id: string;
  label: string;
};

export type Restaurant = {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  ratingsCount: string;
  eta: string;
  fee: string;
  distance: string;
  dashpass?: boolean;
  promo?: string;
  categoryIds: string[];
};
