// 2. 複数フィールドの制御コンポーネント
"use client";

import { useState } from "react";

export default function MultipleFieldsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-8">複数フィールドの制御コンポーネント</h2>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">名前</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="山田太郎"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">メールアドレス</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">メッセージ</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="メッセージを入力してください"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-300 rounded-md p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">入力されたデータ</h3>
        <pre className="bg-white p-3 rounded border border-gray-200 overflow-x-auto text-sm">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
