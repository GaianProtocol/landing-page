"use client";

import Section_First from "./Section_First";

export default function HeroSection() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        zIndex: 10,
      }}
    >
      <Section_First />
    </div>
  );
}
