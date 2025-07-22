/** @type {import('next').NextConfig} */
import i18nConfig from "./next-i18next.config.js";
const { i18n } = i18nConfig;
const nextConfig = {
  i18n,
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gaian-blog.ghost.io",
      },
      {
        protocol: "https",
        hostname: "static.ghost.org",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
    ],
  },
};

export default nextConfig;
