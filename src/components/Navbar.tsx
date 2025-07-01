import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const scrollToCart = () => {
    const cartSection = document.getElementById('cart');
    if (cartSection) {
      cartSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2 group"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="BREATHEX Logo"
        >
          <img 
            src="\photos\logo.png" 
            alt="BREATHEX Logo" 
            className="h-7 sm:h-8 transition-transform duration-300 group-hover:scale-110" 
          />
         
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
            className="nav-link text-gray-700 hover:text-pulse-500 font-medium transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a href="#features" className="nav-link text-gray-700 hover:text-pulse-500 font-medium transition-colors duration-300">Features</a>
          <a href="#gallery" className="nav-link text-gray-700 hover:text-pulse-500 font-medium transition-colors duration-300">Gallery</a>
          <a href="#details" className="nav-link text-gray-700 hover:text-pulse-500 font-medium transition-colors duration-300">Contact</a>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="tel:+96178841832" 
            className="flex items-center gap-2 text-gray-600 hover:text-pulse-500 transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">Call Us</span>
          </a>
          
          <button 
            onClick={scrollToCart}
            className="bg-pulse-500 hover:bg-pulse-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-md hover:shadow-lg"
          >
            <ShoppingCart className="w-4 h-4" />
            Order Now
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none hover:bg-gray-100 rounded-lg transition-colors duration-300" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          <a 
            href="#" 
            className="text-xl font-medium py-4 px-8 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-300" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Home
          </a>
          <a 
            href="#features" 
            className="text-xl font-medium py-4 px-8 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-300" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Features
          </a>
          <a 
            href="#gallery" 
            className="text-xl font-medium py-4 px-8 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-300" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Gallery
          </a>
          <a 
            href="#details" 
            className="text-xl font-medium py-4 px-8 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-300" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact
          </a>
          
          <div className="flex flex-col space-y-4 mt-8 w-full">
            <a 
              href="tel:+96178841832" 
              className="flex items-center justify-center gap-2 text-gray-600 hover:text-pulse-500 transition-colors duration-300 py-3 px-6 rounded-xl border border-gray-200 hover:border-pulse-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call Us</span>
            </a>
            
            <button 
              onClick={scrollToCart}
              className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              Order Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;