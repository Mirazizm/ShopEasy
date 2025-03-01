import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";

const Js = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);

  const handleImageUpload = useCallback((event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...newImages]);

    // Fayllar o'chirilganda URL'larni tozalash
    newImages.forEach((url) => {
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  }, []);

  const handleRemoveImage = useCallback((index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-6">📷 {t("imageUpload.title")}</h2>
      <p className="text-sm text-gray-600 mb-4">{t("imageUpload.description")}</p>

      <div className="grid grid-cols-4 gap-4">
        {/* Rasmlar */}
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-28 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={image} alt={`uploaded-${index}`} className="w-full h-full object-cover" />
            <button
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
              onClick={() => handleRemoveImage(index)}
            >
              ✖
            </button>
          </div>
        ))}

        {/* Yuklash tugmasi */}
        {images.length < 8 && (
          <label className="w-full h-28 bg-gray-50 border-dashed border-2 border-gray-300 flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-gray-100">
            <span className="text-gray-500 text-xl mb-1">➕</span>
            <span className="text-sm text-gray-600">{t("imageUpload.addImage")}</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default Js;
