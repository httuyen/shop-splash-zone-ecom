
import React from "react";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="text-primary">Splash</span>
              <span className="text-accent">Zone</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Your one-stop destination for the latest trends and must-have products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">New Arrivals</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Best Sellers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Featured Products</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Special Offers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Coming Soon</a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Shipping & Returns</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Store Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Payment Methods</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter and get 10% off your first purchase.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white"
              />
              <Button>
                <Mail size={16} className="mr-2" />
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2" />
              <span>1234 Street Name, City, Country</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone size={16} className="mr-2" />
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail size={16} className="mr-2" />
              <span>info@splashzone.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 mt-6 text-center text-gray-600 text-sm">
          <p>&copy; {year} SplashZone. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
