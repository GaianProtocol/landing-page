"use client";

import type React from "react";
import { fetchGhostPosts } from "@/services/blogs.service";
import type { Post } from "@/types/Posts.type";
import { useState, useEffect, useMemo } from "react";
import { mapGhostPostToPost } from "@/utils/mapposttoblog";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn"; // Keep cn utility
import { FeaturedBlogCard } from "@/components/Blog/FeaturedBlogCard";
import { BlogCard } from "@/components/Blog/BlogCard";
import { useTranslation } from "react-i18next";

// Main Component
const BlogClientPage: React.FC = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // State for selected category

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const ghostPosts = await fetchGhostPosts();
      const mappedPosts = ghostPosts.map(mapGhostPostToPost);
      setPosts(mappedPosts);
      setLoading(false);
    };
    getPosts();
  }, []);

  // Memoize unique categories to avoid re-calculation on every render
  const uniqueCategories = useMemo(() => {
    const categories = new Set<string>();
    posts.forEach((post) => categories.add(post.category));
    return [t("blogPage.categories.all"), ...Array.from(categories)].sort(); // Add "All" option and sort alphabetically
  }, [posts, t]);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (
      !selectedCategory ||
      selectedCategory === t("blogPage.categories.all")
    ) {
      return posts;
    }
    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory, t]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const recentPosts = filteredPosts.length > 1 ? filteredPosts.slice(1, 4) : [];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(
      category === t("blogPage.categories.all") ? null : category
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* New Blog Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 text-center">
          {t("blogPage.title")}
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t("blogPage.subtitle")}
        </p>
        {loading ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            {t("blogPage.loading")}
          </div>
        ) : (
          <div>
            {/* Category Filter Section */}
            <div className="mb-12 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
              {/* Removed: <h2 className="text-2xl font-bold text-gray-900 mb-4">Filter by Category</h2> */}
              <div className="flex flex-wrap gap-3 justify-center">
                {" "}
                {/* Added justify-center */}
                {uniqueCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={cn(
                      "rounded-full px-4 py-2 text-md font-medium transition-colors duration-200",
                      selectedCategory === category ||
                        (selectedCategory === null &&
                          category === t("blogPage.categories.all"))
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {featuredPost && <FeaturedBlogCard post={featuredPost} />}

            {/* Our Recent Articles Section */}
            <div className="mb-8 mt-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900">
                    {t("blogPage.recentArticles.title")}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {t("blogPage.recentArticles.subtitle")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* Recent Blog Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.length > 0 ? (
                  recentPosts.map((blog: Post) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))
                ) : (
                  <div className="text-center py-12 col-span-full">
                    <p className="text-gray-500 text-lg">
                      {t("blogPage.noArticles")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogClientPage;
