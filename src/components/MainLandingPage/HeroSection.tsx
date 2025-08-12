"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Section_First from "./Section_First";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const [vh, setVh] = useState(0);

  useEffect(() => {
    setVh(window.innerHeight);
  }, []);

  const fadeDistance = vh * 0.6;

  const opacity = useTransform(scrollY, [0, fadeDistance || 1], [1, 0]);
  const scale = useTransform(scrollY, [0, fadeDistance || 1], [1, 0.95]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        opacity,
        scale,
        zIndex: 10,
      }}
    >
      <Section_First />
    </motion.div>
  );
}
