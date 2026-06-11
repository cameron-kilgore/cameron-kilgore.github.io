import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://cameron-kilgore.dev";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/documents/"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
