import { Button } from "@/components/ui/button";
import { Eye, ArrowUp, CreditCard } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-700 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Modern abstract background with geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Banking Made
              <span className="text-green-300"> Simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Experience the future of banking with our secure, innovative digital platform designed for modern financial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Open Account
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            {/* Modern banking dashboard illustration */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-blue-800 font-semibold">Account Balance</h3>
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-2">$45,230.89</div>
                <div className="text-green-600 text-sm">+2.5% from last month</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500 text-white rounded-xl p-4">
                  <ArrowUp className="w-8 h-8 mb-2" />
                  <div className="text-sm">Quick Transfer</div>
                </div>
                <div className="bg-blue-500 text-white rounded-xl p-4">
                  <CreditCard className="w-8 h-8 mb-2" />
                  <div className="text-sm">Pay Bills</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
