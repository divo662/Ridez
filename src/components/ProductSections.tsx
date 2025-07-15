import { Button } from "@/components/ui/button";

const ProductSections = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Kids Bikes Section */}
          <div className="bg-muted rounded-2xl overflow-hidden relative">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-4">KIDS BIKES</h2>
              <p className="text-muted-foreground mb-6">
                Everything you'll discover at our big inventory
              </p>
              <Button variant="hero-outline" size="sm">
                SHOP NOW
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2">
              <img 
                src="/assets/kids-bike.png" 
                alt="Kids Bike"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Accessories Section */}
          <div className="bg-muted rounded-2xl overflow-hidden relative">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-4">ACCESSORIES</h2>
              <p className="text-muted-foreground mb-6">
                A wide range of bicycle-related accessories
              </p>
              <Button variant="hero-outline" size="sm">
                SHOP NOW
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2">
              <img 
                src="/assets/cyclist-accessories.png" 
                alt="Cycling Accessories"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSections;