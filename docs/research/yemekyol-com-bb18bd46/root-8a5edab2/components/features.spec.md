# FeatureArticle Specification

- Each article is max-width 1180px, grid aligned center, 40px gap, `64px 24px` padding, and two equal columns at 768px with `64px 40px` padding.
- Images are width 100%, auto height, cover object fit, 24px radius, and lazy loaded. The available source image references were unavailable, so local Pexels fallback images are stored in the page asset namespace.
- Optional eyebrow is 14px bold with 12px bottom margin. Heading is 32px mobile / 40px at 768px, bold, 1.25 line height, `#191919`. Description is 16px/24px, max-width 460px, `#494949`, 16px top margin. CTA is 16px bold red, 20px top margin, with a 16px arrow.
- Articles alternate image/text order on desktop; mobile always stacks image first followed by text.

## Stories
Restaurants, DashPass, Grocery, Convenience, Beauty, Flowers, Alcohol, Pet Supplies, Dasher Opportunities, and Business Partnerships use the extracted headings, descriptions, eyebrows, disclaimers, CTAs, and asset paths from the source page.
