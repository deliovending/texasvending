# Texas Vending Blog and Social Content Strategy

Prepared 2026-10-22 for texasvending.com (Blog, under About Us). Scope: Dallas–Fort Worth / North Texas. Goals: organic traffic and leads.

## 1. Business context (as confirmed)

| Item | Value |
|---|---|
| Business | Texas Vending, 2777 N Stemmons Fwy, Dallas, TX 75207 · (469) 304-9509 · hi@texasvending.com |
| Offer | Free placement and service of vending machines, micro markets, AI smart coolers, and coffee and water service, plus fresh food, vending repair, and vending moving |
| Audience | Corporate offices, warehouses, logistics and distribution, manufacturing, facilities managers |
| Area | Dallas–Fort Worth and surrounding North Texas cities |
| Goals | Traffic and leads |
| Platform | Live site: WordPress (about 34 posts). New posts go only into the Astro rebuild (`src/content/blog/`) and go live when the Astro site launches. |
| Social | Instagram, Facebook, LinkedIn, plus GEO (generative engine optimization). Blotato automation is on hold. |
| Sister brand | Delio Vending & Coffee (deliotx.com) is under the same management. See "Delio keyword split" below. |

### Facts used in content (verified on the site)

Only these business claims appear in drafts. Anything else needs owner confirmation first.

- $0 for equipment, delivery, and setup at qualifying locations. No installation fee, no service fee.
- A location qualifies for free placement with at least 50 people in total foot traffic, counting employees and visitors. Foot traffic is a total count, not a daily-visitor number.
- Local technicians respond to reported service issues within 24 hours.
- **Never mention commissions in any blog post or caption.**
- No long-term contract required.
- Cashless on every machine, micro market, and coffee system: cards, mobile wallets, tap-to-pay.
- Real-time monitoring tells the team when a machine or market needs service. Restocking schedule set per location.
- Service visits planned around shifts, docks, and badge rules.
- Local technicians, including after hours. Repairs machines no matter who supplied them.
- Moves machines across a building or across town, then levels, connects, and tests them.
- Smart coolers charge automatically when an item is taken.
- Micro markets are self-checkout and open around the clock.
- Fresh sandwiches, salads, ready-to-eat meals, protein snacks, better-for-you drinks.
- Adds specific products and brands when there is enough demand.
- Team walks the site before quoting.

## 2. Research summary

### Competitors

| Competitor | Content position | Weakness to exploit |
|---|---|---|
| Delio Vending & Coffee (deliotx.com) | Strongest local content: about 160 posts, about 107 in 2026, city-swap titles, warehouse and smart cooler focus | Same management as Texas Vending. Not a competitor, but a cannibalization risk. See below. |
| AmeriTex Vending | Blog abandoned (last visible post Apr 2022) | No FAQ, no warehouse page, no smart coolers |
| DFW Markets | Undated generic posts; 11 suburb pages; states "25+ employees" | No warehouse page |
| TGL Vending | Active (Oct 15, 2026 healthcare post) | No FAQ, no industrial page |
| EJR Vending | Undated posts incl. warehouse and micro market vs vending | Thin warehouse page, no smart coolers |
| Vending Group (national) | Templated city pages; states "~40+ staff" threshold | Wrong suburbs on Arlington page |
| Canteen, Aramark Refreshments | Generic corporate content | Thin local branch pages |

Search results for "vending services Fort Worth", "warehouse vending Dallas", and "smart cooler vending Dallas" are crowded with business-for-sale listings and thin pages. Well-built operator content can rank here.

### Delio keyword split (recommended)

Two sites under one management that target the same keywords split clicks and rankings, and near-duplicate posts across both can look like a doorway network to Google. Rules:

- **One primary keyword, one site.** Before writing a Texas Vending post, search `site:deliotx.com "<primary keyword>"`. If Delio already targets it, pick a different angle or skip it.
- **Texas Vending owns:** evaluation and decision content (contracts, qualification, "is free vending free", comparisons), employer compliance (break law, licensing), service-specific posts (repair, moving, micro markets), and industry posts for offices, data centers, and manufacturing.
- **Delio keeps:** its existing city-by-city posts and its smart cooler and warehouse series. Texas Vending should not publish new city-swap posts for the same suburbs.
- **Never reuse text** between the two blogs. Link between them only where it truly helps the reader.

### Content gaps (no DFW competitor covers these well)

1. Contract terms: length, auto-renewal, exclusivity, early exit, removal.
2. How "free" works, honestly: what the business pays (nothing) and what qualifies.
3. Qualification thresholds (at least 50 people in total foot traffic, employees and visitors combined).
4. Texas-specific compliance: break law, vending sales tax, Self-Service Food Market licensing.
5. Shift coverage for 2nd and 3rd shift warehouse crews.
6. Theft and shrink in micro markets: who absorbs the loss.
7. Subsidized programs: how employer-paid food works.
8. Plain-English explainers ("what is a micro market", "what is an AI smart cooler") that AI answer engines can quote.

