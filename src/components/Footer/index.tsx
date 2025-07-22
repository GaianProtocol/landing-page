import Image from "next/image";
import Link from "next/link";
import { LinkedIn, Telegram, X } from "@/assets/svgs"; // Assuming these are SVG components
import LogoSVG from "@/assets/svgs/logo.svg"; // Assuming this is an SVG component

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-t from-textGreen to-slate-100">
      {" "}
      {/* Removed bg-gradient-to-t from here */}
      {/* Footer Decord (Background Image) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/bg-section-1/footer-decord.webp"}
          alt="Footer Decoration"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Content Wrapper with higher z-index */}
      <div className="relative z-10">
        {/* Background curve */}
        {/* This div is now explicitly within the z-10 stacking context */}
        <div className="w-full h-28 bg-white rounded-b-full" />

        {/* Footer Content */}
        <div className="max-w-screen-xl mx-auto px-10 py-20">
          <div className="flex flex-col justify-between h-full gap-10">
            {/* Top: Logo + Social */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex flex-col items-start gap-2">
                <Link href="/" className="cursor-pointer">
                  <Image
                    src={LogoSVG || "/placeholder.svg"}
                    className="w-52"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="flex w-[500px] flex-col md:flex-row gap-8 text-sm text-gray-800 mt-5 md:mt-0 items-stretch">
                {/* Product Column */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-col items-start gap-6 h-full">
                    <h3 className="text-xl font-bold text-darkGreen mb-2">
                      Product
                    </h3>
                    <Link
                      href="https://app.gaian.network"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      Payment DApp
                    </Link>
                    <Link
                      href="https://app.gaian.network/scan-qr"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      QR Scanner
                    </Link>
                    <Link
                      href="https://developer.gaian.network/"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      QR Payment SDK
                    </Link>
                    <Link
                      href="/request-for-business"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      On Ramp By Passkey
                    </Link>
                  </div>
                </div>
                {/* Legal Column */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-col items-start gap-6 h-full">
                    <h3 className="text-xl font-bold text-darkGreen mb-2">
                      Legal
                    </h3>
                    <Link
                      href="https://developer.gaian.network/privacy-policy-1"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="https://developer.gaian.network/privacy-policy/terms-of-service"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      href="https://developer.gaian.network/refund-and-cancellation"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      Refund and Cancellation
                    </Link>
                    {/* Social Media Icons - Mobile Only */}
                    <div className="block md:hidden gap-3 mt-4">
                      <div className="flex items-center gap-3">
                        <Link
                          href="https://t.me/+nhhc0rADb-tiNmU1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center rounded-sm bg-darkGreen hover:bg-darkGreen/60 transition-colors"
                        >
                          <Image
                            src={Telegram || "/placeholder.svg"}
                            alt="Telegram"
                            className="w-4 h-4"
                          />
                        </Link>
                        <Link
                          href="https://x.com/Gaian_hq"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center rounded-sm bg-darkGreen hover:bg-darkGreen/60 transition-colors"
                        >
                          <Image
                            src={X || "/placeholder.svg"}
                            alt="Twitter X"
                            className="w-4 h-4"
                          />
                        </Link>
                        <Link
                          href="https://www.linkedin.com/company/gaian-hq/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center rounded-sm bg-darkGreen hover:bg-darkGreen/60 transition-colors"
                        >
                          <Image
                            src={LinkedIn || "/placeholder.svg"}
                            alt="LinkedIn"
                            className="w-4 h-4"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom: Links + Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between border-t border-darkGreen/50 pt-6 gap-6">
              <span className="text-sm text-primary font-light tracking-wide uppercase text-center md:text-left">
                © 2025 Gaian. All rights reserved.
              </span>
              <div className="hidden md:block gap-3">
                <div className="flex items-center gap-3">
                  <Link
                    href="https://t.me/+nhhc0rADb-tiNmU1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-sm bg-darkGreen/80 hover:bg-darkGreen transition-colors"
                  >
                    <Image
                      src={Telegram || "/placeholder.svg"}
                      alt="Telegram"
                      className="w-4 h-4"
                    />
                  </Link>
                  <Link
                    href="https://x.com/Gaian_hq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-sm bg-darkGreen/80 hover:bg-darkGreen transition-colors"
                  >
                    <Image
                      src={X || "/placeholder.svg"}
                      alt="Twitter X"
                      className="w-4 h-4"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/gaian-hq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-sm bg-darkGreen/80 hover:bg-darkGreen transition-colors"
                  >
                    <Image
                      src={LinkedIn || "/placeholder.svg"}
                      alt="LinkedIn"
                      className="w-4 h-4"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
