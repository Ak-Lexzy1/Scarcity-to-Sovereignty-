Scarcity to Sovereignty
Personal finance & wealth-mindset blog. Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. Deployed on Vercel, auto-deploying from GitHub on every push to main.
Live site: https://scarcity-to-sovereignty.vercel.app
Getting Started Locally
Run these two commands in your terminal:
npm install
npm run dev
Then visit http://localhost:3000
Project Structure
The project follows standard Next.js App Router structure. Pages live in src/app, reusable components in src/components, blog post markdown files in src/content/posts, and shared logic in src/lib.
Adding a New Blog Post
Add a new .md file inside src/content/posts, named as the URL slug you want. Write down the slug, you will need it again for the image.
Required frontmatter fields: title, excerpt, segment (money-foundations, wealth-income-building, or mindset-freedom), icon, date, readTime, and optionally hasAffiliateLinks if the post contains an affiliate link.
Optional featured image: upload an image to public/images/posts, named exactly the same as the post's slug. The site automatically detects and displays it. If no matching image is uploaded, the post falls back to its topic icon automatically.
Delete the 5 starter placeholder posts whenever your real posts are ready to replace them.
Adding a Product to the Shop
Edit src/lib/products.ts and add a new entry to the products array with the real name, price, description, and checkout link. It appears automatically on the Shop page.
Integrations Already Wired In
Newsletter waitlist through Kit ConvertKit, appears on the homepage, About page, and end of every blog post.
Contact form through Formspree.
Vercel Analytics, tracked automatically.
Google Search Console, verified, sitemap submitted.
Ad slots ready for Mediavine, AdThrive, or AdSense, two reserved placeholders per post.
Affiliate disclosure banner, shown automatically on any post with hasAffiliateLinks set to true.
Still To Do
Pinterest tag, once the Pinterest Business account is set up.
Logo and favicon, currently a text wordmark.
Free downloadable PDF lead magnet, not yet built.
On site search, deferred until post volume is higher.
Custom domain: when purchased, metadataBase in layout.tsx and the BASE_URL constants in sitemap.ts and robots.ts all need updating to the new domain. Also re-claim the new domain on Pinterest.
Deploying to Vercel
Push changes to the main branch on GitHub. Vercel automatically builds and deploys. Check the Deployments tab in Vercel to confirm the build succeeded before assuming a change is live.
Note on Keeping This File Updated
This README should be revisited and updated whenever a meaningful new feature is added, so it stays a reliable reference rather than going stale.
