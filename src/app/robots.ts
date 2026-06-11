import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://cameron-kilgore.com";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/documents/"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
