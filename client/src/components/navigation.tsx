import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Building, Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [location] = useLocation();

  // Close dropdown when location changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('products-dropdown');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "FAQs", href: "/faqs" },
    { name: "About", href: "/about" },
  ];

  const productsServices = [
    "Personal Banking",
    "Business Banking", 
    "Investment Services",
    "Mortgage & Loans",
    "Credit Cards",
    "Insurance",
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <Building className="text-white text-xl w-6 h-6" />
            </div>
            <span className="ml-3 text-2xl font-bold text-bank-blue-800">SecureBank</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 font-medium transition-colors ${
                  location === item.href
                    ? "text-bank-blue-900"
                    : "text-gray-700 hover:text-bank-blue-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Products & Services Dropdown */}
            <div id="products-dropdown" className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`px-3 py-2 font-medium flex items-center transition-colors ${
                  location === "/products"
                    ? "text-bank-blue-900"
                    : "text-gray-700 hover:text-bank-blue-900"
                }`}
              >
                Products & Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <Link
                      href="/products"
                      className="block px-4 py-2 text-gray-700 hover:bg-bank-blue-50 hover:text-bank-blue-900"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      All Products & Services
                    </Link>
                    <div className="border-t border-gray-200 my-2"></div>
                    {productsServices.map((service) => (
                      <a
                        key={service}
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-bank-blue-50 hover:text-bank-blue-900"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 font-medium ${
                  location === item.href
                    ? "text-bank-blue-900"
                    : "text-gray-700 hover:text-bank-blue-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link
                href="/products"
                className="text-gray-700 hover:text-bank-blue-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products & Services
              </Link>
              <div className="ml-4 mt-2 space-y-1">
                {productsServices.map((service) => (
                  <a
                    key={service}
                    href="#"
                    className="block py-1 text-gray-600 hover:text-bank-blue-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
