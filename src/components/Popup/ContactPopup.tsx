'use client'
import { TelegramWhite } from "@/assets/svgs";
import { ArrowRight, Mail, Users, X } from "lucide-react";
import Image from "next/image";

interface ContactPopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ContactPopup = ({ isOpen, setIsOpen }: ContactPopupProps) => {
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
                    Join the Project
                  </h2>
                  <p className="text-sm md:block hidden">
                    Contact us to be added to the project
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
                  Contact Fay Nguyen
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-xs">
                  To be added to the GitHub project and receive updates via
                  email, please reach out through one of the methods below:
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
                    <div className="font-semibold text-white">Telegram</div>
                    <div className="text-sm text-white underline">
                      @Faynguyen071
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
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-sm text-blue-400 underline">
                      info@gaian.network
                    </div>
                  </div>
                  <ArrowRight size={20} color="#9FE870" />
                </button>
              </div>

              {/* Footer Note */}
              <div className="bg-gray-50 p-4 rounded-lg text-center text-sm text-gray-600">
                💡 <strong>Note:</strong> Please include your purpose for
                joining the project when reaching out.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPopup;
