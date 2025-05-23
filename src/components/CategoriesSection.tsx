import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: 1,
    name: "Stationery & Writing",
    image: "https://images.unsplash.com/photo-1568205612837-017257d2310a?auto=format&fit=crop&q=80",
    itemCount: 86,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Office Furniture",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
    itemCount: 64,
    color: "bg-purple-500",
  },
  {
    id: 3,
    name: "Tech & Accessories",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80",
    itemCount: 78,
    color: "bg-amber-500",
  },
  {
    id: 4,
    name: "Organization & Storage",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80",
    itemCount: 53,
    color: "bg-pink-500",
  },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="mb-2">Shop By Category</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Browse our wide range of products across various categories to find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
              
              <div className={cn(
                "absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-12 -mt-12 opacity-40",
                category.color
              )} />
              
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                <p className="mb-4 text-white/90">{category.itemCount} items</p>
                <Button 
                  variant="outline" 
                  className="w-fit border-white text-white hover:bg-white hover:text-black transition-colors"
                >
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
