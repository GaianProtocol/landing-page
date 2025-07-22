"use client";
import ContactPopup from "@/components/Popup/ContactPopup";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Key, Link, QrCode } from "lucide-react";
import { useState } from "react";

// Card Component
type CardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  buttonText: string;
  featured?: boolean;
  iconBgColor?: string | null;
  iconColor?: string | null;
  titleColor?: string | null;
  onButtonClick?: () => void;
  onExternalClick?: () => void;
};

const Card = ({
  title,
  description,
  icon: Icon,
  buttonText,
  titleColor = null,
  onButtonClick,
}: CardProps) => {
  // Màu mặc định cho title
  const defaultTitleColor = "text-white";
  const titleColorClass = titleColor || defaultTitleColor;

  return (
    <div className="relative flex flex-col items-center text-center backdrop-blur-sm rounded-2xl p-8">
      <div className="hidden md:block absolute left-0 top-0 h-60 w-[1px] bg-textGreen/10" />
      <div className="block md:hidden absolute bottom-0 h-[1px] w-full bg-textGreen/10" />
      <div className="mb-6 max-w-4xl">
        <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 border-[1px] border-textGreen mx-auto">
          <Icon
            className="w-6 h-6"
            color="#9FE870"
            style={{ color: "inherit" }}
          />
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${titleColorClass}`}>
          {title}
        </h3>
        <p className="text-white text-sm">{description}</p>
      </div>

      <div className="flex items-center gap-2 w-full">
        <div
          className="w-full flex flex-row gap-2 group items-center"
          onClick={onButtonClick}
        >
          {/* Nút chính */}
          <button className="font-normal rounded-lg h-full bg-gray bg-opacity-40 w-full group-hover:shadow-[inset_0_4px_6px_rgb(216,242,196)] py-3 relative transition-all duration-300 ease-out group-hover:bg-textGreen">
            <span className="group-hover:text-darkGreen text-textGreen uppercase font-geist transition-transform duration-300 ease-out group-hover:-translate-x-2">
              {buttonText}
            </span>
          </button>

          {/* Nút icon - không chiếm chỗ khi chưa hover */}
          <div className="hidden md:block h-full overflow-hidden transition-all duration-500 ease-out w-0 group-hover:w-20">
            <button className="h-full w-14 p-3 bg-darkGreen bg-opacity-70 border-2 border-textGreen hover:bg-opacity-100 rounded-lg flex items-center justify-center transition-transform duration-300 ease-out">
              <ArrowUpRight
                color="#9FE870"
                className="w-6 h-6 text-textGreen transition-transform duration-300 group-hover:rotate-12"
              />
            </button>
          </div>
        </div>

        {/* {hasExternalLink && (
          <button
            className="h-full p-2 bg-darkGreen bg-opacity-70 border-2 border-textGreen hover:bg-opacity-100 rounded-lg flex items-center justify-center transition-colors duration-200"
            onClick={onExternalClick}
          >
            <ArrowUpRight color="#9FE870" className="w-8 h-8 text-textGreen" />
          </button>
        )} */}
      </div>
    </div>
  );
};

const StablecoinPaymentSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const cardsData = [
    {
      title: "Open Source SDK",
      description: "Fork our repo and build your own app",
      icon: Code,
      buttonText: "LEARN ABOUT SDK",
      featured: true,
      hasExternalLink: true,
      iconColor: "#9FE870",
      onButtonClick: () => setIsContactOpen(true),
      onExternalClick: () => console.log("External link clicked"),
    },
    {
      title: "API Gateway",
      description: "Connect API Gaian to your existing platform",
      icon: Link,
      buttonText: "CONTACT FOR BUSINESS",
      onButtonClick: () => (window.location.href = "/request-for-business"),
    },
    {
      title: "QR Integration",
      description: "Scan & pay with stablecoins in seconds",
      icon: QrCode,
      buttonText: "CONTACT FOR BUSINESS",
      onButtonClick: () => (window.location.href = "/request-for-business"),
    },
    {
      title: "On-ramp by Passkey",
      description: "Invisible onboard web 2 users",
      icon: Key,
      buttonText: "BOOK DEMO",
      onButtonClick: () => (window.location.href = "/request-for-business"),
    },
  ];
  // const cardsData = [
  //   {
  //     title: t("featureSection.items.sdk.title"),
  //     description: t("featureSection.items.sdk.desc"),
  //     icon: Code,
  //     buttonText: t("featureSection.items.sdk.cta"),
  //     onButtonClick: () => setIsContactOpen(true),
  //   },
  //   {
  //     title: t("featureSection.items.api.title"),
  //     description: t("featureSection.items.api.desc"),
  //     icon: Link,
  //     buttonText: t("featureSection.items.api.cta"),
  //     onButtonClick: () => (window.location.href = "/request-for-business"),
  //   },
  //   {
  //     title: t("featureSection.items.qr.title"),
  //     description: t("featureSection.items.qr.desc"),
  //     icon: QrCode,
  //     buttonText: t("featureSection.items.qr.cta"),
  //     onButtonClick: () => (window.location.href = "/request-for-business"),
  //   },
  //   {
  //     title: t("featureSection.items.passkey.title"),
  //     description: t("featureSection.items.passkey.desc"),
  //     icon: Key,
  //     buttonText: t("featureSection.items.passkey.cta"),
  //     onButtonClick: () => (window.location.href = "/request-for-business"),
  //   },
  // ];

  return (
    <div className="h-full bg-gradient-to-tl from-black to-darkGreen p-6 md:p-12">
      <div className="max-w-screen-xl mx-auto">
        <ContactPopup
          isOpen={isContactOpen}
          setIsOpen={() => setIsContactOpen(false)}
        />

        {/* Header */}
        <div className="mb-16">
          <motion.h1
            className="inline-block bg-white bg-opacity-10 text-white px-4 py-2 rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-xl text-sm font-bold mb-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* {t("featureSection.tag")} */}
            FEATHER
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight lg:w-1/2 w-full">
              {/* {t("featureSection.title")} */}A complete stablecoin payment
              stack for building, integrating, and scaling globally.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xl md:text-2xl text-textGreen font-medium">
              {/* {t("featureSection.subtitle")} */}
              Fast, low-cost, and scalable
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-center">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ rotateX: -90, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StablecoinPaymentSection;
