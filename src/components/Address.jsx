import React from "react";
import { useTranslation } from "react-i18next";
import About from "./About";
import Jsx from "./Jsx";
import Country from "./Country";

const Address = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12 px-6 md:px-16 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="flex-1">
          <p className="text-lg mb-4 opacity-90">{t("address.help")}</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{t("address.find_answers")}</h1>
        </div>

        {/* Qidiruv paneli */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md flex items-center px-4 py-3">
            <input
              type="text"
              placeholder={t("address.enter_question")}
              className="flex-1 text-gray-700 outline-none border-none bg-transparent placeholder-gray-400"
            />
            <button className="ml-3">
              <img src="https://img.icons8.com/ios-filled/24/search.png" alt="Search" />
            </button>
          </div>
        </div>
      </section>

      {/* Qo'shimcha komponentlar */}
      <About />
      <Country />
      <Jsx />
    </>
  );
};

export default Address;
