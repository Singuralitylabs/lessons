// 5. サーバーアクションを使用するクライアントコンポーネント
"use client";

import { useState } from "react";
import { submitContactForm } from "./server_actions/actions";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // エラーをクリア
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrors({});

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setSuccessMessage("送信されました！ありがとうございます。");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrors(result.errors || {});
      }
    } catch (error) {
      setErrors({ submit: "サーバーエラーが発生しました" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">お問い合わせ</h1>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
            <p className="font-semibold">{successMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 名前フィールド */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              名前 *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="山田太郎"
              disabled={isLoading}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              } disabled:bg-gray-100 disabled:cursor-not-allowed`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600 font-medium">{errors.name}</p>}
          </div>

          {/* メールアドレスフィールド */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              メールアドレス *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              disabled={isLoading}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              } disabled:bg-gray-100 disabled:cursor-not-allowed`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 font-medium">{errors.email}</p>
            )}
          </div>

          {/* メッセージフィールド */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              メッセージ *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="お問い合わせ内容を入力してください"
              rows="5"
              disabled={isLoading}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition resize-none ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              } disabled:bg-gray-100 disabled:cursor-not-allowed`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 font-medium">{errors.message}</p>
            )}
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-3 rounded-md font-semibold text-white transition ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
            }`}
          >
            {isLoading ? "送信中..." : "送信"}
          </button>

          {errors.submit && (
            <p className="text-sm text-red-600 font-medium text-center">{errors.submit}</p>
          )}
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">* は必須項目です</p>
      </div>
    </div>
  );
}
