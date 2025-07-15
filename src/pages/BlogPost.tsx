import { useParams, Link } from "react-router-dom";
import { blogData } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <Link to="/blog">
          <Badge className="inline-flex items-center"><ArrowLeft className="h-4 w-4 mr-2" />Back to Blog</Badge>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
      </Link>
      <Card className="mb-8 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
        <CardContent className="p-8">
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" /> {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" /> {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
          <div className="text-lg text-foreground mb-6">{post.excerpt}</div>
          <div className="text-muted-foreground">{post.content || "Full article content goes here..."}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPost; 