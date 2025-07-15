import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { servicesData } from '@/data/products';
import { Clock, CheckCircle, Wrench, Settings, Users } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Services</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Keep your bike in peak condition with our expert maintenance and repair services.
          </p>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
            <Wrench className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
            <p className="text-muted-foreground">
              Our certified mechanics have years of experience with all bike types.
            </p>
          </Card>
          <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
            <Settings className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Quality Parts</h3>
            <p className="text-muted-foreground">
              We use only premium parts and accessories for all repairs.
            </p>
          </Card>
          <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
            <p className="text-muted-foreground">
              Tailored solutions to meet your specific cycling needs.
            </p>
          </Card>
        </div>

        {/* Service Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service) => (
            <Card key={service.id} className="group hover:shadow-glow transition-all duration-300 bg-card border-border">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Popular
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    ${service.price}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Includes:</h4>
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button className="w-full" size="lg">
                  Book Service
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Custom Service?
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Have a special request or need a quote for custom work? Our team is here to help 
            with any cycling service you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Get Quote
            </Button>
          </div>
        </Card>

        {/* Service Hours */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Service Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-2">Workshop Hours</h4>
              <div className="space-y-1 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-2">Emergency Repairs</h4>
              <div className="space-y-1 text-muted-foreground">
                <p>Available by appointment</p>
                <p>24-hour turnaround available</p>
                <p>Call: +1 (555) 123-4567</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;