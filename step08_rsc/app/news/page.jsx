// ISR（Incremental Static Regeneration）のサンプル
// 一定時間ごとにページを再生成して最新の情報を表示

export default async function NewsPage() {
  // 10秒ごとに再検証（ISR）
  // ビルド時に静的生成され、10秒後のリクエストで再生成される
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    next: { revalidate: 10 }, // 10秒ごとに再検証
  });
  const article = await response.json();

  // ページ生成時刻を記録
  const generatedTime = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  // 次回の再生成予定時刻（10秒後）
  const nextRevalidation = new Date(Date.now() + 10000).toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">ニュース記事（ISR使用）</h1>

      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">📌 このページの特徴</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>ISR（Incremental Static Regeneration）を使用</li>
          <li>初回は静的に生成され、高速に表示される</li>
          <li>10秒ごとにバックグラウンドで再生成される</li>
          <li>静的レンダリングの速度と動的コンテンツの鮮度を両立</li>
        </ul>
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">⏰ 時刻情報</h3>
        <div className="space-y-2">
          <p>
            <strong>ページ生成時刻:</strong>
            <span className="text-indigo-600 font-mono">{generatedTime}</span>
          </p>
          <p>
            <strong>次回再生成予定:</strong>
            <span className="text-indigo-600 font-mono">{nextRevalidation}</span>
          </p>
          <p className="text-sm text-gray-600 mt-3">
            ※ この時刻は10秒間キャッシュされ、10秒経過後の最初のリクエストで更新されます
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">🔄 ISRの仕組み</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
              1
            </span>
            <div>
              <p className="font-semibold">初回リクエスト</p>
              <p className="text-sm text-gray-600">
                ビルド時に生成された静的ページが表示される（超高速）
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
              2
            </span>
            <div>
              <p className="font-semibold">10秒以内のリクエスト</p>
              <p className="text-sm text-gray-600">キャッシュされたページがそのまま表示される</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
              3
            </span>
            <div>
              <p className="font-semibold">10秒経過後の最初のリクエスト</p>
              <p className="text-sm text-gray-600">
                古いページを表示しつつ、バックグラウンドで再生成を開始
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
              4
            </span>
            <div>
              <p className="font-semibold">再生成完了後</p>
              <p className="text-sm text-gray-600">次のリクエストから新しいページが表示される</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-700">{article.title}</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">{article.body}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="bg-gray-200 px-3 py-1 rounded-full">記事ID: {article.id}</span>
          <span className="ml-3">投稿者ID: {article.userId}</span>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">🧪 実験してみよう</h3>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            <strong>最初のアクセス</strong>
            <p className="text-sm text-gray-600 ml-6">「ページ生成時刻」を確認してください</p>
          </li>
          <li>
            <strong>10秒以内にリロード</strong>
            <p className="text-sm text-gray-600 ml-6">
              時刻が変わらないことを確認（キャッシュが使われている）
            </p>
          </li>
          <li>
            <strong>10秒以上待ってリロード</strong>
            <p className="text-sm text-gray-600 ml-6">最初は古い時刻が表示される</p>
          </li>
          <li>
            <strong>もう一度リロード</strong>
            <p className="text-sm text-gray-600 ml-6">
              時刻が更新されている（再生成が完了している）
            </p>
          </li>
        </ol>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">💡 ISRの利点</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-600 mb-2">✅ メリット</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>静的ページの高速性を維持</li>
              <li>定期的に最新データに更新</li>
              <li>サーバー負荷が低い</li>
              <li>CDNにキャッシュ可能</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-2">⚠️ 注意点</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>即座に更新されるわけではない</li>
              <li>一時的に古いデータが表示される</li>
              <li>リアルタイム性が必要な場合は不向き</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">📝 実用例</h3>
        <p className="mb-3">ISRは以下のようなケースで特に有効です：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="bg-white p-3 rounded">
            <p className="font-semibold">🗞️ ニュースサイト</p>
            <p className="text-gray-600">記事は頻繁に更新されるが、リアルタイムである必要はない</p>
          </div>
          <div className="bg-white p-3 rounded">
            <p className="font-semibold">🛒 ECサイトの商品ページ</p>
            <p className="text-gray-600">在庫や価格は定期的に更新されれば十分</p>
          </div>
          <div className="bg-white p-3 rounded">
            <p className="font-semibold">📊 ダッシュボード</p>
            <p className="text-gray-600">統計データは数分〜数時間ごとの更新で問題ない</p>
          </div>
          <div className="bg-white p-3 rounded">
            <p className="font-semibold">📝 ブログ記事</p>
            <p className="text-gray-600">コメント数やいいね数を定期的に更新</p>
          </div>
        </div>

        <div className="mt-4 p-4 bg-indigo-100 rounded">
          <p className="font-semibold mb-2">⚙️ 設定方法：</p>
          <pre className="bg-white p-3 rounded text-sm overflow-x-auto">
            {`fetch('https://api.example.com/data', {
    next: { revalidate: 10 } // 10秒ごとに再検証
  })`}
          </pre>
          <p className="text-xs text-gray-600 mt-2">
            ※ revalidateの値（秒数）を調整することで、更新頻度を変更できます
          </p>
        </div>
      </div>
    </div>
  );
}
