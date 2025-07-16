export default function About() {
  const branches = [
    {
      name: "Manhattan Financial District",
      address: "123 Wall Street, New York, NY 10005",
      phone: "(212) 555-0123",
      hours: "Mon-Fri: 9AM-5PM, Sat: 9AM-2PM",
      manager: "Jennifer Adams",
      services: ["Full Service Banking", "Investment Advisory", "Safety Deposit Boxes"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.309328430943!2d-74.0084!3d40.7057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b0d767!2s123%20Wall%20St%2C%20New%20York%2C%20NY%2010005!5e0!3m2!1sen!2sus!4v1234567890123"
    },
    {
      name: "Midtown Business Center",
      address: "456 Fifth Avenue, New York, NY 10018",
      phone: "(212) 555-0456",
      hours: "Mon-Fri: 8AM-6PM, Sat: 10AM-3PM",
      manager: "Michael Rodriguez",
      services: ["Business Banking", "Commercial Loans", "Treasury Services"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.863636363636!2d-73.9857!3d40.7505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0x62b82f5e81d1a2e7!2s456%20Fifth%20Ave%2C%20New%20York%2C%20NY%2010018!5e0!3m2!1sen!2sus!4v1234567890124"
    },
    {
      name: "Brooklyn Heights Branch",
      address: "789 Montague Street, Brooklyn, NY 11201",
      phone: "(718) 555-0789",
      hours: "Mon-Fri: 9AM-5PM, Sat: 9AM-1PM",
      manager: "Sarah Johnson",
      services: ["Personal Banking", "Mortgage Services", "Financial Planning"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.123456789012!2d-73.9928!3d40.6951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2e6b82c5d3%3A0x3e4f5a6b7c8d9e0f!2s789%20Montague%20St%2C%20Brooklyn%2C%20NY%2011201!5e0!3m2!1sen!2sus!4v1234567890125"
    },
    {
      name: "Queens Plaza Branch",
      address: "321 Northern Boulevard, Long Island City, NY 11101",
      phone: "(718) 555-0321",
      hours: "Mon-Fri: 9AM-5PM, Sat: 9AM-2PM",
      manager: "David Chen",
      services: ["Full Service Banking", "Small Business Loans", "International Banking"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.987654321098!2d-73.9403!3d40.7505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ee6c2b1a3d4%3A0x5f6a7b8c9d0e1f2a!2s321%20Northern%20Blvd%2C%20Long%20Island%20City%2C%20NY%2011101!5e0!3m2!1sen!2sus!4v1234567890126"
    }
  ];

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

        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        {/* Branch Locations */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-bank-blue-800 mb-6">Branch Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at one of our convenient locations throughout the New York metropolitan area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-bank-blue-800 mb-2">{branch.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <span className="text-green-600 font-semibold mr-2">📍</span>
                    <span className="text-gray-700">{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 font-semibold mr-2">📞</span>
                    <span className="text-gray-700">{branch.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 font-semibold mr-2">🕒</span>
                    <span className="text-gray-700">{branch.hours}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 font-semibold mr-2">👤</span>
                    <span className="text-gray-700">Manager: {branch.manager}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-bank-blue-800 mb-2">Services Available</h4>
                  <ul className="text-gray-600 space-y-1">
                    {branch.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center">
                        <span className="text-green-600 mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="h-64">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${branch.name} Location`}
                  className="rounded-b-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
