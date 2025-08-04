'use client'
import { TelegramWhite } from "@/assets/svgs";
import { ArrowRight, Mail, Users, X } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ContactPopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ContactPopup = ({ isOpen, setIsOpen }: ContactPopupProps) => {
  const { t } = useTranslation();
  const handleTeleClick = () => {
    window.open("https://t.me/Faynguyen071", "_blank");
  };

  const handleEmailClick = () => {
    window.open(
      "mailto:info@gaian.network?subject=Join%20the%20Project",
      "_blank"
    );
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-section-bg-2 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-sm mx-4 overflow-y-auto max-h-[90vh] transform animate-in fade-in-0 zoom-in-95 duration-300">
            {/* Header */}
            <div className="bg-white to-blue-500 p-2 md:p-6 text-darkGreen relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full transition-colors duration-200"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-lg font-bold">
                    {t("contactPopup.title")}
                  </h2>
                  <p className="text-sm md:block hidden">
                    {t("contactPopup.subtitle")}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-2 md:p-6 space-y-3">
              {/* Main Message */}
              <div className="text-center space-y-3">
                <div className="w-16 h-16 sm:w-14 sm:h-14 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <ArrowRight size={28} className="text-green-600" />
                </div>
                <h3 className="text-lg sm:text-base font-semibold text-gray-800">
                  {t("contactPopup.contactPerson")}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-xs">
                  {t("contactPopup.description")}
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-3">
                {/* Telegram */}
                <button
                  onClick={handleTeleClick}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 sm:p-3 rounded-lg flex items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-10 h-10 sm:w-9 sm:h-9 bg-white/10 rounded-full flex items-center justify-center">
                    <Image src={TelegramWhite} alt="tele" className="w-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-white">{t("contactPopup.telegram.title")}</div>
                    <div className="text-sm text-white underline">
                      {t("contactPopup.telegram.handle")}
                    </div>
                  </div>
                  <ArrowRight size={20} color="#9FE870" />
                </button>

                {/* Email */}
                <button
                  onClick={handleEmailClick}
                  className="w-full bg-darkGreen/80 hover:bg-darkGreen text-white p-4 sm:p-3 rounded-lg flex items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-10 h-10 sm:w-9 sm:h-9 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail size={20} color="#9FE870" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-white">{t("contactPopup.email.title")}</div>
                    <div className="text-sm text-blue-400 underline">
                      {t("contactPopup.email.address")}
                    </div>
                  </div>
                  <ArrowRight size={20} color="#9FE870" />
                </button>
              </div>

              {/* Footer Note */}
              <div className="bg-gray-50 p-4 rounded-lg text-center text-sm text-gray-600">
                💡 <strong>{t("contactPopup.note.title")}:</strong> {t("contactPopup.note.description")}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPopup;
