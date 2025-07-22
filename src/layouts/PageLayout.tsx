import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      // style={{
      //   background: "linear-gradient(180deg, #080A07 0%, #0C0F0B 100%)",
      // }}
      className="relative min-h-screen"
    >
      {children}
    </div>
  );
}
