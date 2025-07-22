// services/blogs.service.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY;

export const fetchGhostPosts = async () => {
  try {
    const res = await axios.get(`${API_URL}/posts/`, {
      params: {
        key: API_KEY,
        include: "authors,tags",
      },
    });

    return res.data.posts;
  } catch (error) {
    console.error("Ghost API fetch error:", error);
    return [];
  }
};

export const fetchGhostPostBySlug = async (slug: string) => {
  console.log(
    `${API_URL}/posts/slug/${slug}/?key=${API_KEY}&include=tags,authors`
  );
  const res = await axios.get(
    `${API_URL}/posts/slug/${slug}/?key=${API_KEY}&include=tags,authors`
  );

  const post = res.data.posts?.[0];
  if (!post) return null;
  // console.log(post);
  // if (!post) return null;

  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    html: post.html,
    image: post.feature_image,
    excerpt: post.excerpt,
    category: post.primary_tag?.name || "Uncategorized",
    categoryId: post.primary_tag?.id || "",
    author: post.primary_author?.name || "Unknown",
    date: new Date(post.published_at).toLocaleDateString("en-GB"),
    readTime: `${post.reading_time} min read`,
  };
};
