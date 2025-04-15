import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Office Manager",
    content:
      "I've been purchasing office supplies from this store for over a year now, and I'm always impressed by the quality and the speed of delivery. Customer service is top-notch too!",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Small Business Owner",
    content:
      "This has become my go-to store for all office essentials. Their product selection is excellent, and the prices are reasonable compared to other suppliers.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Freelance Designer",
    content:
      "My first purchase exceeded my expectations! The website was easy to navigate, checkout was smooth, and my items arrived earlier than expected. Will definitely shop here again.",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "James Thompson",
    role: "IT Director",
    content:
      "As someone who manages tech supplies for an entire department, I can say that this store stands out for its user experience and product quality. Their attention to detail is impressive.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Olivia Chen",
    role: "Executive Assistant",
    content:
      "I recommend this store to all my colleagues. The curated collections make it easy to find exactly what you're looking for, and the quality is consistently excellent.",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-2">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their shopping experience.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4 flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={cn(
                                "h-5 w-5",
                                i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                              )}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        
                        <p className="text-gray-700">{testimonial.content}</p>
                        
                        <div className="mt-4">
                          <Badge variant="outline" className="text-primary border-primary">
                            Verified Purchase
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
