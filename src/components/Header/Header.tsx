"use client"; // Make it a client component
import { gsap } from "gsap";
import { ChevronRight, ChevronUp, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import ContactPopup from "../Popup/ContactPopup";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogoSVG } from "@/assets/svgs";
import { cn } from "@/utils/cn";

type TabItem = {
  id: string;
  name: string;
  submenu?: { id: string; name: string; href: string }[];
  isPopup?: boolean;
  href?: string;
};

const TAB = [
  {
    id: "Product",
    name: "Product",
    submenu: [
      {
        id: "paymentDapp",
        name: "Payment Dapp",
        href: "https://app.gaian.network/",
      },
      {
        id: "qrScanner",
        name: "QR Scanner",
        href: "https://app.gaian.network/scan-qr",
      },
    ],
  },
  { id: "Developers", name: "Developers", isPopup: true },
  {
    id: "About",
    name: "About",
    submenu: [
      { id: "whyGaian", name: "Why Gaian", href: "/about" },
      {
        id: "brandkit",
        name: "Brandkit",
        href: "https://www.figma.com/design/1QAkCQg2VJBfbqjoD40piO/Gaian-Brand-Kit?node-id=0-1&t=0R9KlhPYK71lZadO-1",
      },
    ],
  },
  { id: "Blog", name: "Blog", href: "/blog" },
  {
    id: "Support",
    name: "Support",
    submenu: [
      {
        id: "telegram",
        name: "Telegram",
        href: "https://t.me/+nhhc0rADb-tiNmU1",
      },
      { id: "email", name: "Email", href: "mailto:tech@gaian.network" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const mobileMenuRef = useRef(null);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: "-100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power4.out" }
      );
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      });
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleMenuItemClick = (item: TabItem) => {
    if (item.id === "Blog") {
      window.location.href = "/blog";
      setMobileMenuOpen(false);
      return;
    }
    if (item.isPopup) {
      setShowContactPopup(true);
      setMobileMenuOpen(false);
    } else {
      alert("Feature in development");
    }
  };

  const toggleSubmenu = (itemId: string) => {
    setExpandedSubmenu((prev) => (prev === itemId ? null : itemId));
  };

  const handleSubmenuClick = (href: string) => {
    if (href.startsWith("http")) {
      window.location.href = href; // ✅ hard reload
    } else {
      router.push(href); // ✅ Next.js navigation
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full fixed z-10 top-0 border-b-2 bg-white font-geist">
      <div className="max-w-screen-lg h-[70px] mx-auto px-2 md:px-4 flex justify-between items-center w-full top-0 z-[1000] backdrop-blur-[20px] md:backdrop-blur-none">
        {/* Left section: Logo */}
        <div className="flex relative flex-row items-center h-full">
          <Link href="/">
            <Image
              src={LogoSVG || "/placeholder.svg"}
              className="w-[147.42px] h-auto cursor-pointer"
              alt={"Gaian Network"}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center ml-7 h-full relative justify-center gap-7 px-2 rounded-2xl backdrop-blur-[20px]">
          {TAB.map((item) =>
            item.submenu ? (
              <div key={item.id} className="relative group h-full">
                <button className="text-[#626566] hover:text-primary hover:font-bold font-semibold tracking-[-0.005em] text-base px-4 py-2.5 h-full flex items-center font-geist transition-all">
                  {item.id}
                  <ChevronUp className="invisible ml-2 w-4 h-4 transition-transform group-hover:visible group-hover:rotate-180 duration-200" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-60 bg-white border border-green-100 rounded-xl shadow-xl z-50 opacity-0 invisible scale-90 translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 ease-out overflow-hidden">
                  <div className="p-2">
                  {item.submenu.map((sub) => (
                    <a
                      key={sub.id}
                      href={sub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-sm text-gray-800 hover:text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:translate-x-1 transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] rounded-xl transform opacity-0 translate-y-5 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                    >
                      <span className="font-medium">{sub.name}</span>
                      <ChevronRight className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-transform duration-150" />
                    </a>
                  ))}
                  </div>
                </div>
                <div
                  className={cn(
                    "absolute bottom-[-1px] transition-all bg-primary rounded-t-2xl duration-300 ease-in-out left-1/2 -translate-x-1/2 -ml-2.5 w-[58px] h-[3px] blur-[0.55px] opacity-0 group-hover:opacity-100"
                  )}
                ></div>
              </div>
            ) : (
              <button
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMenuItemClick(item);
                }}
                className="relative h-full group"
              >
                <div
                  className={cn(
                    "text-base relative rounded-xl h-full px-4 py-2.5 flex justify-center items-center font-geist",
                    "text-[#626566]",
                    "text-base font-normal tracking-[-0.005em]",
                    "transition-all duration-300 ease-in-out hover:text-primary hover:font-bold font-semibold "
                  )}
                >
                  {item.id}
                </div>
                <div
                  className={cn(
                    "absolute bottom-[-1px] transition-all bg-primary rounded-t-2xl duration-300 ease-in-out left-1/2 -translate-x-1/2 w-[58px] h-[3px] blur-[0.55px] opacity-0 group-hover:opacity-100"
                  )}
                ></div>
              </button>
            )
          )}
        </div>

        {/* Right section: Desktop Button & Mobile Menu Button */}
        <div className="relative flex justify-end items-center gap-4">
          <a
            href="https://app.gaian.network/"
            target="_blank"
            className="hidden lg:block"
            rel="noreferrer"
          >
            <ButtonPrimary className="px-4 py-2">
              <span className="text-black uppercase font-geist text-xl font-semibold">
                Scan To Pay
              </span>
            </ButtonPrimary>
          </a>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 hover:bg-darkGreen bg-darkGreen/50 rounded-lg transition-colors"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 md:hidden overflow-y-auto"
        style={{ transform: "translateX(-100%)", opacity: 0 }}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <Image
              src={LogoSVG || "/placeholder.svg"}
              className="w-[120px] h-auto"
              alt=""
              priority
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-2">
            {TAB.map((item) => (
              <div key={item.id} className="border-b border-gray-100 pb-2">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.id)}
                      className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <span className="font-medium text-gray-800">
                        {item.id}
                      </span>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 transition-transform",
                          expandedSubmenu === item.id ? "rotate-90" : ""
                        )}
                      />
                    </button>
                    {expandedSubmenu === item.id && (
                      <div className="ml-4 mt-2 space-y-1 bg-blue-50 p-2 rounded-md">
                        {" "}
                        {item.submenu.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleSubmenuClick(sub.href)}
                            className="w-full text-left p-2 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleMenuItemClick(item)}
                    className="w-full text-left p-3 font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.id}
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup isOpen={showContactPopup} setIsOpen={setShowContactPopup} />
    </div>
  );
}

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 7H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 12H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 17H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
