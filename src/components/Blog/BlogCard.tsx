"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react"; // Changed ChevronRight to ArrowRight for consistency with screenshot
import type { Post } from "@/types/Posts.type";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface BlogCardProps {
  blog: Post;
}

export function BlogCard({ blog }: BlogCardProps) {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
      onClick={() => router.push(`/blog/${blog.slug}`)}
    >
      {/* Image */}
      <div className="h-40 sm:h-48 relative overflow-hidden">
        <Image
          src={
            blog.image ||
            "/placeholder.svg?height=200&width=300&text=Blog+Image"
          }
          alt={blog.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      {/* Content */}
      <div className="p-4 sm:p-6 flex-1">
        <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 flex-wrap gap-1">
          <div className="flex items-center">
            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span>{blog.author}</span>
          </div>
          <span className="mx-2">•</span> {/* Always show dot for spacing */}
          <div className="flex items-center">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span>{blog.date}</span>
          </div>
          {/* Read time is not shown in the screenshot for recent articles, but keeping it for now if desired */}
          {/* <span className="hidden sm:inline mx-2">•</span>
          <span className="text-xs sm:text-sm">{blog.readTime}</span> */}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-4">
          {blog.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${blog.slug}`}
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center text-sm sm:text-base"
          >
            {t("blogPage.readMore")}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
