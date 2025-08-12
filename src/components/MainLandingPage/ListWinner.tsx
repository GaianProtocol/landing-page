"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import SectionFour from "@/components/MainLandingPage/Section_Four";
import { useRef } from "react";

export default function SectionFourWrapper() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    // "start end": khi top của section chạm bottom viewport
    // "end start": khi bottom của section chạm top viewport
  });

  // Fade in khi từ 0 -> 0.3, fade out khi 0.7 -> 1
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Scale nhẹ khi xuất hiện
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);

  return (
    <section ref={ref} className="relative h-[100vh]">
      <motion.div
        style={{
          opacity,
          scale,
        }}
        className="h-full"
      >
        <SectionFour />
      </motion.div>
    </section>
  );
}
