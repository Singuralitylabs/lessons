// searchParamsを使用した動的レンダリング
// URLクエリパラメータに応じてコンテンツを動的に変更

// サンプル商品データ
const allProducts = [
  {
    id: 1,
    title: "ノートパソコン",
    price: 89800,
    category: "electronics",
    description: "高性能な薄型ノートPC",
  },
  {
    id: 2,
    title: "ワイヤレスマウス",
    price: 2980,
    category: "electronics",
    description: "Bluetooth接続対応",
  },
  {
    id: 3,
    title: "プログラミング入門書",
    price: 3200,
    category: "books",
    description: "JavaScript基礎から学べる",
  },
  {
    id: 4,
    title: "Web開発完全ガイド",
    price: 4500,
    category: "books",
    description: "フロントエンド開発の決定版",
  },
  {
    id: 5,
    title: "スマートフォン",
    price: 68000,
    category: "electronics",
    description: "最新の5G対応モデル",
  },
  {
    id: 6,
    title: "React実践入門",
    price: 3800,
    category: "books",
    description: "Reactの基礎から実践まで",
  },
];

export default async function ProductsPage({ searchParams }) {
  // searchParamsから各パラメータを取得
  const params = await searchParams;
  const category = params.category || "all";
  const sort = params.sort || "id";
  const search = params.search || "";

  // 現在時刻を取得（リクエストごとに異なる）
  const currentTime = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  // フィルタリング処理
  let filteredProducts = [...allProducts];

  // カテゴリでフィルター
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  // 検索キーワードでフィルター
  if (search) {
    filteredProducts = filteredProducts.filter(
      p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  // ソート処理
  if (sort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">商品一覧（searchParams使用）</h1>

      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">📌 このページの特徴</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>searchParamsを使用して動的レンダリング</li>
          <li>URLパラメータに応じてコンテンツが変化</li>
          <li>検索、フィルター、ソート機能を実装</li>
          <li>リクエストごとにレンダリングされる</li>
        </ul>
      </div>

      <div className="bg-orange-50 p-6 rounded-lg mb-6">
        <p className="text-lg">
          <strong>レンダリング時刻:</strong> {currentTime}
        </p>
        <p className="text-sm text-gray-600 mt-2">※ URLパラメータを変更するたびに更新されます</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">🔍 現在の検索条件</h3>
        <div className="space-y-2">
          <p>
            <strong>カテゴリ:</strong>{" "}
            <span className="text-blue-600">
              {category === "all" ? "すべて" : category === "electronics" ? "電子機器" : "書籍"}
            </span>
          </p>
          <p>
            <strong>並び順:</strong>{" "}
            <span className="text-blue-600">
              {sort === "id"
                ? "ID順"
                : sort === "price-asc"
                ? "価格が安い順"
                : sort === "price-desc"
                ? "価格が高い順"
                : "名前順"}
            </span>
          </p>
          {search && (
            <p>
              <strong>検索キーワード:</strong> <span className="text-blue-600">"{search}"</span>
            </p>
          )}
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">🎯 試してみよう</h3>
        <p className="mb-3">以下のURLをクリックして動作を確認してください：</p>
        <div className="space-y-2 text-sm">
          <div>
            <a href="/products?category=electronics" className="text-blue-600 hover:underline">
              /products?category=electronics
            </a>
            <span className="text-gray-600 ml-2">（電子機器のみ表示）</span>
          </div>
          <div>
            <a href="/products?category=books" className="text-blue-600 hover:underline">
              /products?category=books
            </a>
            <span className="text-gray-600 ml-2">（書籍のみ表示）</span>
          </div>
          <div>
            <a href="/products?sort=price-asc" className="text-blue-600 hover:underline">
              /products?sort=price-asc
            </a>
            <span className="text-gray-600 ml-2">（価格が安い順）</span>
          </div>
          <div>
            <a href="/products?sort=price-desc" className="text-blue-600 hover:underline">
              /products?sort=price-desc
            </a>
            <span className="text-gray-600 ml-2">（価格が高い順）</span>
          </div>
          <div>
            <a href="/products?search=react" className="text-blue-600 hover:underline">
              /products?search=react
            </a>
            <span className="text-gray-600 ml-2">（"react"を検索）</span>
          </div>
          <div>
            <a
              href="/products?category=electronics&sort=price-asc"
              className="text-blue-600 hover:underline"
            >
              /products?category=electronics&sort=price-asc
            </a>
            <span className="text-gray-600 ml-2">（複数条件の組み合わせ）</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">商品一覧（{filteredProducts.length}件）</h2>

        {filteredProducts.length === 0 ? (
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <p className="text-gray-600">該当する商品が見つかりませんでした。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-orange-600">
                    ¥{product.price.toLocaleString()}
                  </span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {product.category === "electronics" ? "電子機器" : "書籍"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-purple-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">⚙️ 動的レンダリングの理由</h3>
        <p className="mb-2">このページが動的レンダリングになる理由:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <code className="bg-white px-2 py-1 rounded">searchParams</code> propを使用している
          </li>
          <li>URLパラメータによって表示内容が変わる</li>
          <li>ユーザーごとに異なるクエリパラメータが渡される可能性がある</li>
        </ul>

        <div className="mt-4 p-4 bg-white rounded">
          <p className="font-semibold mb-2">📝 実用例：</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>ECサイトの商品検索・フィルター機能</li>
            <li>ブログの記事検索・カテゴリ分類</li>
            <li>データテーブルのソート・ページネーション</li>
            <li>検索結果ページ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
