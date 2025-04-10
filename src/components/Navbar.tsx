
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, User, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "#shop" },
    { label: "Categories", href: "#categories" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center text-2xl font-bold">
          <span className="text-primary">Splash</span>
          <span className="text-accent">Zone</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <DropdownMenuLabel>My Cart</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-auto">
                {[1, 2, 3].map((item) => (
                  <DropdownMenuItem key={item} className="flex justify-between p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 bg-muted rounded-md"></div>
                      <div>
                        <p className="font-medium">Product {item}</p>
                        <p className="text-sm text-muted-foreground">$99.00</p>
                      </div>
                    </div>
                    <span className="text-sm">x1</span>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <div className="p-4">
                <div className="flex justify-between mb-4">
                  <span>Subtotal:</span>
                  <span className="font-medium">$297.00</span>
                </div>
                <Button className="w-full">View Cart</Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="container flex justify-between py-4 border-t">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Wishlist
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Account
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Cart (3)
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
