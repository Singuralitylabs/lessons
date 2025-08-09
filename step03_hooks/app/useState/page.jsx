"use client";

import Link from "next/link";
import { useState } from "react";

export default function UseStatePage() {
  // [現在の値, 値を更新する関数] = useState(初期値)
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center p-4">useStateの解説</h1>

      <div>
        <p>現在のカウント: {count}</p>
        <button className="bg-gray-300 rounded py-1 px-2 my-4" onClick={() => setCount(count + 1)}>
          カウントアップ
        </button>
      </div>

      <div>
        {isVisible && <p>この文章が表示されています</p>}
        <button
          className="bg-gray-300 rounded py-1 px-2 my-4"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "隠す" : "表示する"}
        </button>
      </div>

      <div className="flex justify-center">
        <Link href="/" className="bg-gray-300 text-gray-800 p-2 rounded">
          ホームへ戻る
        </Link>
      </div>
    </div>
  );
}
