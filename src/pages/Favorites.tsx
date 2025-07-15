import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const FAVORITES_KEY = "favorites";
const SESSION_KEY = "user_session";

const Favorites = () => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) {
      navigate("/account");
    }
    const stored = localStorage.getItem(FAVORITES_KEY);
    setFavorites(stored ? JSON.parse(stored) : []);
  }, []);

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">No Favorites Yet</h1>
        <p className="text-muted-foreground mb-8">You haven't added any products to your favorites.</p>
        <Link to="/bikes">
          <Button>Browse Bikes</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favorites.map((item) => (
          <Card key={item.id} className="group hover:shadow-glow transition-all duration-300 bg-card border-border overflow-hidden">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-primary font-bold text-lg">${item.price}</span>
              </div>
              <div className="flex space-x-2">
                <Button onClick={() => addToCart(item)}>
                  <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                </Button>
                <Button variant="outline" onClick={() => removeFavorite(item.id)}>
                  <Heart className="h-4 w-4 mr-2 text-destructive" /> Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favorites; 