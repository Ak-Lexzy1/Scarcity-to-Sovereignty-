import type { MetadataRoute } from "next";
sitemap: "https://scarcity2sovereignty.com/sitemap.xml",
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://scarcity2sovereignty.com/sitemap.xml",
  };
}
