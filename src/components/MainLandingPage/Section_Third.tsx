"use client";

import {
  animoca_brands,
  phantom,
  squads,
  superteam,
  superteamvn,
  tether,
  circle,
} from "@/assets/logo-partner";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import LabelTag from "@/components/Text/TextTitleSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const testimonials = [
  {
    id: 1,
    name: "Tether Asia",
    handle: "@Tether_APAC",
    logo_worker: "/bg-section-1/tether.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1879916085371105280/5hgApmLp_400x400.png",
    text: "USD₮ on @solana is now live on @Gaian_hq",
    height: "h-32",
    href: "https://x.com/Tether_APAC/status/1929372447058301339",
  },
  {
    id: 2,
    name: "k2 | superteam 🇻🇳 🇬🇧",
    handle: "@0xk2_",
    avatar:
      "https://pbs.twimg.com/profile_images/1782916325544767488/nuWf-EUh_x96.jpg",
    text: "Use @Gaian_hq to pay for a dinner with a Fintech partner and it just works flawlessly. A win for superteam startup is a win for @solana!",
    height: "h-48",
    href: "https://x.com/0xk2_/status/1940432259561275394",
  },
  {
    id: 3,
    name: "0racle",
    handle: "@0racle0racle",
    logo_worker: "/bg-section-1/magic-eden.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1815581196560244736/aDQmpae8_400x400.jpg",
    text: "I helped this guys to pay and get T-shirt by stablecoin through @Gaian_hq",
    height: "h-64",
    href: "https://x.com/Gaian_hq/status/1930878616377958864",
  },
  {
    id: 4,
    name: "Adam",
    logo_worker: "/bg-section-1/phantom.png",
    handle: "@adamdelphantom",
    avatar:
      "https://pbs.twimg.com/profile_images/1904899927961899008/scqtUhD-_x96.jpg",
    text: "App Page for @Gaian_hq looking good here",
    height: "h-56",
    href: "https://x.com/adamdelphantom/status/1930369041840910405",
  },
  {
    id: 5,
    name: "metasal 🇦🇺",
    handle: "@metasal_",
    logo_worker: "/bg-section-1/squads.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1917530332145807360/LgkIGAjO_x96.jpg",
    text: "Have you tried @Gaian_hq Refer new users & earn commission on their deposits🙌",
    height: "h-64",
    href: "https://x.com/metasal_/status/1927985713053659210",
  },
  {
    id: 6,
    name: "venture (wallet/acc)",
    handle: "@0x_venture",
    logo_worker: "/bg-section-1/phantom.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1885062190366928896/QTNHf85J_x96.jpg",
    text: "Using gaian to pay in Vietnam with your @phantom wallet Now you don't need to be banked Unbanked in Vietnam is now possible",
    height: "h-56",
    href: "https://x.com/0x_venture/status/1924446115610636548",
  },
  {
    id: 7,
    name: "Nic | sanctum",
    handle: "@NicFuryyy",
    logo_worker: "/bg-section-1/sanctum.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1904883027735699459/aiznBPv8_400x400.jpg",
    text: "thanks for the recommendation ser! speaking of QR pay, @Elie_gant @Gaian_hq is already doing it in Vietnam! 🇻🇳",
    height: "h-32",
    href: "https://x.com/NicFuryyy/status/1933074753335799966",
  },
  {
    id: 8,
    name: "Perena",
    handle: "@Perena__",
    logo_worker: "/bg-section-1/perena.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1873746095765135360/utMTqiFJ_x96.jpg",
    text: "4. Pay – Real-world utility\n On-chain payments are catching up to traditional finance - and in many cases, surpassing it. \nPartners:\n @Gaian_hq – On/off-ramp infrastructure powering stablecoin adoption in Southeast Asia.",
    height: "h-48",
    href: "https://x.com/Perena__/status/1937924370753851506",
  },
  {
    id: 9,
    name: "Foundation Ventures",
    handle: "@FoundationVent",
    avatar:
      "https://pbs.twimg.com/profile_images/1894722004462497792/7GI30Dmy_x96.jpg",
    text: "Gaian Network is a borderless payment solution that enables transactions across countries using multiple stablecoins, with seamless conversion between crypto and fiat. Via QR codes & launched in Vietnam and expanding across APAC",
    height: "h-32",
    href: "https://x.com/FoundationVent/status/1942323788559048726",
  },
  {
    id: 10,
    name: "Tether Asia",
    handle: "@Tether_APAC",
    logo_worker: "/bg-section-1/tether.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1879916085371105280/5hgApmLp_400x400.png",
    text: "USD₮ on @solana is now live on @Gaian_hq",
    height: "h-32",
    href: "https://x.com/Tether_APAC/status/1929372447058301339",
  },
  {
    id: 11,
    name: "k2 | superteam 🇻🇳 🇬🇧",
    handle: "@0xk2_",
    avatar:
      "https://pbs.twimg.com/profile_images/1782916325544767488/nuWf-EUh_x96.jpg",
    text: "Use @Gaian_hq to pay for a dinner with a Fintech partner and it just works flawlessly. A win for superteam startup is a win for @solana!",
    height: "h-48",
    href: "https://x.com/0xk2_/status/1940432259561275394",
  },
  {
    id: 12,
    name: "0racle",
    handle: "@0racle0racle",
    logo_worker: "/bg-section-1/magic-eden.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1815581196560244736/aDQmpae8_400x400.jpg",
    text: "I helped this guys to pay and get T-shirt by stablecoin through @Gaian_hq",
    height: "h-64",
    href: "https://x.com/Gaian_hq/status/1930878616377958864",
  },
  {
    id: 13,
    name: "Adam",
    logo_worker: "/bg-section-1/phantom.png",
    handle: "@adamdelphantom",
    avatar:
      "https://pbs.twimg.com/profile_images/1904899927961899008/scqtUhD-_x96.jpg",
    text: "App Page for @Gaian_hq looking good here",
    height: "h-56",
    href: "https://x.com/adamdelphantom/status/1930369041840910405",
  },
  {
    id: 14,
    name: "metasal 🇦🇺",
    handle: "@metasal_",
    logo_worker: "/bg-section-1/squads.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1917530332145807360/LgkIGAjO_x96.jpg",
    text: "Have you tried @Gaian_hq Refer new users & earn commission on their deposits🙌",
    height: "h-64",
    href: "https://x.com/metasal_/status/1927985713053659210",
  },
  {
    id: 15,
    name: "venture (wallet/acc)",
    handle: "@0x_venture",
    logo_worker: "/bg-section-1/phantom.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1885062190366928896/QTNHf85J_x96.jpg",
    text: "Using gaian to pay in Vietnam with your @phantom wallet Now you don't need to be banked Unbanked in Vietnam is now possible",
    height: "h-56",
    href: "https://x.com/0x_venture/status/1924446115610636548",
  },
  {
    id: 16,
    name: "Nic | sanctum",
    handle: "@NicFuryyy",
    logo_worker: "/bg-section-1/sanctum.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1904883027735699459/aiznBPv8_400x400.jpg",
    text: "thanks for the recommendation ser! speaking of QR pay, @Elie_gant @Gaian_hq is already doing it in Vietnam! 🇻🇳",
    height: "h-32",
    href: "https://x.com/NicFuryyy/status/1933074753335799966",
  },
  {
    id: 17,
    name: "Perena",
    handle: "@Perena__",
    logo_worker: "/bg-section-1/perena.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1873746095765135360/utMTqiFJ_x96.jpg",
    text: "4. Pay – Real-world utility\n On-chain payments are catching up to traditional finance - and in many cases, surpassing it. \nPartners:\n @Gaian_hq – On/off-ramp infrastructure powering stablecoin adoption in Southeast Asia.",
    height: "h-48",
    href: "https://x.com/Perena__/status/1937924370753851506",
  },
  {
    id: 18,
    name: "Foundation Ventures",
    handle: "@FoundationVent",
    avatar:
      "https://pbs.twimg.com/profile_images/1894722004462497792/7GI30Dmy_x96.jpg",
    text: "Gaian Network is a borderless payment solution that enables transactions across countries using multiple stablecoins, with seamless conversion between crypto and fiat. Via QR codes & launched in Vietnam and expanding across APAC",
    height: "h-32",
    href: "https://x.com/FoundationVent/status/1942323788559048726",
  },
  {
    id: 19,
    name: "metasal 🇦🇺",
    handle: "@metasal_",
    logo_worker: "/bg-section-1/squads.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1917530332145807360/LgkIGAjO_x96.jpg",
    text: "Have you tried @Gaian_hq Refer new users & earn commission on their deposits🙌",
    height: "h-64",
    href: "https://x.com/metasal_/status/1927985713053659210",
  },
  {
    id: 20,
    name: "venture (wallet/acc)",
    handle: "@0x_venture",
    logo_worker: "/bg-section-1/phantom.png",
    avatar:
      "https://pbs.twimg.com/profile_images/1885062190366928896/QTNHf85J_x96.jpg",
    text: "Using gaian to pay in Vietnam with your @phantom wallet Now you don't need to be banked Unbanked in Vietnam is now possible",
    height: "h-56",
    href: "https://x.com/0x_venture/status/1924446115610636548",
  },
];

