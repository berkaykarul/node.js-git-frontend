# YemekYol homepage behaviors

## Interaction model
- The hero is static layout with a submit-able delivery-address form.
- Header actions and CTAs are links/buttons with no supplied navigation handlers.
- Neighborhood tabs are click-driven; the selected tab uses a dark 2px underline. The available source content exposes Top Cities; the clone supplies equivalent content for the other tab states.
- City and footer links use underline-on-hover.
- No sticky header, scroll-triggered header state, carousel, or smooth-scroll library was observed.

## Responsive behavior
- Hero stays red with a cover image and a 650px minimum height; content remains centered.
- Partner cards are one column below 768px and three columns at 768px and above.
- Feature articles are one column below 768px and two columns at 768px and above. Every other desktop article reverses the image/text order.
- Neighborhood cities use two columns by default, three at 640px, and five at 768px.
- Footer category links use two columns by default, three at 640px, and four at 768px. Footer detail columns stack below 768px.

## Hover and active states
- Text links, city links, and the See all action underline on hover.
- Buttons use a short opacity/background transition and a 1px downward active translation.
- Active neighborhood tab has a dark 2px bottom border; inactive tabs have a transparent border.
- Hero form remains pill-shaped at all widths; utility buttons wrap on narrow screens.

## Asset limitation
The canonical page content is reachable at `https://www.yemekyol.com`, but the referenced `/sites/YemekYol-com-bb18bd46/root-8a5edab2/images/*` files return 404 in this environment. Local Pexels imagery is used as a documented visual fallback; brand marks remain inline text/SVG-like geometry rather than fabricated image assets.
