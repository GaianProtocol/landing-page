// Header Component
export default function HeaderBlog() {
  return (
    <header className=" mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between mb-4">
          {/* <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <button
              className="flex items-center hover:text-green-600 transition-colors"
              onClick={() => window.history.back()}
            >
              <Home className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Trang chủ</span>
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Blog</span>
          </nav> */}

          {/* <button
            className="flex items-center px-3 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-200"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">Về trang chủ</span>
          </button> */}
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Blog Categories
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-green-600 font-light">
            Explore the best articles by topic
          </p>
        </div>
      </div>
    </header>
  );
}
