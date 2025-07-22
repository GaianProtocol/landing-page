import Image from "next/image";

export const metadata = {
  title: "About Gaian | Open Infra for a World in Flow",
  description:
    "Gaian builds the open infrastructure for borderless payment, productivity and wellness. Learn more about our mission, values and team.",
  openGraph: {
    title: "About Gaian",
    description:
      "Redefining work and wellness through open, AI-powered infrastructure.",
    images: [
      {
        url: "/images/about/og-about.jpg", // ảnh OG nếu có
        width: 1200,
        height: 630,
        alt: "About Gaian",
      },
    ],
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 pt-16">
      {/* Top Section */}
      <section className="relative py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-darkGreen">
              About Gaian: Open Infra for a World in Flow
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-md">
              Your environment shouldn’t limit your potential. Gaian builds the
              infrastructure where wellness and productivity coexist — enabling
              developers to create borderless payment experiences, and users to
              move freely with trust and clarity. We’re redefining how the world
              works — openly, collaboratively, and with purpose.
            </p>
            {/* Assuming there's still a button, even if the text is not provided in the new content */}
            {/* <Button className="bg-wellnessty-yellow text-gray-900 hover:bg-wellnessty-yellow/90 px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold shadow-md">
              Learn More
            </Button> */}
          </div>

          {/* Right Images */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-12 md:mt-0">
            {/* Image 1 (Top) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:right-0 w-[280px] h-[180px] md:w-[350px] md:h-[220px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/about/image-1.jpg"
                alt="People working in an office"
                width={350}
                height={220}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Image 2 (Middle Left) */}
            <div className="absolute top-1/3 left-0 w-[220px] h-[150px] md:w-[280px] md:h-[180px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/about/image-4.jpg"
                alt="Two people collaborating on laptops"
                width={280}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Image 3 (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-[250px] h-[170px] md:w-[320px] md:h-[200px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/about/image-2.jpg"
                alt="Person working on a computer"
                width={320}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Decorative lines for top section */}
            {/* <div className="absolute top-[10%] left-[20%] w-20 h-px bg-gray transform rotate-45"></div>
            <div className="absolute top-[40%] right-[10%] w-24 h-px bg-gray transform -rotate-30"></div>
            <div className="absolute bottom-[5%] left-[30%] w-16 h-px bg-gray transform rotate-60"></div> */}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      {/* The diagonal effect is achieved by applying a clip-path to this section. */}
      <section className="relative bg-gradient-to-b from-green-100 to-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden section-diagonal-top">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[450px] flex items-center justify-center mt-12 md:mt-0">
            <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/about/image-3.jpg"
                alt="People in a meeting room"
                width={600}
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
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                At Gaian, we build open, intelligent tools that help people and
                businesses work better, live better, and flow better. From
                embedded payments to developer-first infrastructure, our mission
                is to unlock seamless productivity — anywhere, for anyone.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-darkGreen">
                Our Value
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                We believe wellness and productivity aren’t separate — they’re
                connected. Gaian empowers modern organizations with AI-enhanced,
                human-centered solutions designed to reduce friction, spark
                innovation, and scale with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
