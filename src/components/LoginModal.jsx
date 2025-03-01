import React from "react";
import { useTranslation } from "react-i18next";

const LoginModal = ({ setShowLogin }) => {
  const { t } = useTranslation();

  const socialLogins = [
    {
      name: "continueWithFacebook",
      icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
      alt: "Facebook",
    },
    {
      name: "continueWithApple",
      icon: "https://cdn-icons-png.flaticon.com/512/179/179309.png",
      alt: "Apple",
    },
    {
      name: "continueWithGoogle",
      icon: "https://cdn-icons-png.flaticon.com/512/2702/2702602.png",
      alt: "Google",
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Yopish tugmasi */}
        <button
          className="text-red-500 text-2xl absolute top-3 right-3"
          onClick={() => setShowLogin(false)}
        >
          ×
        </button>

        {/* Sarlavha */}
        <h2 className="text-center text-2xl font-bold mb-4">{t("loginTitle")}</h2>

        {/* Ijtimoiy tarmoqlar orqali kirish */}
        <div className="flex flex-col gap-3">
          {socialLogins.map(({ name, icon, alt }) => (
            <button
              key={name}
              className="flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-100"
            >
              <img src={icon} alt={alt} className="w-6 h-6" />
              {t(name)}
            </button>
          ))}
        </div>

        {/* Yoki ajratgich */}
        <div className="text-center my-4 text-gray-500">{t("or")}</div>

        {/* Kirish formasi */}
        <input
          type="text"
          placeholder={t("emailOrPhone")}
          className="w-full border p-2 rounded-lg mb-2 focus:ring focus:ring-blue-300"
        />
        <input
          type="password"
          placeholder={t("password")}
          className="w-full border p-2 rounded-lg mb-2 focus:ring focus:ring-blue-300"
        />

        {/* Parolni unutdingizmi? */}
        <div className="text-right text-blue-500 cursor-pointer hover:underline">
          {t("forgotPassword")}
        </div>

        {/* Kirish tugmasi */}
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600">
          {t("loginButton")}
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
