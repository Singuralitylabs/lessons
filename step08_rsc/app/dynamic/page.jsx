// 動的レンダリング
// headers()を使用することで、リクエストごとにレンダリングされる

import { headers } from "next/headers";

export default async function DynamicPage() {
  // headers()を使用 → 自動的に動的レンダリングになる
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /mobile/i.test(userAgent);

  // リクエスト時にデータを取得
  // cache: 'no-store' で明示的に動的レンダリングを指定
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
    cache: "no-store",
  });
  const post = await response.json();

  // 現在時刻を取得（リクエストごとに異なる）
  const currentTime = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">動的レンダリングページ</h1>

      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">📌 このページの特徴</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>リクエストごとにレンダリングされます</li>
          <li>ユーザーごとに異なるコンテンツを表示できます</li>
          <li>常に最新のデータを表示します</li>
          <li>ページをリロードすると「レンダリング時刻」が更新されます</li>
        </ul>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <p className="text-lg">
          <strong>レンダリング時刻:</strong> {currentTime}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          ※ ページをリロードするたびにこの時刻が更新されます
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">🖥️ デバイス情報</h3>
        <p className="mb-2">
          <strong>デバイスタイプ:</strong>{" "}
          <span className={isMobile ? "text-blue-600" : "text-purple-600"}>
            {isMobile ? "モバイル" : "デスクトップ"}
          </span>
        </p>
        <p className="text-sm text-gray-600">User-Agent: {userAgent.substring(0, 80)}...</p>
      </div>

      <div className="border border-gray-300 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.body}</p>
        <p className="text-sm text-gray-500">
          ID: {post.id} | User ID: {post.userId}
        </p>
      </div>

      <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">🔍 確認方法</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>ページをリロードしてください</li>
          <li>「レンダリング時刻」が毎回更新されることを確認してください</li>
          <li>これは動的レンダリングの証拠です</li>
          <li>デバイス情報がリアルタイムで取得されていることも確認できます</li>
        </ol>
      </div>

      <div className="mt-6 p-6 bg-purple-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">⚙️ 動的レンダリングの理由</h3>
        <p className="mb-2">このページが動的レンダリングになる理由:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            <code className="bg-white px-2 py-1 rounded">headers()</code> を使用している
          </li>
          <li>
            <code className="bg-white px-2 py-1 rounded">fetch()</code> で{" "}
            <code className="bg-white px-2 py-1 rounded">cache: 'no-store'</code> を指定している
          </li>
        </ul>
      </div>
    </div>
  );
}
