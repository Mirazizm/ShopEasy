import React, { useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = useMemo(() => [
    { question: t("about.faq1.question"), answer: t("about.faq1.answer") },
    { question: t("about.faq2.question"), answer: t("about.faq2.answer") },
    { question: t("about.faq3.question"), answer: t("about.faq3.answer") },
    { question: t("about.faq4.question"), answer: t("about.faq4.answer") },
    { question: t("about.faq5.question"), answer: t("about.faq5.answer") },
  ], [t]);

  const toggleFAQ = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">{t("about.title")}</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left py-4 flex justify-between items-center text-lg font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-gray-500">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-600 pb-4 overflow-hidden"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
