"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/types/Posts.type";
import { useTranslation } from "react-i18next";

interface FeaturedBlogCardProps {
  post: Post;
}

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  const { t } = useTranslation();
  return (
    <div
      className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden flex flex-col lg:flex-row mb-12 cursor-pointer"
      onClick={() => (window.location.href = `/blog/${post.slug}`)}
    >
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto flex-shrink-0">
        <Image
          src={
            post.image ||
            "/placeholder.svg?height=400&width=600&text=Featured+Image"
          }
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Example of overlay elements from screenshot - replace with actual data/components if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        {/* Placeholder for inventory stock, out of stock, expired cards */}
        {/* <div className="absolute bottom-4 left-4 flex flex-col gap-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-sm font-medium shadow-sm flex items-center gap-2">
            Inventory Stock:{" "}
            <span className="font-bold text-blue-600">4,862</span>
            <span className="ml-auto text-gray-500 cursor-pointer">ⓘ</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-sm font-medium shadow-sm flex items-center gap-2">
            Out of Stock: <span className="font-bold text-red-600">290</span>
            <span className="ml-auto text-gray-500 cursor-pointer">ⓘ</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-sm font-medium shadow-sm flex items-center gap-2">
            Expired: <span className="font-bold text-orange-600">1,521</span>
            <span className="ml-auto text-gray-500 cursor-pointer">ⓘ</span>
          </div>
        </div> */}
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center w-full lg:w-1/2">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-gray/10 text-darkGreen px-4 py-2 rounded-full text-md font-semibold">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">{post.readTime}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          {t("blogPage.readMore")} <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
