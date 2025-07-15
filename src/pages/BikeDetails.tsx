import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { bikesData } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft, Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FAVORITES_KEY = "favorites";

const BikeDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    setFavorites(stored ? JSON.parse(stored).map((item: any) => item.id) : []);
  }, [id]);

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

  const bike = bikesData.find(b => b.id === id);

  if (!bike) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center animate-fade-in">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Bike not found</h1>
          <Link to="/bikes">
            <Button>Back to Bikes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(bike, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}x ${bike.name} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/bikes" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 animate-fade-in-down">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Bikes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-scale">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={bike.image} 
                alt={bike.name}
                className="w-full h-96 object-cover rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105 animate-fade-in-scale"
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
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <Badge variant="secondary" className="mb-2 animate-fade-in-scale">
                {bike.category}
              </Badge>
              <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
                {bike.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current animate-fade-in-scale" />
                  ))}
                </div>
                <span className="text-muted-foreground animate-fade-in">(24 reviews)</span>
              </div>
              <p className="text-muted-foreground text-lg animate-fade-in">
                {bike.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 animate-fade-in-scale">
              <span className="text-3xl font-bold text-primary animate-fade-in-scale">
                ${bike.price.toLocaleString()}
              </span>
              {bike.originalPrice && (
                <span className="text-xl text-muted-foreground line-through animate-fade-in-scale">
                  ${bike.originalPrice.toLocaleString()}
                </span>
              )}
              {bike.originalPrice && (
                <Badge variant="destructive" className="animate-fade-in-scale">
                  Save ${(bike.originalPrice - bike.price).toLocaleString()}
                </Badge>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium">Quantity:</label>
                <div className="flex items-center border border-border rounded-md">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    -
                  </Button>
                  <span className="px-4 py-2 text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button onClick={handleAddToCart} className="flex-1 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" onClick={() => toggleFavorite(bike)} className="transition-transform duration-300 hover:scale-110">
                  <Heart className={`h-5 w-5 ${favorites.includes(bike.id) ? 'text-primary fill-primary' : ''}`} />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in-scale">
              <div className="text-center p-4 rounded-lg bg-card transition-transform duration-300 hover:scale-105">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary animate-fade-in-scale" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Orders over $500</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card transition-transform duration-300 hover:scale-105">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary animate-fade-in-scale" />
                <p className="text-sm font-medium">2 Year Warranty</p>
                <p className="text-xs text-muted-foreground">Full coverage</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-card transition-transform duration-300 hover:scale-105">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary animate-fade-in-scale" />
                <p className="text-sm font-medium">30 Day Returns</p>
                <p className="text-xs text-muted-foreground">No questions asked</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {bike.specs && (
          <Card className="mt-12 animate-fade-in-scale">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(bike.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 animate-fade-in">
                    <span className="text-muted-foreground capitalize">{key}:</span>
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Related Products */}
        <div className="mt-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Bikes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bikesData
              .filter(b => b.id !== bike.id && b.category === bike.category)
              .slice(0, 3)
              .map((relatedBike, idx) => (
                <Card key={relatedBike.id} className="group hover:shadow-glow transition-all duration-500 animate-fade-in-scale" style={{ animationDelay: `${idx * 80}ms` }}>
                  <div className="relative">
                    <img 
                      src={relatedBike.image} 
                      alt={relatedBike.name}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors animate-fade-in">
                      {relatedBike.name}
                    </h3>
                    <p className="text-primary font-bold animate-fade-in-scale">
                      ${relatedBike.price.toLocaleString()}
                    </p>
                    <Link to={`/bikes/${relatedBike.id}`}>
                      <Button variant="outline" className="w-full mt-4 transition-transform duration-300 hover:scale-105 active:scale-95">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
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

export default BikeDetails;