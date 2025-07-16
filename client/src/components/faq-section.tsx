import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I open a new account?",
      answer: "Opening a new account is simple and can be done online in just a few minutes. You'll need a valid ID, proof of address, and initial deposit. Our digital onboarding process guides you through each step with clear instructions."
    },
    {
      question: "What security measures do you have in place?",
      answer: "We use advanced encryption, multi-factor authentication, fraud monitoring, and secure servers to protect your information. Your account is monitored 24/7 for suspicious activity, and we offer real-time alerts for all transactions."
    },
    {
      question: "Are there any monthly fees?",
      answer: "We offer several account types with different fee structures. Our basic checking account has no monthly fees with a minimum balance, while premium accounts include additional benefits. View our fee schedule for complete details."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our support team is available 24/7 through phone, live chat, email, and secure messaging within your online banking portal. We also have physical branches for in-person assistance during business hours."
    },
    {
      question: "Can I access my account internationally?",
      answer: "Yes, you can access your account from anywhere in the world through our secure online banking and mobile app. We have partnerships with international ATM networks and offer competitive foreign exchange rates."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-bank-blue-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our banking services and account features.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-bank-blue-800">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-green-600 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
