import React from "react";
import { useTranslation } from "react-i18next";

const Jsx = () => {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: t("company"),
      links: ["services", "pricing", "reviews", "contacts", "careers", "privacyPolicy", "termsOfUse"],
    },
    {
      title: t("usefulInfo"),
      links: ["howItWorks", "buyWithOperator", "faq", "ads", "blacklist"],
    },
    {
      title: t("specialOffers"),
      links: ["discounts", "referral", "cashback", "antiFraud"],
    },
  ];

  return (
    <footer className="bg-gray-100 pt-10">
      {/* Header qismi */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-8 text-center">
        <h2 className="text-2xl font-bold">{t("footerTitle")}</h2>
        <div className="flex justify-center mt-4 space-x-4">
          {[
            { src: "https://img.icons8.com/color/48/phone.png", alt: "Telefon" },
            { src: "https://img.icons8.com/doodle/48/ringing-phone.png", alt: "Qo‘ng‘iroq" },
          ].map((icon, index) => (
            <a key={index} href="#" className="hover:opacity-80">
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
          <a href="#" className="text-2xl hover:opacity-80">💬</a>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-9 text-gray-700">
        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-blue-500">{t(link)}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright qismi */}
      <div className="text-center py-6 border-t">
        <p>{t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Jsx;