### Keyword clusters (search volume not verified; ranked by intent)

- **A. BOFU local:** vending machine services Dallas, free vending machine placement Dallas, micro market Dallas, office coffee service Dallas, smart cooler vending Dallas, vending repair Dallas, vending company Fort Worth, plus suburb variants.
- **B. Commercial, industry:** warehouse vending services, distribution center break room, manufacturing plant vending, 24/7 vending night shift, micro market for warehouse.
- **C. Commercial, evaluation:** micro market vs vending machine, is free vending really free, how many employees for free vending machine, vending contract terms. (Commission keywords are excluded by owner policy.)
- **D. Informational:** Texas break laws employer, do I have to pay for breaks Texas, what is a micro market, what is a smart cooler.

### Fixes to existing content (do these first)

1. **Duplicate Fort Worth posts.** `/fort-worth-businesses-how-to-qualify-for-a-free-vending-machine-2/` and `/free-vending-placement-fort-worth/` target the same query. The second post's body is about smart cooler meals, not qualification. Keep one URL, rewrite it once qualification rules are confirmed, and 301 the other.
2. **Mismatched excerpts.** Several blog listing summaries don't match their posts, and "From Stockouts to Smart Restocking" shows placeholder text.
3. **About Us demo team.** The team section shows "(Demo)" photos, placeholder names, and `info@domain.tld`. This damages trust and E-E-A-T. Replace with real people or remove it.
4. **Service response time.** Standard is 24 hours. The Astro homepage, homepage FAQ, and Alliance page now say so. The live WordPress homepage still says "same-day fixes"; it gets replaced at launch.
5. **Migrate the WordPress posts before launch.** The new posts link to existing WordPress posts (for example `/the-15-minutes-your-warehouse-didnt-know-it-was-losing/`). Those URLs, the service pages, and `/contact-us/` do not exist in the Astro build yet. If they are not migrated or redirected, the links break and the old posts lose their rankings at launch.

## 3. Prioritized blog titles

Status key: **Drafted** = written and in the repo. **Ready** = can be written from verified facts. **Blocked** = needs owner input (see section 8).

| # | Title | Primary keyword | Supporting keywords | Intent | Status |
|---|---|---|---|---|---|
| 1 | Vending Contract Checklist: 10 Questions | vending contract | vending machine contract terms, free vending agreement, vending company Dallas | BOFU | In Astro build |
| 2 | Texas Break Laws for Employers | Texas break laws | do I have to pay for breaks Texas, Texas lunch break law, FLSA break rules | Informational | In Astro build |
| 3 | Does Your Business Qualify for a Free Vending Machine? The 50-Person Rule Explained | free vending machine requirements | how many employees for free vending machine, free vending machine Dallas | Commercial | Ready (merge with the duplicate Fort Worth posts) |
| 4 | Is Free Vending Really Free? What Your Business Pays (Nothing) and What It Provides | is free vending really free | free vending machine placement Dallas, no-cost vending service | Commercial | Ready (no commission content) |
| 5 | Vending Machine Repair in Dallas: Who to Call When a Machine You Don't Own Breaks | vending machine repair Dallas | card reader repair, vending refrigeration repair, after-hours vending repair | BOFU | Ready |
| 6 | Moving Vending Machines During an Office or Warehouse Move in DFW | vending machine moving Dallas | relocate vending machine, office move break room | BOFU | Ready |
| 7 | What Is a Micro Market? A Plain-English Guide for Facilities Managers | what is a micro market | micro market Dallas, self-checkout break room | Informational (GEO) | Ready |
| 8 | What Is an AI Smart Cooler? How Grab-and-Go Fridges Charge Automatically | what is an AI smart cooler | smart fridge vending, smart cooler Dallas | Informational (GEO) | Ready |
| 9 | Feeding the Night Shift: Break Room Food for 2nd and 3rd Shift Warehouse Crews | 24 hour vending warehouse | night shift food options, warehouse vending services | Commercial | Ready |
| 10 | Micro Market vs. Vending Machine vs. AI Smart Cooler: A Sizing Guide for DFW Workplaces | micro market vs vending machine | smart cooler vs micro market | Commercial | Blocked: sizing rules. Update the existing Alliance post instead of a new URL |
| 11 | Office Coffee Service in Dallas: Brewer, Bean-to-Cup, or Pods? | office coffee service Dallas | bean-to-cup coffee office, office water service | Commercial | Blocked: equipment lineup |
| 12 | Who Pays When Micro Market Items Go Missing? Theft and Shrink Explained | micro market theft | micro market shrink, self-checkout loss | Commercial | Blocked: shrink policy |
| 13 | Subsidized Break Room Food: How Employer-Paid Snacks and Meals Work | subsidized micro market | employer-paid snacks, subsidized vending | Commercial | Blocked: subsidy offer |
| 14 | Data Center Break Rooms: Food Access for 24/7 Secure Facilities | data center vending | secure facility break room | Commercial | Ready |
| 15 | Manufacturing Plant Vending in North Texas: What Plant Managers Ask First | manufacturing plant vending | factory break room, plant vending Dallas | Commercial | Ready |
| 16 | Vending Sales Tax in Texas: What Host Businesses Should Know | vending machine sales tax Texas | Texas vending tax food | Informational | Ready (low priority, low buyer intent) |

