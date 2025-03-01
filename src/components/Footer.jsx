import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import Js from "./Js";
import Jsx from "./Jsx";

const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Xatolarni avtomatik tozalash
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const validateForm = useCallback(() => {
    let newErrors = {};

    if (formData.title.length < 10) {
      newErrors.title = t("form.errors.title");
    }
    if (!formData.category) {
      newErrors.category = t("form.errors.category");
    }
    if (!formData.price || isNaN(formData.price) || formData.price <= 0) {
      newErrors.price = t("form.errors.price");
    }
    if (formData.description.length < 20) {
      newErrors.description = t("form.errors.description");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, t]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(t("form.success"), formData);
    }
  }, [validateForm, formData, t]);

  return (
    <>
      <section className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-12 px-6 md:px-16 rounded-2xl flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("footer.title")}</h1>
          <p className="text-lg mb-6">{t("footer.subtitle")}</p>
        </div>
      </section>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{t("form.heading")}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">{t("form.title")} *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder={t("form.titlePlaceholder")}
              className="w-full p-2 border rounded-lg"
              required
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>

          <div>
            <label className="block font-medium">{t("form.category")} *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="">{t("form.selectCategory")}</option>
              <option value="house">{t("form.categoryHouse")}</option>
              <option value="apartment">{t("form.categoryApartment")}</option>
            </select>
            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
          </div>

          <div>
            <label className="block font-medium">{t("form.price")} ($) *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder={t("form.pricePlaceholder")}
              className="w-full p-2 border rounded-lg"
              required
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
          </div>

          <div>
            <label className="block font-medium">{t("form.description")} *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder={t("form.descriptionPlaceholder")}
              className="w-full p-2 border rounded-lg"
              required
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            {t("form.submit")}
          </button>
        </form>
      </div>

      <div className="mt-6">
        <Js />
        <Jsx />
      </div>
    </>
  );
};

export default Footer;
