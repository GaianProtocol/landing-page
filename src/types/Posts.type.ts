export interface Post {
  id: string;
  title: string;
  slug: string;
  html?: string;
  image: string; // from feature_image
  excerpt: string; // from excerpt
  category: string; // from primary_tag.name
  categoryId: string; // from primary_tag.id
  author: string; // from primary_author.name
  date: string; // from published_at (formatted)
  readTime: string; // from reading_time
}

export interface RecentPost {
  id: string;
  title: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface CategoriesFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export interface SearchBoxProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export interface PopularTagsProps {
  tags: string[];
}

export interface RecentPostsProps {
  posts: RecentPost[];
}

export interface SidebarProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  popularTags: string[];
  recentPosts: RecentPost[];
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}
