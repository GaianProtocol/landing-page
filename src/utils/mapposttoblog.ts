import { Post } from "@/types/Posts.type";

interface GhostPost {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image?: string;
  excerpt?: string;
  primary_tag?: {
    name: string;
    id: string;
  };
  primary_author?: {
    name: string;
  };
  published_at: string;
  reading_time: number;
}

export const mapGhostPostToPost = (post: GhostPost): Post => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    html: post.html,
    image: post.feature_image || "",
    excerpt: post.excerpt || "",
    category: post.primary_tag?.name || "Uncategorized",
    categoryId: post.primary_tag?.id || "",
    author: post.primary_author?.name || "Unknown",
    date: new Date(post.published_at).toLocaleDateString("en-GB"),
    readTime: `${post.reading_time} min read`,
  });
  