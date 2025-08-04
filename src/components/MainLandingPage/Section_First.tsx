"use client";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type AnimatedWordProps = {
  word: string;
  baseDelay?: number;
  className?: string;
};

export const AnimatedWord = ({
  word,
  baseDelay = 0,
  className = "",
}: AnimatedWordProps) => {
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);

  useEffect(() => {
    setHasAnimatedOnce(true);
  }, []);

  const shouldAnimate = !hasAnimatedOnce;

  return (
    <span className="inline-flex" key={word}>
      {word.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`} // đảm bảo remount từng chữ
          initial={shouldAnimate ? { opacity: 0, y: 40 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
          transition={{
            duration: 0.5,
            delay: baseDelay + index * 0.02,
            ease: "easeOut",
          }}
          className={`inline-block ${className}`}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const Section_First = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  // Dynamic changing words using translations
  const changingWords = [
    t('heroSection.title.Business'),
    t('heroSection.title.Everyone'),
  ];

  // 2. Tách riêng logic show lần đầu
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // 1. Cho logic changingWord tách riêng
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % changingWords.length;
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [changingWords.length]);

  return (
    <section className="relative flex flex-col items-center md:items-start justify-center h-screen w-full bg-section-bg-2 bg-cover bg-center px-4 py-16 overflow-hidden">
      <div className="max-w-screen-xl text-center md:text-start md:px-16 z-30">
        {/* Main Heading */}
        <h1 className="flex flex-row items-center justify-start gap-1 text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 md:mb-5 leading-tight">
          <span className="">
            <AnimatedWord
              word={t('heroSection.title.The')}
              baseDelay={0.2}
              className="text-gray/50"
            />
          </span>
          <span className="inline-block text-white px-4 py-2 rounded-lg">
            <AnimatedWord
              word={t('heroSection.title.Neobank')}
              baseDelay={0.3}
              className="text-darkGreen"
            />
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="flex flex-row md:flex-row md:gap-4 font-bold text-gray-800 mb-5 md:mb-10 w-full lig">
          <span className="mt-1 mr-3">
            <AnimatedWord
              word={t('heroSection.title.For')}
              baseDelay={0.4}
              className="text-gray/50 text-5xl md:text-7xl lg:text-8xl tracking-wider mt-2"
            />
          </span>

          {/* Animated word container - Simplified */}
          <div className="relative w-full md:w-auto flex justify-center md:justify-start">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={
                isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="relative bg-darkGreen text-textGreen px-2 py-1 rounded-lg inline-block"
            >
              <div className="relative overflow-hidden h-[70px] md:h-[120px] flex items-center justify-center min-w-[220px] md:min-w-[450px]">
                <AnimatePresence mode="wait" key={changingWords[currentIndex]}>
                  <motion.h1
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="inset-0 flex items-center justify-center font-semibold text-5xl md:text-7xl lg:text-8xl text-textGreen whitespace-nowrap"
                  >
                    {changingWords[currentIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </h2>

        {/* CTA Buttons */}
        <motion.div className="flex flex-row gap-2 justify-center md:justify-start ">
          <ButtonPrimary
            className="h-[50px] md:h-[60px] flex items-center"
            onClick={() => (window.location.href = "/request-for-business")}
          >
            <span className="px-4 text-sm md:text-2xl text-black uppercase font-semibold z-10 transition-all duration-300 ease-out">
              {t('heroSection.requestBusiness')}
            </span>
          </ButtonPrimary>

          <ButtonPrimary
            className="h-[50px] md:h-[60px] group flex items-center bg-textGreen shadow-[inset_0_4px_6px_rgb(216,242,196)] relative overflow-hidden transition-all duration-500 ease-out hover:shadow-[0px_4px_4px_0px_rgba(15,64,12,0.30)] hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => window.open("https://app.gaian.network", "_blank")}
          >
            <span className="px-4 text-sm md:text-2xl text-black uppercase font-semibold z-10 transition-all duration-300 ease-out">
              {t('heroSection.launchApp')}
            </span>

            {/* Icon wrapper with smooth width transition */}
            <span className="hidden md:block overflow-hidden transition-all duration-300 ease-out max-w-0 group-hover:max-w-[40px] group-hover:mr-2">
              <ArrowUpRight
                className="w-full h-full bg-darkGreen rounded-md p-2"
                color="#9FE870"
              />
            </span>
          </ButtonPrimary>
        </motion.div>
      </div>

      {/* Decor Section */}
      {/* Decor Section */}
      <div className="absolute top-12 inset-0 z-10 flex justify-between items-center pointer-events-none">
        {/* Left Image */}
        <div className="w-1/2 h-full relative">
          {/* Desktop */}
          <div className="hidden md:block w-full h-full absolute -left-10">
            <Image
              src="/bg-section-1/Left.webp"
              alt="Left decor"
              fill
              priority
              className="object-cover object-left"
              sizes="50vw"
            />
          </div>
          {/* Mobile */}
          <div className="block md:hidden w-full h-full absolute left-0">
            <Image
              src="/bg-section-1/Left-mobile.webp"
              alt="Left decor mobile"
              fill
              priority
              className="object-cover object-left"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 h-full relative">
          {/* Desktop */}
          <div className="hidden md:block w-full h-full absolute -right-10">
            <Image
              src="/bg-section-1/Right.webp"
              alt="Right decor"
              fill
              priority
              className="object-fill object-right"
              sizes="50vw"
            />
          </div>
          {/* Mobile */}
          <div className="block md:hidden w-full h-full absolute right-0">
            <Image
              src="/bg-section-1/Right-mobile.webp"
              alt="Right decor mobile"
              fill
              priority
              className="object-fill object-right"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_First;
