
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogHero from '../components/blog/BlogHero';
import BlogPosts from '../components/blog/BlogPosts';
import NewsSection from '../components/blog/NewsSection';
import ResourcesSection from '../components/blog/ResourcesSection';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogHero />
        <BlogPosts />
        <NewsSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
