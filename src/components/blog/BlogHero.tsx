
import React from 'react';
import { BookOpen } from 'lucide-react';

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-r from-sage-50 to-sky-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Educational articles, success stories, and resources to support elderly care and community involvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
