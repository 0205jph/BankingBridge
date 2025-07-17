import { Shield, Headphones, Smartphone, Percent, Globe, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Benefits() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger the animation of items
            benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [benefits]);

  const benefits = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Advanced encryption and multi-factor authentication protect your financial data with industry-leading security measures.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is available round the clock to assist you with any banking needs or questions.",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      icon: Smartphone,
      title: "Digital Innovation",
      description: "Experience cutting-edge mobile banking with intuitive interfaces and seamless digital transactions.",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      icon: Percent,
      title: "Competitive Rates",
      description: "Enjoy attractive interest rates on savings accounts and competitive loan rates that maximize your financial growth.",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your accounts and make transactions from anywhere in the world with our extensive ATM network.",
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100"
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "Get personalized financial advice and tailored solutions from our experienced banking professionals.",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-bank-blue-900 mb-6">Why Choose SecureBank?</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Discover the advantages of banking with us and experience financial services that put your needs first.
          </p>
        </div>

        <div className="space-y-24">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } transition-all duration-1000 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              {/* Icon and Visual Element */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  {/* Large background circle */}
                  <div className={`w-80 h-80 bg-gradient-to-br ${benefit.bgGradient} rounded-full flex items-center justify-center relative`}>
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-10 rounded-full`}></div>
                    
                    {/* Icon container */}
                    <div className={`w-32 h-32 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-6`}>
                      <benefit.icon className="text-white w-16 h-16" />
                    </div>
                    
                    {/* Decorative rings */}
                    <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
                    <div className="absolute inset-4 border border-white/20 rounded-full"></div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-full opacity-20 animate-pulse`}></div>
                  <div className={`absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-full opacity-30 animate-pulse`} style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl font-bold text-bank-blue-900 mb-6 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-xl text-gray-800 leading-relaxed mb-8">
                  {benefit.description}
                </p>
                
                {/* Call to action */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className={`bg-gradient-to-r ${benefit.gradient} text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                    Learn More
                  </button>
                  <button className="border-2 border-bank-blue-800 text-bank-blue-800 hover:bg-bank-blue-800 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
