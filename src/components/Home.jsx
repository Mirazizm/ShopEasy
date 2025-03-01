import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Jsx from "./Jsx";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const cars = useMemo(
    () => [
      { id: 1, name: t("city.tashkent"), location: t("district.sergeli"), price: "300 000$", image: "https://i.ytimg.com/vi/hPvk00ynlXY/maxresdefault.jpg" },
      { id: 2, name: t("city.tashkent"), location: t("district.chilonzor"), price: "370 000$", image: "https://na-dache.pro/uploads/posts/2021-11/1636361328_1-na-dache-pro-p-uzbekskii-dom-foto-1.jpg" },
      { id: 3, name: t("city.tashkent"), location: t("district.chilonzor"), price: "250 000$", image: "https://na-dache.pro/uploads/posts/2021-11/1636361364_3-na-dache-pro-p-uzbekskii-dom-foto-3.jpg" },
      { id: 4, name: t("city.tashkent"), location: t("district.yunusobod"), price: "290 000$", image: "https://na-dache.pro/uploads/posts/2021-11/1636361380_25-na-dache-pro-p-uzbekskii-dom-foto-25.jpg" },
      { id: 5, name: t("city.tashkent"), location: t("district.sergeli"), price: "180 000$", image: "https://na-dache.pro/uploads/posts/2021-11/1636361344_5-na-dache-pro-p-uzbekskii-dom-foto-5.jpg" },
      { id: 6, name: t("city.tashkent"), location: t("district.yakkasaroy"), price: "200 000$", image: "https://idei.club/uploads/posts/2021-11/1635886103_1-idei-club-p-bishkek-osobnyak-uilar-interer-krasivo-fot-1.jpg" },
      { id: 7, name: t("city.tashkent"), location: t("district.uchtepa"), price: "190 000$", image: "https://na-dache.pro/uploads/posts/2021-11/1636361395_9-na-dache-pro-p-uzbekskii-dom-foto-9.jpg" },
      { id: 8, name: t("city.tashkent"), location: t("district.sergeli"), price: "210 000$", image: "https://na-dache.pro/uploads/posts/2021-11/1636361412_27-na-dache-pro-p-uzbekskii-dom-foto-27.jpg" },
      { id: 9, name: t("city.tashkent"), location: t("district.yunusobod"), price: "210 000$", image: "https://na-dache.pro/uploads/posts/2021-11/1636361360_37-na-dache-pro-p-uzbekskii-dom-foto-37.jpg" },
    ],
    [t]
  );

  return (
    <div className="p-6">
      <section className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-12 px-6 md:px-16 rounded-2xl flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("herotitle")}</h1>
          <p className="text-lg mb-6">{t("f")}</p>
        </div>
      </section>
      
      <h1 className="text-center text-2xl font-bold mb-6">{t("m")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="border rounded-lg p-4 shadow-lg">
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{car.name}</h3>
            <p className="text-gray-500">{car.location}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-green-600 font-bold">{car.price}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                onClick={() => navigate(`/details/${car.id}`)}
              >
                {t("p")}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Jsx />
    </div>
  );
};

export default Home;
