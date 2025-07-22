"use client";
import LabelTag from "@/components/Text/TextTitleSection";
import { motion } from "framer-motion";
import { useState } from "react";
const faqData = [
  {
    id: 1,
    number: "001",
    questionKey: "What is Gaian?",
    answerKey:
      "Gaian is a stablecoin-based financial infrastructure that helps businesses reach unbanked users across emerging markets...",
  },
  {
    id: 2,
    number: "002",
    questionKey: "How long do projects typically take?",
    answerKey:
      "Project timelines vary depending on complexity and requirements. Typically, simple integrations take 2–4 weeks... ",
  },
  {
    id: 3,
    number: "003",
    questionKey:
      "Do users or business need a crypto wallet to use app or infrastructure?",
    answerKey:
      "No, users don't need an existing crypto wallet. Our infrastructure provides embedded wallet solutions...",
  },
];
// const faqData = [
//   {
//     id: 1,
//     number: "001",
//     questionKey: "faqSection.items.001.question",
//     answerKey: "faqSection.items.001.answer",
//   },
//   {
//     id: 2,
//     number: "002",
//     questionKey: "faqSection.items.002.question",
//     answerKey: "faqSection.items.002.answer",
//   },
//   {
//     id: 3,
//     number: "003",
//     questionKey: "faqSection.items.003.question",
//     answerKey: "faqSection.items.003.answer",
//   },
// ];
const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(1);

  // const { t } = useTranslation();

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          {/* Left Side - Header */}
          <div className="w-full md:w-1/2 text-center md:text-start">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* <LabelTag title={t("faqSection.tag")} /> */}
              <LabelTag title={"FAQ "} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-gray/40">
                  {/* {t("faqSection.title.main")} */}
                  Got Questions?
                </span>
                <br />
                <span className="text-darkGreen">
                  {" "}
                  {/* {t("faqSection.title.highlight")} */}
                  We&apos;ve Got Answers!
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            {faqData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    openItem === item.id
                      ? "border-darkGreen bg-green-50"
                      : "border-darkGreen bg-transparent"
                  }`}
                >
                  {/* Question Row */}
                  <div
                    onClick={() => toggleItem(item.id)}
                    className={`cursor-pointer flex items-center justify-between p-3 transition-colors duration-300 ${
                      openItem === item.id
                        ? "bg-textGreen/50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {/* Left: Number + Question */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-md text-lg font-bold ${
                          openItem === item.id
                            ? "bg-transparent text-black"
                            : "bg-transparent text-green-900"
                        }`}
                      >
                        {item.number}
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-800">
                        {/* {t(item.questionKey)} */}
                        {item.questionKey}
                      </h3>
                    </div>

                    {/* Icon */}
                    <div className="ml-4 flex-shrink-0">
                      {openItem === item.id ? (
                        <svg
                          className="w-6 h-6 text-gray-600 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6 text-gray-600 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Answer Section */}
                </div>
                <div
                  className={`mt-2 transition-all duration-500 ease-in-out ${
                    openItem === item.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 pt-4 bg-darkGreen rounded-xl">
                    <p className="text-sm font-light md:text-base leading-relaxed text-textGreen">
                      {/* {t(item.answerKey)} */}
                      {item.answerKey}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
