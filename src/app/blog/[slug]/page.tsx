import {
  fetchGhostPostBySlug,
  fetchGhostPosts,
} from "@/services/blogs.service";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Post } from "@/types/Posts.type";
import BlogPageDetail from "./BlogDetailPage";

interface BlogPostPageProps {
  params: { slug: string };
}

// ✅ SSG
export async function generateStaticParams() {
  const posts = await fetchGhostPosts();
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

// ✅ SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await fetchGhostPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: post.image ? [post.image] : [],
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

// ✅ Page chính
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await fetchGhostPostBySlug(params.slug);
  if (!post) return notFound();

  return <BlogPageDetail post={post} />;
}
