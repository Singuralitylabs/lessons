"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // useEffectがないと、画面が更新されるたびに実行
  console.log("useEffect外のログです。");

  // useEffectをつけると、画面表示の初回のみ実行
  useEffect(() => {
    console.log("useEffect内のログです。");
  }, []);

  // useEffectに依存配列を指定すると、配列の要素が変化する時のみ実行
  useEffect(() => {
    console.log("カウントアップしました。");
  }, [count]);

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center p-4">useEffectの解説</h1>

      <div>
        <p>現在のカウント: {count}</p>
        <button className="bg-gray-300 rounded p-1 m-4" onClick={() => setCount(count + 1)}>
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
