import { useState } from "react";
import { ChevronDown, UserCircle, CreditCard, Shield } from "lucide-react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      icon: UserCircle,
      title: "Account Management",
      color: "text-blue-600"
    },
    {
      icon: CreditCard,
      title: "Cards & Payments",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      color: "text-blue-600"
    }
  ];

  const faqs = [
    {
      question: "How do I reset my online banking password?",
      answer: "You can reset your password by clicking \"Forgot Password\" on the login page. Follow the instructions sent to your registered email address. For security, you'll need to verify your identity using your phone number or security questions."
    },
    {
      question: "What should I do if my card is lost or stolen?",
      answer: "Immediately call our 24/7 card services hotline or use the mobile app to instantly freeze your card. We'll issue a replacement card within 2-3 business days. You're protected from unauthorized transactions when reported promptly."
    },
    {
      question: "How can I increase my credit limit?",
      answer: "You can request a credit limit increase through online banking, mobile app, or by calling customer service. We'll review your account history, income, and credit score. Approval depends on your creditworthiness and payment history."
    },
    {
      question: "What are your current interest rates?",
      answer: "Our interest rates vary by account type and are updated regularly based on market conditions. Visit our rates page or contact customer service for current rates on savings accounts, CDs, and loan products."
    },
    {
      question: "How do I set up direct deposit?",
      answer: "You can set up direct deposit by providing your employer with your routing number and account number, which you can find in your online banking account or on your checks. The process typically takes 1-2 pay periods to take effect."
    },
    {
      question: "Are there fees for using other banks' ATMs?",
      answer: "We reimburse ATM fees for certain account types. Basic accounts may have limited reimbursements, while premium accounts often include unlimited ATM fee reimbursements. Check your account terms for specific details."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-bank-blue-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Find comprehensive answers to all your banking questions and concerns.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {faqCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl text-center">
              <category.icon className={`${category.color} w-12 h-12 mx-auto mb-4`} />
              <h3 className="font-semibold text-bank-blue-900">{category.title}</h3>
            </div>
          ))}
        </div>

        {/* Extended FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-bank-blue-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-green-600 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-800 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
