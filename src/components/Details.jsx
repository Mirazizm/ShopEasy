import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const houses = [
    { id: 1, name: t("city.tashkent"), location: t("district.sergeli"), price: "300 000$", area: "200 m²", rooms: 8, repair: t("repair.good"), image: "https://i.ytimg.com/vi/hPvk00ynlXY/maxresdefault.jpg" },
    { id: 2, name: t("city.tashkent"), location: t("district.chilonzor"), price: "370 000$", area: "250 m²", rooms: 5, repair: t("repair.good"), image: "https://na-dache.pro/uploads/posts/2021-11/1636361328_1-na-dache-pro-p-uzbekskii-dom-foto-1.jpg" },
    { id: 3, name: t("city.tashkent"), location: t("district.chilonzor"), price: "250 000$", area: "180 m²", rooms: 7, repair: t("repair.good"), image: "https://na-dache.pro/uploads/posts/2021-11/1636361364_3-na-dache-pro-p-uzbekskii-dom-foto-3.jpg" },
    { id: 4, name: t("city.tashkent"), location: t("district.yunusobod"), price: "290 000$", area: "200 m²", rooms: 6, repair: t("repair.good"), image: "https://na-dache.pro/uploads/posts/2021-11/1636361380_25-na-dache-pro-p-uzbekskii-dom-foto-25.jpg" },
    { id: 5, name: t("city.tashkent"), location: t("district.sergeli"), price: "180 000$", area: "200 m²", rooms: 6, repair: t("repair.good"), image: "https://na-dache.pro/uploads/posts/2021-11/1636361344_5-na-dache-pro-p-uzbekskii-dom-foto-5.jpg" },
    { id: 6, name: t("city.tashkent"), location: t("district.yakkasaroy"), price: "200 000$", area: "200 m²", rooms: 6, repair: t("repair.good"), image: "https://idei.club/uploads/posts/2021-11/1635886103_1-idei-club-p-bishkek-osobnyak-uilar-interer-krasivo-fot-1.jpg" },
    { id: 7, name: t("city.tashkent"), location: t("district.uchtepa"), price: "190 000$", area: "200 m²", rooms: 6, repair: t("repair.good"), image: "https://na-dache.pro/uploads/posts/2021-11/1636361395_9-na-dache-pro-p-uzbekskii-dom-foto-9.jpg" },
    { id: 8, name: t("city.tashkent"), location: t("district.sergeli"), price: "210 000$", area: "200 m²", rooms: 6, repair: t("repair.good"), image: "https://na-dache.pro/uploads/posts/2021-11/1636361412_27-na-dache-pro-p-uzbekskii-dom-foto-27.jpg" },
    { id: 9, name: t("city.tashkent"), location: t("district.yunusobod"), price: "210 000$", area: "200 m²", rooms: 6, repair: t("repair.good"), image: "https://na-dache.pro/uploads/posts/2021-11/1636361360_37-na-dache-pro-p-uzbekskii-dom-foto-37.jpg" },
  ];

  const house = houses.find((house) => house.id === parseInt(id));

  if (!house) {
    return <h2 className="text-center text-red-500 text-2xl mt-10">{t("error.notFound")}</h2>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition" onClick={() => navigate(-1)}>
        {t("back")}
      </button>
      <div className="border rounded-lg p-6 shadow-lg mt-4 bg-white">
        <img src={house.image} alt={house.name} className="w-full h-80 object-cover rounded-lg" />
        <h2 className="text-2xl font-bold mt-4">{house.name}</h2>
        <p className="text-gray-500">{house.location}</p>
        <div className="mt-4 space-y-2">
          <p className="text-gray-600"><b>{t("details.area")}:</b> {house.area}</p>
          <p className="text-gray-600"><b>{t("details.rooms")}:</b> {house.rooms}</p>
          <p className="text-gray-600"><b>{t("details.repair")}:</b> {house.repair}</p>
        </div>
        <p className="text-green-600 font-bold text-xl mt-4">{house.price}</p>
      </div>
    </div>
  );
};

export default Details;