const Section_Third = () => {
  const sponsors = [
    { name: "superteam", logo: superteam },
    { name: "CIRCLE", logo: circle },
    { name: "superteamvn", logo: superteamvn },
    { name: "phantom", logo: phantom },
    { name: "tether", logo: tether },
    { name: "SQUADS", logo: squads },
    { name: "animoca", logo: animoca_brands, className: "h-10" },
  ];

  return (
    <div className="bg-green-50 py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* <LabelTag title={t("trustedSection.tag")} /> */}
            <LabelTag title={"TRUSTED BY"} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className=" flex flex-col md:flex-row gap-4 font-bold text-4xl md:text-6xl text-gray-900 mb-8">
              <span className="text-darkGreen">
                {/* {t("trustedSection.headline.strong")}{" "} */}
                Experienced
              </span>
              <span className="text-gray/20">
                {/* {t("trustedSection.headline.rest")} */}
                In The Field From
              </span>
            </h1>
          </motion.div>

          {/* Sponsor logos */}
          <Marquee>
            <div className="flex gap-10 min-w-max whitespace-nowrap mr-10">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-textGreen/40 text-darkGreen/70 px-8 py-5 rounded-xl 
                   text-lg font-medium border border-darkGreen/70 flex items-center justify-center"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`h-6 w-auto object-contain `}
                    // width={100}
                    // height={24}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        <div className="relative max-h-[800px] overflow-hidden">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2">
            {[0, 1, 2, 3].map((colIndex) => (
              <div
                key={colIndex}
                className="overflow-hidden h-[800px] relative"
              >
                <div className="animate-marquee-vertical space-y-6">
                  {testimonials
                    .filter((_, i) => i % 4 === colIndex)
                    .map((testimonial) => (
                      <motion.div
                        key={testimonial.id}
                        initial={{ rotateX: -90, opacity: 0 }}
                        whileInView={{ rotateX: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <div
                          className="bg-green-50 border border-darkGreen/40 rounded-md p-1 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                          onClick={() =>
                            (window.location.href = testimonial.href)
                          }
                        >
                          <div className="flex bg-textGreen/40 rounded-md p-2 items-start space-x-3 mb-4 overflow-hidden">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-10 h-10 rounded-full object-cover"
                              width={40}
                              height={40}
                              loading="lazy"
                            />
                            <div className="min-w-0 flex-1">
                              <h4 className="flex flex-row gap-1 font-semibold text-gray-900 text-sm">
                                {testimonial.name}{" "}
                                {testimonial.logo_worker ? (
                                  <Image
                                    src={testimonial.logo_worker}
                                    alt="logo_worker"
                                    className="w-4 h-4"
                                    width={16}
                                    height={16}
                                    loading="lazy"
                                  />
                                ) : null}
                              </h4>
                              <p className="text-gray-500 text-sm">
                                {testimonial.handle}
                              </p>
                            </div>
                            <div className="text-green-600 text-xl">
                              <Image
                                src="/bg-section-1/x.png"
                                alt="logo X"
                                className="w-auto"
                                width={32}
                                height={32}
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="overflow-hidden px-3">
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {testimonial.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[700px] bg-gradient-to-t from-green-50/100 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Read More Button */}
        <div className="text-center mt-8 flex justify-center">
          <ButtonPrimary
            className="px-4 py-3"
            onClick={() => window.open("https://x.com/Gaian_hq/highlights")}
          >
            {/* {t("trustedSection.button")} */}
            READ MORE
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Section_Third;
