import { Play } from "lucide-react";

export default function HeroHeader() {
  return (
    <section className="py-20 bg-gradient-to-br from-bank-blue-900 via-bank-blue-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Experience the Future of Banking
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Discover innovative banking solutions designed for modern life. From digital payments to investment management, 
              we're transforming how you interact with your finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-bank-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative">
            <div className="relative bg-bank-blue-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video placeholder - can be replaced with actual video */}
              <div className="aspect-video bg-gradient-to-br from-bank-blue-700 to-green-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mb-4 mx-auto hover:bg-white/30 transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white text-lg font-medium">Watch Our Story</p>
                  <p className="text-blue-200 text-sm mt-2">2:30 min</p>
                </div>
              </div>
              
              {/* Video overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bank-blue-900/50 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}