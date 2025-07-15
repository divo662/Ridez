import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { partsData } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Heart, ShoppingCart, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FAVORITES_KEY = "favorites";

const Parts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('name');
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    setFavorites(stored ? JSON.parse(stored).map((item: any) => item.id) : []);
  }, []);

  const toggleFavorite = (part: any) => {
    let updated: any[] = [];
    const stored = localStorage.getItem(FAVORITES_KEY);
    let favs = stored ? JSON.parse(stored) : [];
    if (favorites.includes(part.id)) {
      updated = favs.filter((item: any) => item.id !== part.id);
    } else {
      updated = [...favs, part];
    }
    setFavorites(updated.map((item: any) => item.id));
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  const categories = ['All', 'Safety', 'Wheels', 'Electronics', 'Brakes', 'Drivetrain', 'Apparel'];
  
  const filteredParts = partsData
    .filter(part => selectedCategory === 'All' || part.category === selectedCategory)
    .filter(part => part.price >= priceRange[0] && part.price <= priceRange[1])
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleAddToCart = (part: any) => {
    addToCart(part);
    toast({
      title: "Added to cart",
      description: `${part.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Parts & <span className="text-primary">Accessories</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upgrade your ride with our premium selection of bike parts and accessories.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </h3>
              
              {/* Category Filter */}
              <div className="space-y-3 mb-6">
                <label className="text-sm font-medium text-foreground">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-3 mb-6">
                <label className="text-sm font-medium text-foreground">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={2000}
                  min={0}
                  step={50}
                  className="w-full"
                />
              </div>

              {/* Sort By */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredParts.length} of {partsData.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredParts.map((part) => (
                <Card key={part.id} className="group hover:shadow-glow transition-all duration-300 bg-card border-border overflow-hidden">
                  <div className="relative">
                    <img 
                      src={part.image} 
                      alt={part.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      variant={favorites.includes(part.id) ? "default" : "ghost"}
                      size="icon"
                      className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                      onClick={() => toggleFavorite(part)}
                    >
                      <Heart className={`h-4 w-4 ${favorites.includes(part.id) ? 'text-primary fill-primary' : ''}`} />
                    </Button>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {part.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {part.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {part.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        ${part.price}
                      </span>
                      <Badge variant={part.inStock ? "default" : "destructive"}>
                        {part.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      onClick={() => handleAddToCart(part)}
                      className="w-full"
                      disabled={!part.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {part.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredParts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No products found matching your filters.
                </p>
                <Button 
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange([0, 2000]);
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parts;