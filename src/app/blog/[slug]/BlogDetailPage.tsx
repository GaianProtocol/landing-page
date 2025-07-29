"use client"; // Make it a client component

import Image from "next/image";
import type { Post } from "@/types/Posts.type";
import { ArrowLeft, User, Calendar, Clock } from "lucide-react"; // Import User, Calendar, Clock icons
import { useRouter } from "next/navigation";

interface BlogPageDetailProps {
  post: Post;
}

export default function BlogPageDetail({ post }: BlogPageDetailProps) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 2) {
      router.back();
    } else {
      router.push("/blogs");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white w-full">
      <div className="max-w-4xl mx-auto px-4 py-28 prose prose-xl ">
        <div className="flex justify-between items-center mb-10">
          {" "}
          {/* Added items-center for vertical alignment */}
          <button
            onClick={handleBack}
            className="flex items-center justify-start gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          <span className="bg-gray/10 text-darkGreen px-4 py-2 rounded-full text-md font-semibold">
            {post.category}
          </span>
        </div>
        <h1 className="mb-2 text-3xl md:text-5xl font-semibold">
          {post.title}
        </h1>

        <p className="text-gray-500 mb-4 flex items-center flex-wrap gap-x-4 gap-y-2">
          <span className="flex items-center">
            <User className="h-6 w-6 mr-1 text-gray-400" /> {/* User icon */}
            {post.author}
          </span>
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-gray-400" />{" "}
            {/* Calendar icon */}
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-gray-400" /> {/* Clock icon */}
            {post.readTime}
          </span>
        </p>

        {post.image && (
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full rounded-lg my-6"
            width={1000}
            height={1000}
          />
        )}

        <div
          className="text-gray/50"
          dangerouslySetInnerHTML={{ __html: post.html || "" }}
        />
      </div>
    </section>
  );
}
