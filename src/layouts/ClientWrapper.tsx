"use client"
import { LanguageProvider } from "@/contexts/LanguageContext";
import "@/lib/i18n"; // Import i18n configuration to initialize it

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
