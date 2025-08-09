"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

export default function UseCallbackPage() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // // 重い計算処理（わざと時間のかかる処理）
  // const expensiveCalculation = () => {
  //   console.log("重い計算を実行中...");
  //   let result = 0;
  //   for (let i = 0; i < 100000000; i++) {
  //     result += Math.random();
  //   }
  //   console.log("計算完了");
  //   return result.toFixed(2);
  // };
  // const expensiveResult = expensiveCalculation();

  // 重い計算処理（わざと時間のかかる処理）
  const expensiveResult = useCallback(() => {
    console.log("重い計算を実行中...");
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
      result += Math.random();
    }
    console.log("計算完了");
    return result.toFixed(2);
  }, [count]); // countが変わった時のみ再計算

  <div>
    {isVisible && <p>この文章が表示されています</p>}
    <button className="bg-gray-300 rounded py-1 px-2 my-4" onClick={() => setIsVisible(!isVisible)}>
      {isVisible ? "隠す" : "表示する"}
    </button>
  </div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center p-4">useCallbackの解説</h1>
      <div>
        <p>現在のカウント: {count}</p>
        <button className="bg-gray-300 rounded p-1 my-4" onClick={() => setCount(count + 1)}>
          カウントアップ
        </button>
        <p>計算結果: {expensiveResult()}</p>
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
