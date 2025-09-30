"use client";

import { useState, useEffect } from "react";

export default function PhotoList() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json();

        // 確実に動作する画像URLに変更
        const modifiedPhotos = data.slice(0, 20).map(photo => {
          return {
            ...photo,
            thumbnailUrl: `https://picsum.photos/150/150?random=${photo.id}`,
            url: `https://picsum.photos/150/150?random=${photo.id}`,
          };
        });

        setPhotos(modifiedPhotos);
      } catch (error) {
        console.error("写真データの取得に失敗:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-gray-200 h-48 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">写真一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <div
            key={photo.id}
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="w-full h-32 object-cover rounded mb-2"
              loading="lazy"
            />
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">{photo.title}</h3>
            <p className="text-xs text-gray-500">
              Album: {photo.albumId} | ID: {photo.id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
