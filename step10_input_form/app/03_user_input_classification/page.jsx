// 3. ユーザー入力の種類の例
"use client";

import { useState } from "react";

export default function InputTypes() {
  const [inputs, setInputs] = useState({
    textInput: "",
    numberInput: "",
    selectInput: "",
    radioInput: "",
    checkboxInputs: [],
    dateInput: "",
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setInputs(prev => ({
        ...prev,
        [name]: checked ? [...prev[name], value] : prev[name].filter(item => item !== value),
      }));
    } else {
      setInputs(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">ユーザー入力の種類</h2>

      <div className="space-y-8">
        {/* テキスト入力 */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <h3 className="text-xl font-bold text-gray-800 mb-4">1. テキスト入力</h3>
          <label className="block text-sm font-semibold text-gray-700 mb-2">名前</label>
          <input
            type="text"
            name="textInput"
            value={inputs.textInput}
            onChange={handleChange}
            placeholder="テキストを入力"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />
          <p className="text-sm text-gray-600">
            入力値：
            <span className="font-semibold text-gray-800">{inputs.textInput || "（未入力）"}</span>
          </p>
        </div>

        {/* 数値入力 */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <h3 className="text-xl font-bold text-gray-800 mb-4">2. 数値入力</h3>
          <label className="block text-sm font-semibold text-gray-700 mb-2">年齢</label>
          <input
            type="number"
            name="numberInput"
            value={inputs.numberInput}
            onChange={handleChange}
            placeholder="数値を入力"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />
          <p className="text-sm text-gray-600">
            入力値：
            <span className="font-semibold text-gray-800">
              {inputs.numberInput || "（未入力）"}
            </span>
          </p>
        </div>

        {/* 選択入力 */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <h3 className="text-xl font-bold text-gray-800 mb-4">3. 選択入力（セレクト）</h3>
          <label className="block text-sm font-semibold text-gray-700 mb-2">カテゴリを選択</label>
          <select
            name="selectInput"
            value={inputs.selectInput}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          >
            <option value="">-- 選択してください --</option>
            <option value="category1">カテゴリ1</option>
            <option value="category2">カテゴリ2</option>
            <option value="category3">カテゴリ3</option>
          </select>
          <p className="text-sm text-gray-600">
            選択値：
            <span className="font-semibold text-gray-800">
              {inputs.selectInput || "（未選択）"}
            </span>
          </p>
        </div>

        {/* ラジオボタン */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <h3 className="text-xl font-bold text-gray-800 mb-4">4. ラジオボタン（単一選択）</h3>
          <div className="space-y-2 mb-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="radioInput"
                value="option1"
                checked={inputs.radioInput === "option1"}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">オプション1</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="radioInput"
                value="option2"
                checked={inputs.radioInput === "option2"}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">オプション2</span>
            </label>
          </div>
          <p className="text-sm text-gray-600">
            選択値：
            <span className="font-semibold text-gray-800">{inputs.radioInput || "（未選択）"}</span>
          </p>
        </div>

        {/* チェックボックス */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <h3 className="text-xl font-bold text-gray-800 mb-4">5. チェックボックス（複数選択）</h3>
          <div className="space-y-2 mb-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="checkboxInputs"
                value="apple"
                checked={inputs.checkboxInputs.includes("apple")}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">りんご</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="checkboxInputs"
                value="banana"
                checked={inputs.checkboxInputs.includes("banana")}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">バナナ</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="checkboxInputs"
                value="orange"
                checked={inputs.checkboxInputs.includes("orange")}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600"
              />
              <span className="ml-2 text-gray-700">オレンジ</span>
            </label>
          </div>
          <p className="text-sm text-gray-600">
            選択値：
            <span className="font-semibold text-gray-800">
              {inputs.checkboxInputs.join(", ") || "（未選択）"}
            </span>
          </p>
        </div>

        {/* 日付入力 */}
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <h3 className="text-xl font-bold text-gray-800 mb-4">6. 日付入力</h3>
          <label className="block text-sm font-semibold text-gray-700 mb-2">誕生日</label>
          <input
            type="date"
            name="dateInput"
            value={inputs.dateInput}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
          />
          <p className="text-sm text-gray-600">
            選択日：
            <span className="font-semibold text-gray-800">{inputs.dateInput || "（未選択）"}</span>
          </p>
        </div>

        {/* 全データ表示 */}
        <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-gray-800 mb-3">全入力データ</h3>
          <pre className="bg-white p-3 rounded border border-gray-200 overflow-x-auto text-sm">
            {JSON.stringify(inputs, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
