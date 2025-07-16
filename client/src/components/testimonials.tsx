import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332bd5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "SecureBank has transformed my banking experience. The mobile app is incredibly user-friendly, and their customer service is exceptional. I've never had such peace of mind with my finances.",
      bgColor: "from-blue-50 to-white"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "The investment services and financial planning support have helped me achieve my long-term goals. The team is knowledgeable and always available when I need guidance.",
      bgColor: "from-green-50 to-white"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "As a frequent traveler, I love the global access and no foreign transaction fees. The security features give me confidence when banking internationally.",
      bgColor: "from-blue-50 to-white"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-bank-blue-900 mb-6">What Our Customers Say</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Hear from satisfied customers who trust SecureBank for their financial needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-gradient-to-br ${testimonial.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center mb-6">
                <div className="text-green-500 flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-bank-blue-900">{testimonial.name}</div>
                  <div className="text-gray-700 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
