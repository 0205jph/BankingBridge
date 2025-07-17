import { CheckCircle, Shield, Clock, Users, TrendingUp, CreditCard } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your data is protected with military-grade encryption and multi-factor authentication.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Get help whenever you need it with our round-the-clock customer support team.",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: TrendingUp,
    title: "Smart Investments",
    description: "Grow your wealth with AI-powered investment recommendations and portfolio management.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: CreditCard,
    title: "Instant Transfers",
    description: "Send money instantly to anyone, anywhere with our advanced payment processing.",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    icon: Users,
    title: "Family Banking",
    description: "Manage your family's finances with shared accounts and parental controls.",
    color: "text-pink-600",
    bgColor: "bg-pink-100"
  },
  {
    icon: CheckCircle,
    title: "Easy Setup",
    description: "Open your account in minutes with our streamlined digital onboarding process.",
    color: "text-teal-600",
    bgColor: "bg-teal-100"
  }
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-bank-blue-900 mb-6">Powerful Features for Modern Banking</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Experience banking reimagined with cutting-edge features designed to make your financial life easier and more secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-6 hover:scale-110`}>
                <feature.icon className={`${feature.color} w-8 h-8`} />
              </div>
              <h3 className="text-2xl font-bold text-bank-blue-900 mb-4 transition-colors duration-300 hover:text-green-700">
                {feature.title}
              </h3>
              <p className="text-gray-800 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-bank-blue-800 hover:bg-bank-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors mr-4">
            Explore All Features
          </button>
          <button className="border-2 border-bank-blue-800 text-bank-blue-800 hover:bg-bank-blue-800 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}