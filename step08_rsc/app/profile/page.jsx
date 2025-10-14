// cookies()を使用した動的レンダリング
// ユーザーごとにパーソナライズされたコンテンツを表示

import { cookies } from "next/headers";

export default async function ProfilePage() {
  // cookies()を使用 → 自動的に動的レンダリングになる
  const cookieStore = cookies();

  // Cookieから各種情報を取得
  const username = cookieStore.get("username")?.value || "ゲスト";
  const theme = cookieStore.get("theme")?.value || "light";
  const language = cookieStore.get("language")?.value || "ja";

  // 現在時刻を取得（リクエストごとに異なる）
  const currentTime = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  // テーマに応じた背景色
  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-8`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">
          プロフィールページ（Cookie使用）
        </h1>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-3">📌 このページの特徴</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>cookies()を使用して動的レンダリング</li>
            <li>ユーザーごとにパーソナライズされたコンテンツ</li>
            <li>Cookieに保存された設定を反映</li>
            <li>リクエストごとにレンダリングされる</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">👤 ユーザー情報</h2>
          <div className="space-y-2">
            <p>
              <strong>ユーザー名:</strong>{" "}
              <span className="text-purple-600 dark:text-purple-300">{username}</span>
            </p>
            <p>
              <strong>テーマ設定:</strong>{" "}
              <span className="text-purple-600 dark:text-purple-300">
                {theme === "dark" ? "ダークモード" : "ライトモード"}
              </span>
            </p>
            <p>
              <strong>言語設定:</strong>{" "}
              <span className="text-purple-600 dark:text-purple-300">
                {language === "ja" ? "日本語" : language}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6">
          <p className="text-lg">
            <strong>レンダリング時刻:</strong> {currentTime}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            ※ ページをリロードするたびにこの時刻が更新されます
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">💡 パーソナライズされたメッセージ</h3>
          <p className="text-lg">
            {username === "ゲスト"
              ? "ようこそ！ログインすると、よりパーソナライズされた体験をお楽しみいただけます。"
              : `${username}さん、おかえりなさい！あなたの設定でページをカスタマイズしています。`}
          </p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3">🔍 確認方法</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>ブラウザの開発者ツールを開く（F12キー）</li>
            <li>「Application」タブ → 「Cookies」を選択</li>
            <li>
              以下のCookieを設定してページをリロード：
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                <li>
                  名前:{" "}
                  <code className="bg-white dark:bg-gray-700 px-2 py-1 rounded">username</code>, 値:{" "}
                  <code className="bg-white dark:bg-gray-700 px-2 py-1 rounded">太郎</code>
                </li>
                <li>
                  名前: <code className="bg-white dark:bg-gray-700 px-2 py-1 rounded">theme</code>,
                  値: <code className="bg-white dark:bg-gray-700 px-2 py-1 rounded">dark</code>
                </li>
                <li>
                  名前:{" "}
                  <code className="bg-white dark:bg-gray-700 px-2 py-1 rounded">language</code>, 値:{" "}
                  <code className="bg-white dark:bg-gray-700 px-2 py-1 rounded">ja</code>
                </li>
              </ul>
            </li>
            <li>ユーザー情報が変更されることを確認</li>
          </ol>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">⚙️ 動的レンダリングの理由</h3>
          <p className="mb-2">このページが動的レンダリングになる理由:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <code className="bg-white dark:bg-gray-700 px-2 py-1 rounded">cookies()</code>{" "}
              を使用している
            </li>
            <li>ユーザーごとに異なるCookie値を読み取る必要がある</li>
            <li>パーソナライズされたコンテンツを提供するため</li>
          </ul>
        </div>

        <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">📝 実用例</h3>
          <p className="mb-2">Cookieはこのような用途で使われます：</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>ログイン状態の管理（認証トークン）</li>
            <li>ユーザー設定の保存（テーマ、言語など）</li>
            <li>ショッピングカートの内容</li>
            <li>セッション管理</li>
            <li>トラッキング・分析</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
