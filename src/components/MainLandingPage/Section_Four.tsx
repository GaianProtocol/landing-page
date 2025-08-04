"use client";

import {
  colosseum,
  jito,
  solanaSummit,
  solayer,
  superteam,
  wormhole,
} from "@/assets/logo-winner"; // Đảm bảo các đường dẫn này chính xác
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

// Định nghĩa kiểu cho winner item
interface WinnerItem {
  name: string;
  logo: string;
  isWinner: boolean;
  prize: string;
  desc: string;
  className: string;
  trackWinner?: string;
}

const winners: WinnerItem[] = [
  {
    name: "solayer",
    logo: solayer,
    isWinner: false,
    prize: "2nd Place",
    desc: "Solayer Track",
    className: "h-10",
    trackWinner: "https://x.com/solayer_labs/status/1848466175568580973",
  },
  {
    name: "jito",
    logo: jito,
    isWinner: true,
    prize: "3rd Place",
    desc: "The Gird Hackathon",
    className: "h-8",
    trackWinner: "https://x.com/Gaian_hq/status/1884054056907509961",
  },
  {
    name: "superteamvn",
    logo: superteam,
    isWinner: false,
    prize: "1st Place",
    desc: "Solana Summer Camp VN",
    className: "h-8",
  },
  {
    name: "wormhole",
    logo: wormhole,
    isWinner: false,
    prize: "1st Place",
    desc: "Wormhole Sigma VN",
    className: "h-5",
    trackWinner: "https://x.com/SuperteamVN/status/1861728541018325473",
  },
  {
    name: "colosseum",
    logo: colosseum,
    isWinner: false,
    prize: "Honorable Mention",
    desc: "Solana Breakout Hackathon",
    className: "h-8",
    trackWinner: "https://x.com/Gaian_hq/status/1940616710622728700",
  },
  {
    name: "summit",
    logo: solanaSummit,
    isWinner: false,
    prize: "Top 20 Projects",
    desc: "Solana Summit APAC 2025",
    className: "h-12",
    trackWinner: "https://x.com/FoundationVent/status/1942323788559048726",
  },
];

const WinnerCard = ({
  logo,
  prize,
  desc,
  className,
  trackWinner,
}: {
  logo: string;
  prize: string;
  desc: string;
  className: string;
  trackWinner?: string;
}) => {
  return (
    <div
      className={`
        group cursor-pointer border-r border-l border-darkGreen/40 bg-green-50
        flex flex-col h-36 w-[300px] px-8 py-5
        justify-center items-center transition-all duration-1000 ease-out
        hover:bg-textGreen/40 flex-shrink-0
      `}
      onClick={() => {
        if (trackWinner) {
          window.open(trackWinner);
        }
      }}
    >
      {/* Logo */}
      <div
        className={`
          transition-all duration-700 ease-out
          group-hover:-translate-y-3 group-hover:scale-95
          will-change-transform group-hover:mt-5
        `}
      >
        <Image
          src={logo || "/placeholder.svg"}
          alt="logo"
          className={`w-full object-contain transition-all duration-700 ease-out ${className}`}
          loading="lazy"
        />
      </div>
      {/* Prize + Desc (hiện khi hover) */}
      <div
        className={`
          transition-all duration-700 ease-in-out text-center
          max-h-0 opacity-0 invisible
          group-hover:max-h-32 group-hover:opacity-100 group-hover:visible flex flex-col items-center
        `}
      >
        <div className="text-lg font-bold text-darkGreen">{prize}</div>
        <div className="text-base text-gray-700 mt-1">{desc}</div>
      </div>
    </div>
  );
};

const SectionFour = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gray-100 py-16 bg-green-50 overflow-x-hidden">
      {/* Header */}
      <motion.div
        className="max-w-screen-xl mx-auto text-start mb-8"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="flex flex-row gap-3 text-2xl md:text-5xl pl-5 md:pl-16 font-bold">
          <span className="text-darkGreen">
            {t("winnerSection.tag.winner")}{" "}
          </span>
          <span className="text-gray/50">
            {t("winnerSection.tag.from")}
          </span>
        </h1>
      </motion.div>
      {/* Marquee container với overflow hidden */}
      <div className="w-full overflow-hidden">
        <Marquee
          pauseOnHover
          speed={40}
          gradient={false}
          className="overflow-hidden"
        >
          <div className="flex border-y border-darkGreen/40">
            {winners.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <WinnerCard
                  logo={item.logo}
                  prize={item.prize}
                  desc={item.desc}
                  className={item.className}
                  trackWinner={item.trackWinner}
                />
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default SectionFour;
