import { ReactNode } from "react";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full relative min-h-screen flex flex-col z-[2] bg-gradient-to-b from-green-50 to-white">
      {children}
    </div>
  );
}
