import type { Metadata } from "next"; // Import Metadata type
import RequestForBusinessClient from "./RequestForBusinessClient";

// SEO Metadata for the page
export const metadata: Metadata = {
  title: "Request for Business - Gaian Infrastructure Stack",
  description:
    "Tell us about your project and apply to access Gaian's infrastructure stack. Submit your business request to partner with Gaian for payment DApp, QR integration, API Gateway, and On-Ramp solutions.",
  keywords: [
    "Gaian",
    "business request",
    "infrastructure stack",
    "payment DApp",
    "QR integration",
    "API Gateway",
    "On-Ramp",
    "fintech",
    "ecommerce",
    "web3",
    "blockchain solutions",
  ],
  openGraph: {
    title: "Request for Business - Gaian Infrastructure Stack",
    description:
      "Tell us about your project and apply to access Gaian's infrastructure stack. Submit your business request to partner with Gaian for payment DApp, QR integration, API Gateway, and On-Ramp solutions.",
    url: "https://yourwebsite.com/request-for-business", // Replace with your actual domain
    siteName: "Gaian",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", // Replace with a relevant image for social sharing
        width: 1200,
        height: 630,
        alt: "Gaian Business Request Form",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request for Business - Gaian Infrastructure Stack",
    description:
      "Tell us about your project and apply to access Gaian's infrastructure stack. Submit your business request to partner with Gaian for payment DApp, QR integration, API Gateway, and On-Ramp solutions.",
    creator: "@Gaian_hq", // Replace with your Twitter handle if applicable
    images: ["/placeholder.svg?height=675&width=1200"], // Replace with a relevant image for Twitter
  },
};

export default function RequestForBusiness() {
  return <RequestForBusinessClient />;
}
