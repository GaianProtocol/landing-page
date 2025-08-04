"use client"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
// Assuming these are paths to SVG files, not React components, as used with next/image src prop
import { LinkedIn, Telegram, X } from "@/assets/svgs"
import LogoSVG from "@/assets/svgs/logo.svg"

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-t from-textGreen to-slate-100 z-0">
      {/* Footer Decord (Background Image) */}
      <div className="absolute inset-0">
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
                    width={208} // Inferred from w-52 (208px)
                    height={50} // Estimated height
                  />
                </Link>
              </div>
              <div className="flex w-[500px] flex-col md:flex-row gap-8 text-sm text-gray-800 mt-5 md:mt-0 items-stretch">
                {/* Product Column */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-col items-start gap-6 h-full">
                    <h3 className="text-xl font-bold text-darkGreen mb-2">{t("footer.product.title")}</h3>
                    <Link
                      href="https://app.gaian.network"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      {t("footer.product.paymentDApp")}
                    </Link>
                    <Link
                      href="https://app.gaian.network/scan-qr"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      {t("footer.product.qrScanner")}
                    </Link>
                    <Link
                      href="https://developer.gaian.network/"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      {t("footer.product.qrPaymentSDK")}
                    </Link>
                    <Link
                      href="/request-for-business"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      {t("footer.product.onRampByPasskey")}
                    </Link>
                  </div>
                </div>
                {/* Legal Column */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-col items-start gap-6 h-full">
                    <h3 className="text-xl font-bold text-darkGreen mb-2">{t("footer.legal.title")}</h3>
                    <Link
                      href="https://developer.gaian.network/privacy-policy-1"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      {t("footer.legal.privacyPolicy")}
                    </Link>
                    <Link
                      href="https://developer.gaian.network/privacy-policy/terms-of-service"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      {t("footer.legal.termsOfService")}
                    </Link>
                    <Link
                      href="https://developer.gaian.network/refund-and-cancellation"
                      className="cursor-pointer text-base font-light hover:text-green-700 transition-colors hover:underline"
                    >
                      {t("footer.legal.refundAndCancellation")}
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
                            width={16} // Inferred from w-4
                            height={16} // Inferred from h-4
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
                            width={16} // Inferred from w-4
                            height={16} // Inferred from h-4
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
                            width={16} // Inferred from w-4
                            height={16} // Inferred from h-4
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
                {t("footer.copyright")}
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
                      width={16} // Inferred from w-4
                      height={16} // Inferred from h-4
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
                      width={16} // Inferred from w-4
                      height={16} // Inferred from h-4
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
                      width={16} // Inferred from w-4
                      height={16} // Inferred from h-4
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
