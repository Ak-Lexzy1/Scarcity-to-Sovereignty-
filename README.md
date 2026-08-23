Scarcity to Sovereignty
Personal finance & wealth-mindset blog. Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. Deployed on Vercel, auto-deploying from GitHub on every push to main.
Live site: https://scarcity-to-sovereignty.vercel.app
Getting Started Locally
npm install
npm run dev
Visit http://localhost:3000.
Project Structure
src/
app/
page.tsx                 → homepage
sitemap.ts                → auto-generated sitemap.xml
robots.ts                 → auto-generated robots.txt
opengraph-image.tsx       → default branded share image (Home/About/Contact/Privacy)
blog/page.tsx              → blog listing (filterable by segment)
blog/[slug]/page.tsx       → individual post pages (ad slots, disclosure, image, newsletter)
blog/[slug]/opengraph-image.tsx → per-post branded share image
shop/page.tsx               → product listing (Coming Soon placeholder live)
shop/[slug]/page.tsx        → individual product page
about/page.tsx
contact/page.tsx
privacy-policy/page.tsx
components/
Nav.tsx, Footer.tsx        → site chrome
Icons.tsx                  → line-icon set (used as image fallback)
PostCard.tsx                → blog post card (home + listing)
NewsletterForm.tsx           → ConvertKit (Kit) waitlist form
ContactForm.tsx              → Formspree contact form
AdSlot.tsx                    → reserved ad placeholder (top + end of post)
AffiliateDisclosure.tsx       → FTC-style disclosure banner, shown per-post via frontmatter
content/posts/               → blog posts as Markdown files (frontmatter + content)
lib/
posts.ts                    → markdown loader, auto-detects matching post image by slug
segments.ts                  → the 3 content segments + subtitles
products.ts                   → shop product data
Adding a New Blog Post
Add a new .md file inside src/content/posts/, named as the URL slug you want (e.g. my-new-post.md → /blog/my-new-post). Write down the slug — you'll need it again for the image.
Required frontmatter:
title: "Your Post Title"
excerpt: "One or two sentence summary shown on cards."
segment: "money-foundations" | "wealth-income-building" | "mindset-freedom"
icon: "budget" | "growth" | "coin" | "mindset" | "laptop" | "compass" | "shield" | "key" | "lock"
date: "2026-08-13"
readTime: "6 min read"
hasAffiliateLinks: true   # optional — only add this line if the post contains an affiliate link
Your post content in Markdown goes here.
Optional featured image: upload an image (jpg/jpeg/png/webp) to public/images/posts/, named exactly the same as the post's slug (e.g. my-new-post.jpg). The site automatically detects and displays it — no frontmatter line needed. If no matching image is uploaded, the post falls back to its topic icon automatically.
Delete the 5 starter placeholder posts whenever your real posts are ready to replace them.
Adding a Product to the Shop
Edit src/lib/products.ts and add a new entry to the products array with the real name, price, description, and your Gumroad/Selar/Stripe checkout link. No new pages or code needed — it appears automatically on /shop.
Integrations Already Wired In
Newsletter waitlist (Kit/ConvertKit) — src/components/NewsletterForm.tsx, posts to form action https://app.kit.com/forms/9796547/subscriptions. Appears on the homepage, About page, and end of every blog post.
Contact form (Formspree) — src/components/ContactForm.tsx, using form ID xzepgkzl.
Vercel Analytics — live, tracked automatically via <Analytics /> in the root layout. View data under the Analytics tab in the Vercel dashboard.
Google Search Console — verified via HTML tag in layout.tsx metadata; sitemap submitted.
Ad slots (Mediavine/AdThrive/AdSense-ready) — src/components/AdSlot.tsx, two reserved placeholders per post (top and end). Currently placeholder styling only — swap in real ad network script once approved, site-wide, no per-post changes needed.
Affiliate disclosure — src/components/AffiliateDisclosure.tsx, shown automatically on any post with hasAffiliateLinks: true in its frontmatter.
Still To Do
Pinterest tag — once the Pinterest Business account is set up and a tracking tag/snippet generated, send it over to be added to src/app/layout.tsx.
Logo / favicon — currently a text wordmark. Swap in an image logo in Nav.tsx and a real favicon in /public whenever ready.
Free downloadable PDF lead magnet — not yet built; needs content decided first, then a dedicated page + ConvertKit automation to deliver it on signup.
Pagefind / on-site search — deferred until post volume is significantly higher; low value at current post count.
Custom domain — currently on the free .vercel.app address. When a custom domain is purchased: metadataBase in src/app/layout.tsx, and the BASE_URL constants in sitemap.ts and robots.ts, all need updating to the new domain — otherwise Open Graph previews, Pinterest, and SEO will keep pointing to the old address. Also re-claim the new domain on Pinterest.
Deploying to Vercel
Push changes to the GitHub repository's main branch.
Vercel auto-detects the push and builds/deploys automatically — no manual steps required.
Check the Deployments tab in Vercel to confirm the build succeeded (green "Ready" status) before assuming a change is live.
Once a custom domain is purchased, add it under Project → Settings → Domains in Vercel (free on Vercel's side; only the domain registration itself costs money) — and don't forget the metadataBase/sitemap/robots updates noted above.
Note on Keeping This File Updated
This README should be revisited and updated whenever a meaningful new feature is added (new page type, new integration, new component pattern) — so it stays a reliable reference rather than going stale.
