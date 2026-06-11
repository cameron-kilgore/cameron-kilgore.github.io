import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cameron Kilgore | Software Engineer",
    short_name: "Cameron",
    description:
      "Full-stack software engineer specializing in financial technology and AI",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
      },
      {
        src: "/favicon.webp",
        sizes: "192x192",
        type: "image/webp",
      },
    ],
  };
}
