import { Button } from "@/components/ui/button";

const CategoryCards = () => {
  const categories = [
    {
      title: "Singletrack Speed",
      subtitle: "Speed and aerodynamics",
      image: "/assets/singletrack-bike.png",
      buttonText: "SHOP NOW",
      className: "bg-card"
    },
    {
      title: "Trail Power",
      subtitle: "Down riding, experience",
      image: "/assets/trail-power.png",
      buttonText: "DISCOVER MORE",
      className: "bg-secondary"
    },
    {
      title: "Road Bikes",
      subtitle: "Comfort AF FAST",
      image: "/assets/road-bike.png",
      buttonText: "SHOP NOW", 
      className: "bg-card"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className={`${category.className} rounded-2xl p-6 relative overflow-hidden group hover:shadow-glow transition-all duration-500`}>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.subtitle}</p>
                <Button 
                  variant="hero" 
                  size="sm"
                  className="text-sm px-6"
                >
                  {category.buttonText}
                </Button>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-end pr-6">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-48 h-32 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;