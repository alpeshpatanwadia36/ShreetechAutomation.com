/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductsCatalog } from './components/ProductsCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InteractiveRfqCalculator } from './components/InteractiveRfqCalculator';
import { AboutSection } from './components/AboutSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { WordPressDeploymentModal } from './components/WordPressDeploymentModal';
import { ProductItem } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const [productForQuote, setProductForQuote] = useState<ProductItem | null>(null);
  const [isWordPressModalOpen, setIsWordPressModalOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForQuote = (product: ProductItem) => {
    setProductForQuote(product);
    scrollToSection('rfq-calculator');
  };

  const handleSelectCategoryAndScroll = (categoryId: string) => {
    setSelectedCategory(categoryId);
    scrollToSection('products-catalog');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
      
      {/* Header */}
      <Header
        onOpenWordPressModal={() => setIsWordPressModalOpen(true)}
        onSelectCategory={handleSelectCategoryAndScroll}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onScrollToSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onExploreCatalog={() => scrollToSection('products-catalog')}
          onRequestQuote={() => scrollToSection('rfq-calculator')}
          onOpenWordPressModal={() => setIsWordPressModalOpen(true)}
        />

        {/* Products Catalog */}
        <ProductsCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onViewProductDetails={(product) => setActiveModalProduct(product)}
          onSelectForQuote={handleSelectProductForQuote}
        />

        {/* Interactive RFQ Calculator */}
        <InteractiveRfqCalculator
          preSelectedProduct={productForQuote}
          onClearPreSelected={() => setProductForQuote(null)}
        />

        {/* Tailored Industries */}
        <IndustriesSection
          onSelectCategory={handleSelectCategoryAndScroll}
          onRequestQuote={() => scrollToSection('rfq-calculator')}
        />

        {/* About Company & Hubs */}
        <AboutSection />

        {/* Why Choose Shree Tech & Client Reviews */}
        <WhyChooseUs />

        {/* Contact & Branch Locations */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer
        onOpenWordPressModal={() => setIsWordPressModalOpen(true)}
        onSelectCategory={handleSelectCategoryAndScroll}
        onScrollToSection={scrollToSection}
      />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloat />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onSelectForQuote={handleSelectProductForQuote}
      />

      {/* WordPress Hosting Deployment Modal */}
      <WordPressDeploymentModal
        isOpen={isWordPressModalOpen}
        onClose={() => setIsWordPressModalOpen(false)}
      />

    </div>
  );
}
