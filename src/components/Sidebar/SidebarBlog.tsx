import {
  CategoriesFilterProps,
  Category,
  PopularTagsProps,
  RecentPost,
  RecentPostsProps,
  SearchBoxProps,
  SidebarProps,
} from "@/types/Posts.type";
import { Calendar, Filter, Menu, Search, Tag, X } from "lucide-react";

// Search Component
const SearchBox: React.FC<SearchBoxProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-green-100 p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Search className="w-5 h-5 mr-2 text-green-600" />
        Tìm kiếm
      </h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Tìm kiếm bài viết..."
          className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};

// Categories Component
const CategoriesFilter: React.FC<CategoriesFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-green-100 p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Filter className="w-5 h-5 mr-2 text-green-600" />
        Danh mục
      </h3>
      <div className="space-y-2">
        {categories.map((category: Category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 flex items-center justify-between text-sm sm:text-base ${
              selectedCategory === category.id
                ? "bg-green-100 text-green-700 border border-green-200"
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <span className="font-medium">{category.name}</span>
            <span className="text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Popular Tags Component
const PopularTags: React.FC<PopularTagsProps> = ({ tags }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-green-100 p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Tag className="w-5 h-5 mr-2 text-green-600" />
        Tags phổ biến
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span
            key={tag}
            className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs sm:text-sm rounded-full hover:bg-green-200 cursor-pointer transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// Recent Posts Component
const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-green-100 p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Calendar className="w-5 h-5 mr-2 text-green-600" />
        Bài viết gần đây
      </h3>
      <div className="space-y-3">
        {posts.map((post: RecentPost) => (
          <div key={post.id} className="group cursor-pointer">
            <h4 className="text-gray-900 font-medium group-hover:text-green-600 transition-colors line-clamp-2 text-sm sm:text-base">
              {post.title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sidebar Component
export const SidebarBlog: React.FC<SidebarProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  popularTags,
  recentPosts,
  isMobileMenuOpen,
  onMobileMenuToggle,
}) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={onMobileMenuToggle}
          className="flex items-center px-4 py-2 bg-white border border-green-200 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 mr-2" />
          ) : (
            <Menu className="w-5 h-5 mr-2" />
          )}
          {isMobileMenuOpen ? "Đóng bộ lọc" : "Mở bộ lọc"}
        </button>
      </div>

      {/* Sidebar Content */}
      <aside
        className={`lg:col-span-1 ${
          isMobileMenuOpen ? "block" : "hidden lg:block"
        }`}
      >
        <div className="lg:sticky lg:top-8 space-y-4 sm:space-y-6">
          <SearchBox searchTerm={searchTerm} onSearchChange={onSearchChange} />
          <CategoriesFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
          <PopularTags tags={popularTags} />
          <RecentPosts posts={recentPosts} />
        </div>
      </aside>
    </>
  );
};
