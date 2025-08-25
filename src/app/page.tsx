import Section_First from "@/components/MainLandingPage/Section_First";
import StablecoinPaymentSection from "@/components/MainLandingPage/Section_Second";
import Section_Third from "@/components/MainLandingPage/Section_Third";
import SectionFour from "@/components/MainLandingPage/Section_Four";
import FaqSection from "@/components/MainLandingPage/FAQ_v2";
import HeroSection from "@/components/MainLandingPage/HeroSection";

export const revalidate = false;

export default function Home() {
  return (
    <div className="mx-auto z-0 w-full flex flex-col relative max-w-screen-4xl">
      <div className="relative">
        <HeroSection />
        <StablecoinPaymentSection />
        <Section_Third />
        <SectionFour />
        <FaqSection />
      </div>
    </div>
  );
}
