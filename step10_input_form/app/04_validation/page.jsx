// 4. クライアント側のバリデーション
"use client";

import { useState } from "react";

export default function ClientValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // 入力開始時にエラーをクリア
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // バリデーション関数
  const validateEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};

    // 名前のバリデーション
    if (!formData.name.trim()) {
      newErrors.name = "名前は必須です";
    } else if (formData.name.length < 2) {
      newErrors.name = "名前は2文字以上で入力してください";
    }

    // メールアドレスのバリデーション
    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスは必須です";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    // 年齢のバリデーション
    if (!formData.age) {
      newErrors.age = "年齢は必須です";
    } else if (parseInt(formData.age) < 0 || parseInt(formData.age) > 120) {
      newErrors.age = "0～120の数値を入力してください";
    }

    setErrors(newErrors);

    // エラーがなければ送信
    if (Object.keys(newErrors).length === 0) {
      alert("バリデーション成功！\n" + JSON.stringify(formData, null, 2));
      setFormData({ name: "", email: "", age: "" });
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-8">クライアント側のバリデーション</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 名前フィールド */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">名前 *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="山田太郎"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600 font-medium">{errors.name}</p>}
        </div>

        {/* メールアドレスフィールド */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">メールアドレス *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600 font-medium">{errors.email}</p>}
        </div>

        {/* 年齢フィールド */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">年齢 *</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="20"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.age
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.age && <p className="mt-1 text-sm text-red-600 font-medium">{errors.age}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          送信
        </button>
      </form>
    </div>
  );
}
