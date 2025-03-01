import React from "react";
import { useTranslation } from "react-i18next";
import Jsx from "./Jsx";

const Contact = () => {
  const { t } = useTranslation();

  const houseData = [
    {
      image: "https://domtut.uz/resources/uploads/post/kraska-ili-oboi-kakoy-variant-dlya-otdelki-sten-vybrat.jpg",
      title: t("city.tashkent"),
      description: t("house.sergeli"),
    },
    {
      image: "https://www.ustabor.uz/upload/images/arhit_dizayn3.jpg",
      title: t("city.tashkent"),
      description: t("house.yunusobod"),
    },
    {
      image: "https://domtut.uz/resources/uploads/post/top-10-dizayn-studi-kvartir-i-domov-v-tashkente-2023-4.jpeg",
      title: t("city.tashkent"),
      description: t("house.yakkasaroy"),
    },
    {
      image: "https://design.pibig.info/uploads/posts/2023-02/1677448103_design-pibig-info-p-dizain-komnati-bez-mebeli-krasivo-1.jpg",
      title: t("city.tashkent"),
      description: t("house.chilonzor"),
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-x-oBK046ENlvVPKPtQvrk2VUUndfJqR7vmqpWeWyHX5mO0f9HBSsdqg9lE4CPOpa92c&usqp=CAU",
      title: t("city.tashkent"),
      description: t("house.sergeli"),
    },
    {
      image: "https://myremont.ru/assets/from_origin/upload/resize_cache/iblock/221/600_450_2/221a9e32faef97f1453ba54ffb7123f3.jpg",
      title: t("city.tashkent"),
      description: t("house.yunusobod"),
    },
    {
      image: "https://static.baza.farpost.ru/v/1636164652531_bulletin",
      title: t("city.tashkent"),
      description: t("house.uchtepa"),
    },
    {
      image: "https://idei.club/uploads/posts/2021-10/1633349954_53-idei-club-p-remont-kvartir-oboi-interer-krasivo-foto-55.jpg",
      title: t("city.tashkent"),
      description: t("house.sergeli"),
    },
  ];

  return (
    <>
      {/* Contact Header */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-12 px-6 md:px-16 rounded-2xl flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.header")}</h1>
          <p className="text-lg mb-6">{t("contact.description")}</p>
        </div>
      </section>

      {/* House Listings */}
      <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">{t("contact.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {houseData.map((house, index) => (
            <div key={index} className="flex bg-gray-100 p-4 rounded-lg shadow-md">
              <img src={house.image} alt={house.title} className="w-1/3 rounded-lg object-cover" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{house.title}</h3>
                <p className="text-gray-600">{house.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Jsx />
    </>
  );
};

export default Contact;
