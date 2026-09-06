import React from 'react';
import { 
  Check, 
  ArrowRight, 
  Eye, 
  FileText, 
  Layers, 
  Search, 
  ShieldCheck, 
  SlidersHorizontal,
  Flame,
  Award
} from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS_DATA } from '../data/productsData';
import { ProductItem } from '../types';

interface ProductsCatalogProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onViewProductDetails: (product: ProductItem) => void;
  onSelectForQuote: (product: ProductItem) => void;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onViewProductDetails,
  onSelectForQuote,
}) => {
  // Filter products by category and search query
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      product.name.toLowerCase().includes(query) ||
      product.tagline.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.categoryLabel.toLowerCase().includes(query) ||
      product.applications.some((app) => app.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products-catalog" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300/60 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span>Official Equipment Catalog</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered Automation & Cleanroom Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Manufactured and supplied directly by Shree Tech Automation. Designed for heavy industrial cycle frequency, strict pharmaceutical cGMP compliance, and maximum energy conservation.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-6">
          {PRODUCT_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <span>{category.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter & Search Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-amber-600" />
            <span>
              Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> of {PRODUCTS_DATA.length} products
              {selectedCategory !== 'all' && (
                <span className="ml-1 text-amber-700">in selected category</span>
              )}
            </span>
          </div>

          {searchQuery && (
            <div className="flex items-center gap-2 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-lg border border-amber-200">
              <span>Filter: "{searchQuery}"</span>
              <button
                onClick={() => onSearchChange('')}
                className="font-bold text-slate-500 hover:text-slate-900 ml-1"
                title="Clear search"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 max-w-lg mx-auto">
            <Search className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No matching products found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search query or select "All Solutions" to see our entire automation range.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                onSearchChange('');
              }}
              className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Product Image Box */}
                <div className="relative aspect-16/10 bg-gradient-to-b from-slate-50 to-white overflow-hidden flex items-center justify-center p-3 border-b border-slate-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (product.onlineImageUrl && e.currentTarget.src !== product.onlineImageUrl) {
                        e.currentTarget.src = product.onlineImageUrl;
                      }
                    }}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                    loading="lazy"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-md tracking-wider uppercase font-semibold">
                    {product.categoryLabel}
                  </div>

                  {/* Popular / Best Seller Badge */}
                  {product.popular && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>Best Seller</span>
                    </div>
                  )}

                  {/* Bottom Quick Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between text-white text-xs">
                    <span className="font-mono text-[11px] text-amber-300">Shree Tech Genuine</span>
                    <button
                      onClick={() => onViewProductDetails(product)}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur px-2.5 py-1 rounded text-[11px] font-semibold flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 
                      onClick={() => onViewProductDetails(product)}
                      className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer leading-snug line-clamp-2"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-amber-700 font-medium line-clamp-1">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlight Specs Preview */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-slate-600">
                      <span className="font-medium text-slate-500">Key Spec:</span>
                      <span className="font-mono text-slate-900 font-semibold truncate max-w-[65%] text-right">
                        {product.specifications[0]?.value}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span className="font-medium text-slate-500">Protection:</span>
                      <span className="font-mono text-slate-900 font-semibold truncate max-w-[65%] text-right">
                        {product.specifications[3]?.value || 'IP54 / cGMP Standard'}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => onViewProductDetails(product)}
                      className="px-3 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      <span>View Specs</span>
                    </button>

                    <button
                      onClick={() => onSelectForQuote(product)}
                      className="px-3 py-2 rounded-lg text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 transition-all shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
