import React, { useState } from 'react';
import styled from 'styled-components';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { question: 'What is your refund policy?', answer: 'Our refund policy lasts 30 days...' },
    { question: 'What payment methods are accepted?', answer: 'We accept major credit cards, debit cards, and PayPal. All transactions are processed securely.' },
    { question: 'Do you offer international Service?', answer: 'Yes, we offer international Services to many countries. Service fees may vary depending on your location.' },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const Buttonstyle = styled.button`
    color: #323350;
    width: 100%; // Ensure button takes full width of the container
  `;

  return (
    <div className="p-5 overflow-x-hidden"> {/* Prevent horizontal overflow */}
      <h2 className="text-2xl font-bold mb-4 text-center pt-12">Frequently Asked Questions</h2>
      <div data-aos="fade-left" className="flex flex-col space-y-4 items-center">
        {questions.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-lg"> {/* Use max-w-lg to limit the max width */}
            <Buttonstyle
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center text-left font-semibold text-blue-600 hover:text-blue-800"
            >
              <span>{item.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Buttonstyle>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
