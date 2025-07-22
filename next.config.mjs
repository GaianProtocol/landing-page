/** @type {import('next').NextConfig} */
import i18nConfig from "./next-i18next.config.js";
const { i18n } = i18nConfig;
const nextConfig = {
  i18n,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["pbs.twimg.com", "https://gaian-blog.ghost.io/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.ghost.org",
      },
    ],
  },
};

export default nextConfig;
