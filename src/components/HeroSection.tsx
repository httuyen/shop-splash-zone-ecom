import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Truck, CreditCard, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 hero-gradient opacity-20" />
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Find Your Perfect <span className="text-primary">Office</span> Supplies
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Shop our premium selection of office essentials with free shipping on orders over $50. Boost your productivity today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-hover-effect">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Collections
              </Button>
            </div>
            
            {/* Benefits */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              {[
                { icon: <Truck className="h-5 w-5" />, text: "Free Shipping" },
                { icon: <RefreshCw className="h-5 w-5" />, text: "Easy Returns" },
                { icon: <Package className="h-5 w-5" />, text: "Secure Packaging" },
                { icon: <CreditCard className="h-5 w-5" />, text: "Secure Checkout" },
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start gap-2">
                  <div className={cn(
                    "p-2 rounded-full",
                    index % 2 === 0 ? "bg-primary/10" : "bg-accent/10"
                  )}>
                    {benefit.icon}
                  </div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 w-full md:w-auto">
            <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80"
                alt="Modern office workspace"
                className="w-full h-full object-cover"
              />
              
              {/* Floating tag */}
              <div className="absolute right-4 top-4 bg-white text-black py-2 px-4 rounded-full shadow-lg transform rotate-3">
                <span className="font-bold text-lg">20% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
