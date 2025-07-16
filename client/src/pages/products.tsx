import { User, Building, TrendingUp, Home, CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Products() {
  const products = [
    {
      icon: User,
      title: "Personal Banking",
      description: "Complete banking solutions for individuals including checking, savings, and money market accounts.",
      features: ["Free checking accounts", "High-yield savings", "Certificate of deposits", "Personal loans"],
      bgColor: "from-blue-50 to-white",
      iconBg: "bg-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Building,
      title: "Business Banking",
      description: "Specialized financial services designed to help businesses grow and manage their finances effectively.",
      features: ["Business checking accounts", "Merchant services", "Commercial loans", "Cash management"],
      bgColor: "from-green-50 to-white",
      iconBg: "bg-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: TrendingUp,
      title: "Investment Services",
      description: "Professional investment management and retirement planning services to secure your financial future.",
      features: ["Portfolio management", "Retirement planning", "Investment advisory", "Wealth management"],
      bgColor: "from-blue-50 to-white",
      iconBg: "bg-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Home,
      title: "Mortgage & Loans",
      description: "Competitive rates and flexible terms for home mortgages, personal loans, and auto financing.",
      features: ["Home mortgages", "Personal loans", "Auto loans", "Home equity lines"],
      bgColor: "from-green-50 to-white",
      iconBg: "bg-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: CreditCard,
      title: "Credit Cards",
      description: "Reward credit cards with competitive rates, cashback options, and exclusive benefits.",
      features: ["Cashback rewards", "Travel rewards", "Low interest rates", "No annual fees"],
      bgColor: "from-blue-50 to-white",
      iconBg: "bg-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Comprehensive insurance solutions to protect your assets, family, and financial future.",
      features: ["Life insurance", "Auto insurance", "Home insurance", "Business insurance"],
      bgColor: "from-green-50 to-white",
      iconBg: "bg-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-bank-blue-800 mb-6">Products & Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive banking solutions tailored to meet your personal and business financial needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className={`bg-gradient-to-br ${product.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className={`${product.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <product.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-bank-blue-800 mb-4">{product.title}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
              <Button className={`${product.buttonColor} text-white transition-colors`}>
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
