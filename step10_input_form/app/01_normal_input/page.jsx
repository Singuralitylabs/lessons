// 1. 最も基本的な制御コンポーネント（テキスト入力）
"use client";

import { useState } from "react";

export default function BasicTextInput() {
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">基本的な制御コンポーネント</h2>

      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="お名前を入力してください"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
        <p className="text-gray-700">
          <span className="font-semibold">入力値：</span>
          <span className="text-blue-600 ml-2">{name || "（入力されていません）"}</span>
        </p>
      </div>
    </div>
  );
}
