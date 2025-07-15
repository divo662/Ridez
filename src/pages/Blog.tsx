import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { blogData } from '@/data/products';
import { Calendar, User, Search, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Trail Guides', 'Maintenance', 'Nutrition', 'Kids Cycling', 'Gear Reviews', 'Seasonal Tips'];
  
  const filteredPosts = blogData
    .filter(post => selectedCategory === 'All' || post.category === selectedCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-20 animate-fade-in">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Cycling <span className="text-primary">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in">
            Tips, guides, and insights from the cycling community to help you ride better.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 animate-fade-in">
          <div className="relative max-w-md mx-auto animate-fade-in-scale">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-scale">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 shadow-md hover:scale-105 active:scale-95 ${selectedCategory === category ? 'ring-2 ring-primary' : ''}`}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <Card className="mb-12 overflow-hidden hover:shadow-glow transition-all duration-500 animate-fade-in-scale">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={filteredPosts[0].image} 
                  alt={filteredPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover animate-fade-in-scale"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground animate-fade-in-scale">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center animate-fade-in">
                <Badge variant="secondary" className="w-fit mb-4 animate-fade-in-scale">
                  {filteredPosts[0].category}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer animate-fade-in" onClick={() => navigate(`/blog/${filteredPosts[0].id}`)}>
                  {filteredPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg animate-fade-in">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6 animate-fade-in-scale">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {filteredPosts[0].author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(filteredPosts[0].date)}
                  </div>
                </div>
                <Button className="w-fit transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md" onClick={() => navigate(`/blog/${filteredPosts[0].id}`)}>
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, idx) => (
            <Card key={post.id} className="group hover:shadow-glow transition-all duration-500 bg-card border-border overflow-hidden animate-fade-in-scale" style={{ animationDelay: `${idx * 80}ms` }}>
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 animate-fade-in-scale"
                />
              </div>
              
              <CardContent className="p-6 animate-fade-in">
                <Badge variant="secondary" className="mb-3 animate-fade-in-scale">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors cursor-pointer line-clamp-2 animate-fade-in" onClick={() => navigate(`/blog/${post.id}`)}>
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 animate-fade-in">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 animate-fade-in-scale">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(post.date)}
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md" onClick={() => navigate(`/blog/${post.id}`)}>
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground text-lg mb-4">
              No articles found matching your search.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Clear Search
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <Card className="mt-16 p-8 text-center bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 animate-fade-in-scale">
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in">Stay Updated</h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto animate-fade-in">
            Subscribe to our newsletter for the latest cycling tips, product updates, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto animate-fade-in-scale">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button className="transition-transform duration-300 hover:scale-105 active:scale-95">
              Subscribe
            </Button>
          </div>
        </Card>
      </div>
      {/* Custom Animations */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Blog;