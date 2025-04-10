
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";

const categories = [
  "All Products",
  "New Arrivals",
  "Best Sellers", 
  "On Sale"
];

// Sample product data
const allProducts = [
  {
    id: "1", 
    title: "Modern Casual Sweater",
    price: 89.99,
    image: "/placeholder.svg",
    rating: 4.5,
    reviewCount: 128,
    category: "New Arrivals",
    isNew: true
  },
  {
    id: "2", 
    title: "Classic White Sneakers",
    price: 59.99,
    originalPrice: 79.99,
    image: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 256,
    category: "Best Sellers",
    isSale: true
  },
  {
    id: "3", 
    title: "Vintage Denim Jacket",
    price: 129.99,
    image: "/placeholder.svg",
    rating: 4.2,
    reviewCount: 94,
    category: "Best Sellers"
  },
  {
    id: "4", 
    title: "Summer Floral Dress",
    price: 49.99,
    originalPrice: 69.99,
    image: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 187,
    category: "On Sale",
    isSale: true
  },
  {
    id: "5", 
    title: "Leather Weekender Bag",
    price: 159.99,
    image: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 64,
    category: "New Arrivals",
    isNew: true
  },
  {
    id: "6", 
    title: "Minimalist Watch",
    price: 99.99,
    originalPrice: 129.99,
    image: "/placeholder.svg",
    rating: 4.7,
    reviewCount: 213,
    category: "On Sale",
    isSale: true
  },
  {
    id: "7", 
    title: "Wireless Earbuds",
    price: 79.99,
    image: "/placeholder.svg",
    rating: 4.4,
    reviewCount: 178,
    category: "Best Sellers"
  },
  {
    id: "8", 
    title: "Cotton Lounge Set",
    price: 69.99,
    image: "/placeholder.svg",
    rating: 4.3,
    reviewCount: 92,
    category: "New Arrivals",
    isNew: true
  }
];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts = activeCategory === "All Products"
    ? allProducts
    : allProducts.filter(product => product.category === activeCategory);

  return (
    <section id="shop" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="mb-2">Featured Products</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our handpicked selection of trending items that combine style, quality, and value
          </p>
        </div>

        <Tabs 
          defaultValue="All Products" 
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white shadow-sm">
              {categories.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="px-4 py-2 text-sm md:text-base"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    image={product.image}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    isNew={product.isNew}
                    isSale={product.isSale}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
