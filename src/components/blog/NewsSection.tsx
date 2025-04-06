
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, RefreshCw } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

interface NewsItem {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

const NewsSection = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchNews = async () => {
    setLoading(true);
    setError('');
    
    try {
      // Using Gnews API with a free tier key
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=elderly%20care&lang=en&country=us&max=4&apikey=8b6b2ac0fbd2fb0ae4d77dd0ea909c15`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      
      const data = await response.json();
      
      if (data.articles && data.articles.length > 0) {
        setNews(data.articles);
      } else {
        setError('No news articles found');
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Unable to fetch news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="bg-sage-50 py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Latest News</h2>
          <Button 
            variant="outline" 
            onClick={fetchNews} 
            disabled={loading}
            className="flex items-center"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-100 text-red-700 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            // Skeleton loaders while content is loading
            Array(4).fill(0).map((_, index) => (
              <Card key={index} className="card-custom">
                <CardHeader>
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-24 w-full mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))
          ) : (
            news.map((item, index) => (
              <Card key={index} className="card-custom h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-4">
                    {item.description}
                  </p>
                  <div className="flex items-center mt-4 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{formatDate(item.publishedAt)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      Read Full Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
        
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>News articles are sourced from various publications focused on elderly care and community support.</p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
