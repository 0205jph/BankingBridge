export default function About() {
  const stats = [
    { value: "500K+", label: "Happy Customers" },
    { value: "$2.5B+", label: "Assets Under Management" },
    { value: "150+", label: "Branch Locations" },
    { value: "25+", label: "Years of Excellence" }
  ];

  const leadership = [
    {
      name: "David Thompson",
      role: "Chief Executive Officer",
      description: "25+ years in banking and financial services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Lisa Chen",
      role: "Chief Technology Officer",
      description: "Expert in fintech innovation and digital banking",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Robert Martinez",
      role: "Chief Financial Officer",
      description: "Specialized in risk management and compliance",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-bank-blue-800 mb-6">About SecureBank</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on trust, innovation, and customer-first principles, we're committed to your financial success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-bank-blue-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To provide secure, innovative banking solutions that empower individuals and businesses to achieve their financial goals. We combine cutting-edge technology with personalized service to deliver exceptional banking experiences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Since our founding, we've remained committed to building lasting relationships with our customers through transparency, integrity, and continuous innovation in financial services.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern bank building" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold mb-2 ${index % 2 === 0 ? 'text-bank-blue-800' : 'text-green-600'}`}>
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-bank-blue-800 mb-6">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals leading SecureBank's mission to transform banking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <div key={index} className="text-center">
              <img 
                src={leader.image} 
                alt={`${leader.name} portrait`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-bank-blue-800 mb-2">{leader.name}</h3>
              <p className="text-green-600 mb-2">{leader.role}</p>
              <p className="text-gray-600 text-sm">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
