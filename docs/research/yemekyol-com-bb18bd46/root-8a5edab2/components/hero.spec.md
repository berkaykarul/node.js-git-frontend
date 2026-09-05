# HeroSection Specification

## Overview
- Target: `src/components/sites/yemekyol-com-bb18bd46/root-8a5edab2/HeroSection.tsx`
- Interaction: static hero plus submit-able address form and current-location action.

## Exact visual contract
- Section: relative, isolated, overflow hidden, min-height 650px, red `#eb1700`, full-cover background.
- Header action row: max-width 1200px, horizontal padding 24px, top padding 20px, right aligned, 8px gap.
- Hero content: max-width 750px, centered, padding `40px 16px 64px`, white text.
- Logo row: 42px × 28px mark, 12px gap, 32px bottom margin. Wordmark uses condensed 28px black uppercase with `.12em` letter spacing.
- H1: condensed black uppercase, 32px / 1 at mobile, 40px / 40px from 768px, letter-spacing `-.8px`.
- Disclaimer: 12px, medium, rgba(255,255,255,.9), 8px top margin.
- Address form: max-width 560px, height 56px, white full pill, `padding-left:16px`, `padding-right:6px`, `0 2px 8px rgba(25,25,25,.2)` shadow.
- Utility row: 16px top margin, centered/wrapping, 12px gap. Pills are 32px high, white, 12px horizontal padding, 14px medium text.

## Content
- `YemekYol`
- `$0 Delivery Fee On First Order`
- `Other fees apply`
- `Enter delivery address`
- `Sign in for saved address`
- `Use current Location`
- `Sign In`, `Sign Up`

## Responsive
At 768px the heading grows from 32px to 40px. Utility controls wrap below the form on narrow screens; all other alignment remains centered.
