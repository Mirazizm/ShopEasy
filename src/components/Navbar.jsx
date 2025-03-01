import { Link } from "react-router-dom";
import { useState } from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react"; // Hamburger icon uchun
import ru from "../locale/ru";
import en from "../locale/en";
import uz from "../locale/uz";

i18next.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
    uz: { translation: uz },
  },
  lng: "en",
  fallbackLng: "en",
});

const Navbar = ({ setShowLogin }) => {
  const { t } = useTranslation();
  const [showProfile, setShowProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobil menyu uchun

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <nav className="flex justify-between items-center bg-gradient-to-r border-b border-gray-300 shadow-sm px-6 py-4 relative">
      <div className="flex items-center space-x-3">
        <img src="https://i.imgur.com/SCObtUN.png" alt="logo" className="h-8" />
        <span className="text-xl font-bold">ShopEasy</span>
      </div>

      {/* Mobil menyu tugmasi */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop menyu */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/">{t("home")}</Link>
        <Link to="/contact">{t("contactt")}</Link>
        <Link to="/address">{t("addres")}</Link>
        <Link to="/footer">{t("footerr")}</Link>
      </div>

      {/* Mobil menyu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            {t("home")}
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            {t("contactt")}
          </Link>
          <Link to="/address" onClick={() => setMenuOpen(false)}>
            {t("addres")}
          </Link>
          <Link to="/footer" onClick={() => setMenuOpen(false)}>
            {t("footerr")}
          </Link>
        </div>
      )}

      {/* Profil va til tanlash qismi */}
      <div className="flex items-center gap-4">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
          onClick={() => setShowLogin(true)}
        >
          {t("Вход")}
        </button>

        {/* Profil tugmasi */}
        <div className="relative">
          <button
            className="flex items-center gap-2"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img
              src="https://i.imgur.com/SCObtUN.png"
              alt="Profile"
              className="w-8 h-8 rounded-full border"
            />
            {t("Вашпрофиль")}
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 text-gray-800">
              <div className="flex items-center gap-3 border-b pb-3">
                <img
                  src="https://i.imgur.com/SCObtUN.png"
                  alt="Profile"
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <p className="font-semibold">Miraziz</p>
                  <p className="text-sm text-gray-500">id: 533946533</p>
                </div>
              </div>

              <ul className="mt-3 space-y-2">
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">{t("Объявления")}</li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">{t("Чат")}</li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">{t("ПлатежиисчётShopEasy")}</li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">{t("Настройки")}</li>
              </ul>

              <div className="mt-4">
                <p className="text-gray-500 text-sm">{t("Избранные:")}</p>
                <div className="flex justify-between p-2 hover:bg-gray-100 rounded cursor-pointer">
                  <span>{t("Объявления")}</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full">0</span>
                </div>
                <div className="flex justify-between p-2 hover:bg-gray-100 rounded cursor-pointer">
                  <span>{t("Поиски")}</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full">0</span>
                </div>
              </div>

              <button className="w-full mt-3 text-left p-2 text-red-500 hover:bg-gray-100 rounded">
                {t("Выйти")}
              </button>
            </div>
          )}
        </div>

        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="p-2 border rounded"
        >
          <option disabled>{t("language")}</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="uz">Uzbek</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
