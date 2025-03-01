import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Country = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const paymentFaqData = [
    { question: t("payment.faq1.question"), answer: t("payment.faq1.answer") },
    { question: t("payment.faq2.question"), answer: t("payment.faq2.answer") },
    { question: t("payment.faq3.question"), answer: t("payment.faq3.answer") },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">{t("payment.title")}</h2>
      <div className="space-y-4">
        {paymentFaqData.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left py-4 flex justify-between items-center text-lg font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-gray-500">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && <p className="text-gray-600 pb-4">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
