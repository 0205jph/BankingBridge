import { Building, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bank-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-lg">
                <Building className="text-white w-6 h-6" />
              </div>
              <span className="ml-3 text-2xl font-bold">SecureBank</span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Your trusted partner in financial growth and security. Banking made simple, secure, and personal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Personal Banking</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Business Banking</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Investment Services</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Mortgage & Loans</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Credit Cards</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Insurance</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Branch Locator</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">ATM Locator</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Security Center</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-green-400 w-5 h-5 mr-3" />
                <span className="text-blue-200">1-800-SECURE-1</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-green-400 w-5 h-5 mr-3" />
                <span className="text-blue-200">support@securebank.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-green-400 w-5 h-5 mr-3 mt-1" />
                <span className="text-blue-200">
                  123 Financial District<br />
                  New York, NY 10005
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="text-green-400 w-5 h-5 mr-3" />
                <span className="text-blue-200">24/7 Customer Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-bank-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-200">
            &copy; 2024 SecureBank. All rights reserved. |{" "}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a> |{" "}
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
