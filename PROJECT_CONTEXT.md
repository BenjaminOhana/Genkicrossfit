# PROJECT CONTEXT — Genki CrossFit Website

> This file is the single source of truth for the entire project.
> It must be read and respected by any AI agent working on this codebase.
> Do not delete or modify this file without explicit instruction.

---

## 1. PROJECT OVERVIEW

**Client:** CrossFit Genki (Adrien Marquis, owner)
**Type:** One-page narrative website + 1 satellite page (HYROX)
**Goal:** Convert website visitors into free trial bookings via Peppy (booking platform)
**Primary CTA:** "Réserve ta séance d'essai gratuite" → links to Peppy booking page
**Target:** Go from 130 to 160-180 members by end of 2026
**Language:** French (France)
**Mobile-first:** 65%+ expected mobile traffic

---

## 2. BRAND IDENTITY

### Colors
| Token          | Hex       | Usage                                    |
|----------------|-----------|------------------------------------------|
| --color-black  | #0A0A0A   | Primary backgrounds, hero, strong sections |
| --color-wine   | #7A1F2E   | CTAs, buttons, accents, highlights        |
| --color-cream  | #F5F5F0   | Text on dark bg, breathing sections       |
| --color-gray   | #E8E8E8   | Alternate backgrounds, cards, separators  |

### Typography
- **Headings:** Bold condensed sans-serif (Bebas Neue, Oswald, or Barlow Condensed) — uppercase for impact
- **Body:** Clean sans-serif (Inter, DM Sans, or Outfit) — min 16px
- **CTA buttons:** Uppercase + letter-spacing (0.1em)

### Visual Direction
- Dark mode premium — like Apple meets CrossFit energy
- Real photography only — NO stock photos
- Authentic, energetic but not aggressive
- Subtle animations: scroll reveals, parallax on hero, smooth transitions
- Lots of negative space — breathe between sections

### Tone of Voice
- Energetic but never aggressive
- Reassuring for beginners (main target = sedentary people afraid of CrossFit)
- Authentic, not corporate
- Family spirit, warm
- "Tu" (informal French "you") — never "vous"
- Like a friendly coach welcoming you at the door

---

## 3. SITE STRUCTURE (One-Page Narrative + 1 Satellite)

### Main Page (index)
| #  | Section          | Purpose                                          |
|----|------------------|--------------------------------------------------|
| 1  | HERO             | Full viewport, video bg, headline, CTA, social proof badge |
| 2  | DEMYSTIFICATION  | Break myth "CrossFit is violent" — 3 columns      |
| 3  | THE BOX          | Immersive photo gallery of the 2 spaces (400m²)  |
| 4  | COACHES          | Team cards with photos, certs, personal quotes    |
| 5  | TESTIMONIALS     | Google reviews slider (5/5, 7 reviews)            |
| 6  | PRICING          | Transparent pricing cards with CTA per offer      |
| 7  | SCHEDULE         | Peppy embed (iframe/widget) for live booking      |
| 8  | FAQ              | Accordion — address remaining objections          |
| 9  | CONTACT          | 2-col: info + Google Map embed                    |
| 10 | CLOSING CTA      | Emotional final push + CTA button                 |

### Satellite Page: /hyrox
- Dedicated page for HYROX training program
- SEO target: "HYROX Metz", "HYROX Thionville", "HYROX Talange"
- Hero + explanation + what Genki offers + CTA

---

## 4. UX RULES

- **Single CTA everywhere:** "Réserve ta séance d'essai gratuite" → Peppy link
- **CTA appears:** In hero, after sections 2, 5, 6, 7, and in closing (section 10)
- **Sticky header:** Logo left + burger menu + CTA button (wine color) always visible
- **Navigation items (max 5):** Accueil · CrossFit · Planning · Tarifs · Contact
- **Scroll-based navigation:** Smooth scroll to anchors on main page
- **Performance:** Target < 2.5s load time. WebP images, lazy-loading, compressed video
- **Video hero:** Autoplay, muted, loop, with poster image fallback
- **Responsive breakpoints:** Mobile-first (375px) → Tablet (768px) → Desktop (1280px)
- **Button min height:** 48px (thumb zone compliance)

---

## 5. BUSINESS INFORMATION

- **Name:** CrossFit Genki
- **Tagline:** "La santé vient en bougeant"
- **Address:** Pôle d'activité de Talange Nord, 57525 Talange
- **Phone:** 06 89 08 26 85
- **Email:** contact.crossfitgenki@gmail.com
- **Booking:** Peppy (app.peppy.cool)
- **Instagram:** @crossfitgenki (1,035 followers)
- **Facebook:** CrossFit Genki (578 likes)
- **Google Reviews:** 7 reviews, 5/5 average
- **Members:** ~130 current
- **Facility:** 400m² total (280m² main + 120m² Open & Chill)
- **Opened:** Summer 2024

### Coaches
1. **Adrien Marquis** — Owner, CrossFit Level 1, 6 years experience
2. **Loris Duval** — Head Coach, BPJEPS AF, CFL2, CF Row Erg, CF Programming
3. **Quentin Schenique** — Coach, CrossFit certified

### Hours
| Day       | Hours                                  |
|-----------|----------------------------------------|
| Mon-Thu   | 09:00-10:00 · 12:00-14:00 · 16:30-20:30 |
| Friday    | 12:00-14:00 · 16:30-20:30              |
| Saturday  | 09:00-12:00                            |
| Sunday    | Closed                                 |

### Known Pricing
- Free trial session
- Drop-in: 20€
- Open Access: 70€ (includes 1 free session)
- Full subscription list: TBD (to be provided by client)

---

## 6. SEO TARGETS

- Primary: "CrossFit Talange", "CrossFit Thionville", "salle CrossFit Metz"
- Secondary: "HYROX Metz", "HYROX Thionville", "HYROX Talange"
- Local schema markup required (LocalBusiness + GymOrFitnessCenter)
- Meta descriptions in French, location-specific

---

## 7. TECH STACK PREFERENCES

- Framework: Next.js or Astro (static preferred for speed)
- Styling: Tailwind CSS
- Animations: Framer Motion or GSAP (subtle, performant)
- Deployment: Netlify
- No CMS needed (site is mostly static, rarely updated)