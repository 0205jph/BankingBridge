import { Shield, Headphones, Smartphone, Percent, Globe, Users } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Advanced encryption and multi-factor authentication protect your financial data with industry-leading security measures.",
      bgColor: "from-blue-50 to-green-50",
      iconBg: "bg-blue-600"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is available round the clock to assist you with any banking needs or questions.",
      bgColor: "from-green-50 to-blue-50",
      iconBg: "bg-green-600"
    },
    {
      icon: Smartphone,
      title: "Digital Innovation",
      description: "Experience cutting-edge mobile banking with intuitive interfaces and seamless digital transactions.",
      bgColor: "from-blue-50 to-green-50",
      iconBg: "bg-blue-600"
    },
    {
      icon: Percent,
      title: "Competitive Rates",
      description: "Enjoy attractive interest rates on savings accounts and competitive loan rates that maximize your financial growth.",
      bgColor: "from-green-50 to-blue-50",
      iconBg: "bg-green-600"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your accounts and make transactions from anywhere in the world with our extensive ATM network.",
      bgColor: "from-blue-50 to-green-50",
      iconBg: "bg-blue-600"
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "Get personalized financial advice and tailored solutions from our experienced banking professionals.",
      bgColor: "from-green-50 to-blue-50",
      iconBg: "bg-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-bank-blue-800 mb-6">Why Choose SecureBank?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages of banking with us and experience financial services that put your needs first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`bg-gradient-to-br ${benefit.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className={`${benefit.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-bank-blue-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