Publishing cadence: one post per week. Check each title against deliotx.com first (see "Delio keyword split").

## 4. Content generation pipeline

Every post follows the same template, which both drafts use:

1. **Frontmatter:** title (under 70 characters where possible), meta description (160 characters max, enforced by the schema), pubDate, image from `src/assets/images/`, descriptive alt text, tags, `draft: true` until approved.
2. **"Short answer" paragraph first.** Two to three sentences that answer the query directly. Search snippets and AI answer engines quote this block.
3. **H2 sections in question form** where they match real searches. H3s for steps or sub-questions. The page template supplies the H1.
4. **Internal links:** at least two service pages (`/our-services/...`), one industry or fresh food page, and one or two related blog posts. Final CTA links to `/contact-us/`.
5. **FAQ section plus FAQPage schema.** Questions in the MDX `faqs` export render on the page and in JSON-LD.
6. **Sources section** with primary sources (government, standards bodies) for every statistic or legal claim.
7. **Fact check:** every business claim must appear in the verified list in section 1.

Approval flow: draft in repo (`draft: true`) → owner review → `draft: false` → live with the Astro site → post appears in RSS → social captions approved → posted (Blotato later).

### GEO (generative engine optimization)

- The answer-first block, FAQ schema, and cited primary sources make posts easy for ChatGPT, Perplexity, Gemini, and Google AI Overviews to quote.
- Keep company facts identical everywhere (name, address, phone, service area, "no long-term contract"). AI engines cross-check entities.
- Fix the About Us demo team. AI engines and Google both weigh real authorship.
- The Astro build now publishes an RSS feed at `/rss.xml`, linked from every page.

## 5. Social posts

Captions live in `social/posts.json`, two Instagram, two Facebook, and one LinkedIn variant per post. All start with `"approved": false`.

Voice: plain, direct, helpful, light wit (matches site CTAs like "Beat the snack attack"). No hype claims, no invented numbers. Legal posts carry "General information, not legal advice."

### Post: Texas Break Laws for Employers

- **IG A** (rules list): opens "Texas has no state law that requires lunch or rest breaks for adult employees." Three federal rules, dock-door hook, link in bio.
- **IG B** (quiz hook): "Is a 15-minute break paid?" Engagement question at the end.
- **FB A** (rules list + link). **FB B** (time-the-walk hook + link, 2 days later).
- **LinkedIn** (three numbered federal rules + link).

### Post: Vending Contract Checklist

- **IG A** (5 questions list). **IG B** ("save this post" hook, asks which question readers would ask first).
- **FB A** (checklist + link). **FB B** ("Free install is standard. Service isn't." hook + link).
- **LinkedIn** (5 written-answer items + link).

## 6. Visual guidance

### Brand system

- Colors: ink navy `#223165`, dark navy `#18234a`, brand red `#bc2127`, white.
- Fonts: Fjalla One (headlines, uppercase), Raleway (body), Space Mono (small labels).
- Logo: `src/assets/texas-vending-logo-white.png` on navy backgrounds.
- Sizes: Instagram feed 1080×1350 (4:5) for carousels, 1080×1080 for single images; Facebook and LinkedIn link posts use the blog's Open Graph image (1200 wide) automatically.

### Image rules

The owner confirmed that all images in `public/images/` are raw images cleared for use. Two rules still apply:

- **Don't caption a photo as a Texas Vending install unless it is one.** Some images show other brands on the equipment (`warehouse breakroom.jpeg`: "camelback café"; `fresh food smart cooler for Dallas office employees.png`: GreenTime, MICROSTORES watermark; `micro market in lounge.jpeg`: "self."). Use these only as general illustrations.
- **Instagram needs at least 1080 px wide.** Skip small files such as `lunch break at the warehouse.jpeg` (281×180) and `micro market in lounge.jpeg` (275×183).

