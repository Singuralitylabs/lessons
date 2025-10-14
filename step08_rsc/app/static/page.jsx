// デフォルトで静的レンダリング（RSC）
// このコンポーネントはビルド時にレンダリングされ、結果がキャッシュされる

export default async function StaticPage() {
  // ビルド時にデータを取得
  // デフォルトで cache: 'force-cache' が適用される
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await response.json();

  // ビルド時刻を記録
  const buildTime = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">静的レンダリングページ</h1>

      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">📌 このページの特徴</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>ビルド時に一度だけレンダリングされます</li>
          <li>すべてのユーザーに同じコンテンツが表示されます</li>
          <li>ページの読み込みが非常に高速です</li>
          <li>ページをリロードしても「レンダリング時刻」は変わりません</li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <p className="text-lg">
          <strong>レンダリング時刻:</strong> {buildTime}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          ※ この時刻はビルド時に固定され、ページをリロードしても変わりません
        </p>
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
          <li>「レンダリング時刻」が変わらないことを確認してください</li>
          <li>これは静的レンダリングの証拠です</li>
        </ol>
      </div>
    </div>
  );
}
