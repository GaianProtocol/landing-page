"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutClient() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-green-50 text-gray-800 pt-16">
      {/* Top Section */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-darkGreen">
              {t('aboutPage.title')}
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-md">
              {t('aboutPage.subtitle')}
            </p>
          </div>

          {/* Right Images */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 md:mt-0">
            {/* Image 1 (Top) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:right-0 w-[280px] h-[180px] md:w-[350px] md:h-[220px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/about/image-1.jpg"
                alt="Gaian team collaboration"
                width={350}
                height={220}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Image 2 (Middle Left) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[200px] h-[130px] md:w-[250px] md:h-[160px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/about/image-2.jpg"
                alt="Technology innovation"
                width={250}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Image 3 (Bottom Center) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/4 w-[220px] h-[140px] md:w-[280px] md:h-[180px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/about/image-3.jpg"
                alt="Global connectivity"
                width={280}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Decorative lines for top section images */}
            <div className="absolute top-[20%] left-[10%] w-12 h-px bg-gray-400 transform rotate-45"></div>
            <div className="absolute bottom-[20%] right-[10%] w-16 h-px bg-gray-400 transform -rotate-30"></div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="w-full max-w-[400px] h-[300px] md:h-[450px] bg-gray-100 rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/about/image-4.jpg"
                alt="Our mission in action"
                width={400}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative lines for bottom section image */}
            <div className="absolute top-[15%] left-[5%] w-16 h-px bg-gray-400 transform -rotate-30"></div>
            <div className="absolute bottom-[10%] right-[5%] w-20 h-px bg-gray-400 transform rotate-45"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-darkGreen">
                {t('aboutPage.mission.title')}
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                {t('aboutPage.mission.description')}
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-darkGreen">
                {t('aboutPage.value.title')}
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                {t('aboutPage.value.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
