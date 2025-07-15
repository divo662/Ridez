import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import serviceBike from "@/assets/service-bike.png";

const ServicesSection = () => {
  const services = [
    {
      title: "Tune-up • Up & Brakes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
      title: "Adjust. And Initial",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
      title: "Personal Bike Fit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    },
    {
      title: "Free Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary uppercase tracking-wider text-sm mb-2">
              BEST BIKE SHOP IN US
            </p>
            <h2 className="text-4xl font-bold mb-8">
              Bike Services <br />
              & Repair
            </h2>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" className="mt-8">
              REPAIR SERVICE
            </Button>
          </div>

          {/* Right Content - Bike Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-2xl opacity-20"></div>
            <img 
              src={serviceBike} 
              alt="Service Bike" 
              className="w-full h-auto object-contain relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;