import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl m-4 flex justify-center">React Server Componentの解説</h1>
      <p className="text-xl flex justify-center">
        RSC（React Server Component）におけるサーバーサイドレンダリングについて解説します。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-blue-100 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">RSCの特徴</h2>
          <ul className="list-disc list-inside">
            <li>サーバーでレンダリングされるコンポーネント</li>
            <li>クライアントに不要なJavaScriptを送らない</li>
            <li>データフェッチングが簡単</li>
          </ul>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">メリット</h2>
          <ul className="list-disc list-inside">
            <li>パフォーマンスの向上</li>
            <li>SEOに有利</li>
            <li>開発体験の改善</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 justify-center">
          <Link href="/static" className="ml-4 bg-gray-700 text-white p-2 rounded m-4 text-center">
            静的レンダリング
          </Link>
          <Link href="/dynamic" className="ml-4 bg-gray-700 text-white p-2 rounded m-4 text-center">
            動的レンダリング(headers)
          </Link>
          <Link href="/profile" className="ml-4 bg-gray-700 text-white p-2 rounded m-4 text-center">
            動的レンダリング(cookies)
          </Link>
          <Link
            href="/products"
            className="ml-4 bg-gray-700 text-white p-2 rounded m-4 text-center"
          >
            動的レンダリング(searchParams)
          </Link>
          <Link href="/news" className="ml-4 bg-gray-700 text-white p-2 rounded m-4 text-center">
            動的レンダリング(ISR)
          </Link>
        </nav>
      </div>
    </main>
  );
}
