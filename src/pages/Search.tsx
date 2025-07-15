import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { bikesData, partsData } from "@/data/products";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SESSION_KEY = "user_session";

const Search = () => {
  const [query, setQuery] = useState("");
  const allProducts = [...bikesData, ...partsData];
  const results = allProducts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    (item.category && item.category.toLowerCase().includes(query.toLowerCase()))
  );

  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    if (!session) {
      navigate("/account");
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Search Products</h1>
      <Input
        type="text"
        placeholder="Search by name or category..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.map((item) => (
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
              <Link to={item.category === "Road" || item.category === "Mountain" || item.category === "Kids" ? `/bikes/${item.id}` : "/parts"}>
                <Button variant="outline">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      {results.length === 0 && (
        <div className="text-center text-muted-foreground mt-12">No products found.</div>
      )}
    </div>
  );
};

export default Search; 