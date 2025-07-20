import React, { useState } from "react";

const faqs = [
  {
    question: "What is Ayurvedic medicine?",
    answer:
      "Ayurvedic medicine is a natural system of healing that originated in India over 3,000 years ago. It uses herbal compounds, special diets, and other health practices.",
  },
  {
    question: "Are your products 100% natural?",
    answer:
      "Yes, all our products are made from pure herbal and natural ingredients without harmful chemicals or preservatives.",
  },
  {
    question: "Do you ship across India?",
    answer:
      "Yes, we offer nationwide delivery across India with standard and express shipping options.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive an email and SMS with a tracking link.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section
      className="py-12 px-6 bg-gradient-to-b from-green-50 to-white"
      id="faq"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-700 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 bg-white hover:bg-green-50 transition flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-green-800">
                  {faq.question}
                </span>
                <span className="text-green-600 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-700 bg-white border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
