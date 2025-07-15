import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { bikesData } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FAVORITES_KEY = "favorites";

const Bikes = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [gridAnim, setGridAnim] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    setFavorites(stored ? JSON.parse(stored).map((item: any) => item.id) : []);
    setGridAnim(true);
    setTimeout(() => setGridAnim(false), 700);
  }, [selectedCategory]);

  const toggleFavorite = (bike: any) => {
    let updated: any[] = [];
    const stored = localStorage.getItem(FAVORITES_KEY);
    let favs = stored ? JSON.parse(stored) : [];
    if (favorites.includes(bike.id)) {
      updated = favs.filter((item: any) => item.id !== bike.id);
    } else {
      updated = [...favs, bike];
    }
    setFavorites(updated.map((item: any) => item.id));
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  const categories = ['All', 'Road', 'Mountain', 'Kids', 'City'];
  const filteredBikes = selectedCategory === 'All' 
    ? bikesData 
    : bikesData.filter(bike => bike.category === selectedCategory);

  const handleAddToCart = (bike: any) => {
    addToCart(bike);
    toast({
      title: "Added to cart",
      description: `${bike.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Our <span className="text-primary">Bikes</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in">
            Discover our premium collection of bicycles designed for every rider and every adventure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 shadow-md hover:scale-105 active:scale-95 ${selectedCategory === category ? 'ring-2 ring-primary' : ''}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Bikes Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${gridAnim ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          {filteredBikes.map((bike, idx) => (
            <Card key={bike.id} className={`group hover:shadow-glow transition-all duration-500 bg-card border-border overflow-hidden animate-fade-in-scale`} style={{ animationDelay: `${idx * 80}ms` }}>
              <div className="relative">
                <img 
                  src={bike.image} 
                  alt={bike.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {bike.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground animate-fade-in-scale">
                    Featured
                  </Badge>
                )}
                {bike.originalPrice && (
                  <Badge variant="destructive" className="absolute top-4 right-4 animate-fade-in-scale">
                    Sale
                  </Badge>
                )}
                <Button
                  variant={favorites.includes(bike.id) ? "default" : "ghost"}
                  size="icon"
                  className="absolute top-4 right-16 bg-background/80 hover:bg-background transition-transform duration-300 hover:scale-110"
                  onClick={() => toggleFavorite(bike)}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(bike.id) ? 'text-primary fill-primary' : ''}`} />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs animate-fade-in-scale">
                    {bike.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors animate-fade-in">
                  {bike.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 animate-fade-in">
                  {bike.description}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary animate-fade-in-scale">
                    ${bike.price.toLocaleString()}
                  </span>
                  {bike.originalPrice && (
                    <span className="text-muted-foreground line-through animate-fade-in-scale">
                      ${bike.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 space-y-2">
                <div className="flex space-x-2 w-full">
                  <Link to={`/bikes/${bike.id}`} className="flex-1">
                    <Button variant="outline" className="w-full transition-transform duration-300 hover:scale-105 active:scale-95">
                      View Details
                    </Button>
                  </Link>
                  <Button 
                    onClick={() => handleAddToCart(bike)}
                    className="flex-1 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
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

export default Bikes;