Best social picks: `texas vending smart cooler.png` (branded), `smart fridge.jpeg` (2560×1920), `paying in a vending.jpg` (2560×1704), `micromarket a.jpeg` (2048×1365), `smart cooler b.jpeg` (1920×1280).

### Tip-card concepts

**Texas Break Laws (IG carousel, 5 slides, navy background, red accent bar):**
1. "Does Texas require lunch breaks?" / "No. Not for adult employees." (red)
2. "Breaks of 20 min or less = paid time" / small label: FLSA, DOL Fact Sheet #22
3. "Unpaid meal? Only if fully off duty." / "Watching the dock door while eating counts as work."
4. "Nursing employees: break time + private space (not a bathroom)" / small label: PUMP Act
5. Branded smart cooler render + "Make every break count" + "texasvending.com" + "General info, not legal advice."

**Vending Contract Checklist (IG carousel, 6 slides):**
1. "Free vending is easy to find. Fair terms aren't." over the smart cooler render.
2–5. One question per slide in large Fjalla One type, a one-line "why it matters" below in Raleway.
6. "Get every answer in writing." + "Save this for your next vendor call" + logo.

Facebook and LinkedIn: use the blog post's featured image (pulled from RSS), so the link preview matches the article.

## 7. Publishing automation (Blotato)

**Status: on hold by owner decision.** The files below are ready for when it starts.

Files:

- `src/pages/rss.xml.ts`: feed at `/rss.xml` with title, link, description, tags, and a `media:content` image per post. `/feed/` redirects here after the move to Astro.
- `social/posts.json`: captions, platform, schedule, alt text, approval flag.
- `scripts/blotato-publish.mjs` (`npm run social:publish`).

What the script does:

1. Reads the live RSS feed and finds each post by slug. It refuses any caption whose blog post is not live yet.
2. Looks up connected Instagram, Facebook, and LinkedIn accounts (`GET /v2/users/me/accounts`), the Facebook page id (`/subaccounts`), and optionally the LinkedIn company page.
3. Checks every approved caption: no placeholder text, link to the live post on Facebook and LinkedIn, Instagram under 2,200 characters and 30 hashtags, schedule time in the future, image URL loads.
4. If any check fails, it sends nothing and lists the problems.
5. Dry run by default prints each `POST /v2/posts` body. With `--publish`, it uploads the image (`POST /v2/media`) and schedules each post (`scheduledTime`, ISO 8601 UTC).

Run:

```sh
# dry run
BLOTATO_API_KEY=... npm run social:publish
# schedule for real
BLOTATO_API_KEY=... npm run social:publish -- --publish
```

Set `BLOTATO_FACEBOOK_PAGE` and `BLOTATO_LINKEDIN_PAGE` to the page names if the connected accounts manage more than one page. Scheduled times are 9:00 a.m. Central (14:00 UTC before Nov 1, 15:00 UTC after).

Blotato also supports X, Threads, Bluesky, TikTok, Pinterest, and YouTube. For a B2B buyer, LinkedIn, Facebook, and Instagram come first. Google Business Profile posts are not a Blotato platform and must be posted separately.

## 8. Decisions and open questions

Decided (2026-10-22):

- Delio and Texas Vending are under the same management. Follow the keyword split in section 2.
- Free placement: at least 50 people in total foot traffic, counting employees and visitors.
- No commissions in any blog post.
- Service response: 24 hours.
- All images are raw images cleared for use.
- New posts go into the Astro build only and go live with it. WordPress gets no new posts.
- Blotato: not yet.

WordPress blog migration (2026-10-22): the rule was keep posts that rank, drop the rest. Search Console (web, last 3 months) showed 46 impressions and no clicks site-wide. Only one blog post had any impressions: `/dallas-healthcare-vending-services/` (1). It was rewritten to the new standard and moved to `/blog/dallas-healthcare-vending-services/`. The other 33 posts were dropped, each with a 301 in `vercel.json` to the closest kept post or service page. Their topics remain available for new, better posts (see section 3).

Still open:

1. **Non-blog pages with impressions:** city pages (`/about-us/cities/hurst/`, `ferris`, `las-colinas`, `roanoke`, `allen`, `arlington`, `duncanville`, `frisco`, `red-oak`, `saginaw-vending`), `/about-us/service-areas/` and `/about-us/service-areas/dallas-vending-services/`, `/industries-we-serve/irving/`, and the service and industry pages in the main menu do not exist in Astro yet. Build or redirect each before launch.
2. **Equipment details** (micro market kiosk platform, coffee equipment lineup), shrink policy, and subsidy options. These unblock titles #10–#13.
