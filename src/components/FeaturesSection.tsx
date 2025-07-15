import { Settings, Package, Truck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Settings,
      title: "Complete Overhaul",
      description: "We can provide a range of bike services and repairs including:"
    },
    {
      icon: Package,
      title: "Custom Parts & Accessories", 
      description: "Don't need your bike delivered? No problem! Get all the custom parts and accessories you need."
    },
    {
      icon: Truck,
      title: "Bike Fitting & Delivery",
      description: "If you need delivery services and haven't visited our store before."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-wider text-sm mb-2">
            BEST IN AUSTRALIA
          </p>
          <h2 className="text-4xl font-bold">
            Our Facilities & Features
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;