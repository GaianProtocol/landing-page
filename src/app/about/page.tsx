import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Gaian | Open Infra for a World in Flow",
  description:
    "Gaian builds the open infrastructure for borderless payment, productivity and wellness. Learn more about our mission, values and team.",
  openGraph: {
    title: "About Gaian",
    description:
      "Redefining work and wellness through open, AI-powered infrastructure.",
    images: [
      {
        url: "/images/about/og-about.jpg", // ảnh OG nếu có
        width: 1200,
        height: 630,
        alt: "About Gaian",
      },
    ],
  },
};

export default function AboutUsPage() {
  return <AboutClient />;
}
