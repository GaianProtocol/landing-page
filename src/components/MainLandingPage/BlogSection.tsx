import ButtonPrimary from "@/components/Button/ButtonPrimary";
import LabelTag from "@/components/Text/TextTitleSection";
import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Drive To Make A Neobank As Magical",
    description:
      "Roles He Needed To Fill To Get Started Building Nubank. For One, He Needed A CTO To Lead The Engineering Side Of The Business",
    category: "Financial",
    image: "/blog/blog_image.png",
    featured: true,
  },
  {
    id: 2,
    title: "American Computer Science Graduate",
    description:
      "He Didn't Bring Years Of Coding Experience, But He Had Qualities That Velez Considered More Important: A Strong Belief In...",
    category: "Financial",
  },
  {
    id: 3,
    title: "That Left An Even More Important Role To Fill",
    description:
      "This Other Co-Founder Would Need To Blend Knowledge Of The Brazilian Market And Local Savvy With Expertise In...",
    category: "Financial",
  },
  {
    id: 4,
    title: "São Paulo For Minimal Wages Out Of A Small Office",
    description:
      "All In The Belief That Their Equity (Both Stock And Sweat) Would One Day Be Worth It.",
    category: "Financial",
  },
];

const BlogSection = () => {
  return (
    <div className="bg-green-50 py-16 px-4">
      <div className="max-w-screen-xl h-full mx-auto">
        {/* Header */}
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-10">
          {/* Text Center */}
          <div className="w-full md:w-auto text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <LabelTag title="BLOG" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="flex flex-row gap-3 text-4xl md:text-5xl font-bold justify-center md:justify-start">
                <span className="text-darkGreen">Create By</span>
                <span className="text-gray/30">Gaian</span>
              </h2>
            </motion.div>
          </div>

          {/* Button Right (only on desktop) */}
          <div className="mt-6 md:mt-0">
            <ButtonPrimary
              className="hidden md:block px-4 py-2"
              onClick={() => window.open("/blog")}
            >
              READ MORE
            </ButtonPrimary>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Article */}
          {blogs
            .filter((b) => b.featured)
            .map((blog) => (
              <motion.div
                key={blog.id}
                className="relative rounded-2xl bg-darkGreen border border-green-300 h-auto"
                initial={{ rotateX: -90, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="p-3 rounded-2xl h-96 relative">
                  <Image
                    src={blog.image || "/blog/default_image.png"}
                    alt={blog.title}
                    className="w-full h-96 rounded-xl object-cover"
                  />
                  <span className="absolute bottom-0 right-7 bg-textGreen border-[1px] border-darkGreen text-darkGreen px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                    {blog.category}
                  </span>
                </div>

                <div className="bottom-0 left-0 right-0 p-6 bg-gray-900/90 text-white">
                  <h3 className="text-xl font-bold mb-2 text-textGreen">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-textGreen/70 leading-relaxed">
                    {blog.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/20 z-10"></div>
              </motion.div>
            ))}

          {/* Other Articles */}
          <motion.div
            className="flex flex-col justify-between gap-4"
            initial={{ rotateX: -90, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {blogs
              .filter((b) => !b.featured)
              .map((blog) => (
                <div
                  key={blog.id}
                  className="md:relative bg-transparent flex-1 rounded-xl px-5 py-4 shadow-sm border border-darkGreen/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-4/5">
                    <span className="md:absolute w-20 text-center top-3 right-3 bg-textGreen border border-darkGreen text-darkGreen px-3 py-2 rounded-md text-xs font-medium">
                      {blog.category}
                    </span>
                    {/* Nội dung */}
                    <div className="flex flex-col justify-between mt-3">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2 leading-snug">
                        {blog.title}
                      </h3>
                      <p className="text-darkGreen/50 text-lg font-light leading-relaxed line-clamp-3">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                  {/* Badge */}
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
