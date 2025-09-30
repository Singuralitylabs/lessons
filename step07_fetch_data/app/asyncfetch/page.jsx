"use client";

import { useState } from "react";

export default function SyncVsAsyncDemo() {
  const [syncData, setSyncData] = useState(null);
  const [asyncData, setAsyncData] = useState(null);
  const [syncTime, setSyncTime] = useState(0);
  const [asyncTime, setAsyncTime] = useState(0);
  const [syncLoading, setSyncLoading] = useState(false);
  const [asyncLoading, setAsyncLoading] = useState(false);
  const [syncProgress, setSyncProgress] = useState([]);
  const [asyncProgress, setAsyncProgress] = useState([]);

  // キャッシュを回避するためのユニークなタイムスタンプを追加
  const getCacheBypassUrl = url => {
    const timestamp = Date.now();
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}_t=${timestamp}`;
  };

  // 同期的なデータ取得（順次実行）
  const fetchSequentially = async () => {
    setSyncLoading(true);
    setSyncData(null);
    setSyncProgress([]);
    const startTime = Date.now();

    try {
      // ユーザー情報を取得
      setSyncProgress(["ユーザー情報を取得中..."]);
      const userResponse = await fetch(
        getCacheBypassUrl("https://jsonplaceholder.typicode.com/users/1"),
        { cache: "no-store" }
      );
      const user = await userResponse.json();

      // 投稿を取得
      setSyncProgress(prev => [...prev, "ユーザー情報取得完了", "投稿を取得中..."]);
      const postsResponse = await fetch(
        getCacheBypassUrl("https://jsonplaceholder.typicode.com/posts?userId=1&_limit=3"),
        { cache: "no-store" }
      );
      const posts = await postsResponse.json();

      // コメントを取得
      setSyncProgress(prev => [...prev, "投稿取得完了", "コメントを取得中..."]);
      const commentsResponse = await fetch(
        getCacheBypassUrl("https://jsonplaceholder.typicode.com/comments?postId=1&_limit=3"),
        { cache: "no-store" }
      );
      const comments = await commentsResponse.json();

      setSyncProgress(prev => [...prev, "コメント取得完了"]);

      const endTime = Date.now();
      setSyncTime(endTime - startTime);
      setSyncData({ user, posts, comments });
    } catch (error) {
      console.error("同期処理エラー:", error);
    } finally {
      setSyncLoading(false);
    }
  };

  // 非同期的なデータ取得（並行実行）
  const fetchConcurrently = async () => {
    setAsyncLoading(true);
    setAsyncData(null);
    setAsyncProgress([]);
    const startTime = Date.now();

    try {
      setAsyncProgress(["ユーザー情報、投稿、コメントを同時取得中..."]);

      // Promise.allで3つのAPIを同時に呼び出し（キャッシュ回避）
      const [userResponse, postsResponse, commentsResponse] = await Promise.all([
        fetch(getCacheBypassUrl("https://jsonplaceholder.typicode.com/users/1"), {
          cache: "no-store",
        }),
        fetch(getCacheBypassUrl("https://jsonplaceholder.typicode.com/posts?userId=1&_limit=3"), {
          cache: "no-store",
        }),
        fetch(
          getCacheBypassUrl("https://jsonplaceholder.typicode.com/comments?postId=1&_limit=3"),
          { cache: "no-store" }
        ),
      ]);

      const [user, posts, comments] = await Promise.all([
        userResponse.json(),
        postsResponse.json(),
        commentsResponse.json(),
      ]);

      setAsyncProgress(prev => [...prev, "すべてのデータ取得完了"]);

      const endTime = Date.now();
      setAsyncTime(endTime - startTime);
      setAsyncData({ user, posts, comments });
    } catch (error) {
      console.error("非同期処理エラー:", error);
    } finally {
      setAsyncLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">同期処理 vs 非同期処理</h1>
        <p className="text-center text-gray-600 mb-2">データ取得方法の違いを体験してみましょう</p>
        <p className="text-center text-sm text-blue-600 mb-8">
          💡 キャッシュを無効化しているため、何度でも正確な速度比較ができます
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 同期処理（順次実行） */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-red-600">順次実行（同期的）</h2>
              {syncTime > 0 && (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
                  {syncTime}ms
                </span>
              )}
            </div>

            <div className="mb-4 p-4 bg-gray-50 rounded">
              <code className="text-sm text-gray-700">
                const user = await fetchUser();
                <br />
                const posts = await fetchPosts();
                <br />
                const comments = await fetchComments();
              </code>
            </div>

            <p className="text-sm text-gray-600 mb-4">⏳ 各APIを順番に待って実行します</p>

            <button
              onClick={fetchSequentially}
              disabled={syncLoading}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 disabled:bg-gray-300 font-semibold mb-4"
            >
              {syncLoading ? "取得中..." : "順次実行で取得"}
            </button>

            {/* 進捗表示 */}
            {syncProgress.length > 0 && (
              <div className="mb-4 p-3 bg-yellow-50 rounded border border-yellow-200">
                <h3 className="font-semibold text-sm mb-2">処理の流れ：</h3>
                <ul className="text-sm space-y-1">
                  {syncProgress.map((step, index) => (
                    <li key={index} className="text-gray-700">
                      {index + 1}. {step}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* データ表示 */}
            {syncData && (
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded">
                  <h3 className="font-semibold mb-1">👤 ユーザー</h3>
                  <p>{syncData.user.name}</p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <h3 className="font-semibold mb-1">📝 投稿 ({syncData.posts.length}件)</h3>
                  <p className="text-gray-600">{syncData.posts[0]?.title}</p>
                </div>
                <div className="p-3 bg-purple-50 rounded">
                  <h3 className="font-semibold mb-1">💬 コメント ({syncData.comments.length}件)</h3>
                  <p className="text-gray-600">{syncData.comments[0]?.name}</p>
                </div>
              </div>
            )}
          </div>

          {/* 非同期処理（並行実行） */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-green-600">並行実行（非同期的）</h2>
              {asyncTime > 0 && (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                  {asyncTime}ms
                </span>
              )}
            </div>

            <div className="mb-4 p-4 bg-gray-50 rounded">
              <code className="text-sm text-gray-700">
                const [user, posts, comments] = <br />
                &nbsp;&nbsp;await Promise.all([
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;fetchUser(),
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;fetchPosts(),
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;fetchComments()
                <br />
                &nbsp;&nbsp;]);
              </code>
            </div>

            <p className="text-sm text-gray-600 mb-4">⚡ すべてのAPIを同時に実行します</p>

            <button
              onClick={fetchConcurrently}
              disabled={asyncLoading}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 disabled:bg-gray-300 font-semibold mb-4"
            >
              {asyncLoading ? "取得中..." : "並行実行で取得"}
            </button>

            {/* 進捗表示 */}
            {asyncProgress.length > 0 && (
              <div className="mb-4 p-3 bg-green-50 rounded border border-green-200">
                <h3 className="font-semibold text-sm mb-2">処理の流れ：</h3>
                <ul className="text-sm space-y-1">
                  {asyncProgress.map((step, index) => (
                    <li key={index} className="text-gray-700">
                      {index + 1}. {step}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* データ表示 */}
            {asyncData && (
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded">
                  <h3 className="font-semibold mb-1">👤 ユーザー</h3>
                  <p>{asyncData.user.name}</p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <h3 className="font-semibold mb-1">📝 投稿 ({asyncData.posts.length}件)</h3>
                  <p className="text-gray-600">{asyncData.posts[0]?.title}</p>
                </div>
                <div className="p-3 bg-purple-50 rounded">
                  <h3 className="font-semibold mb-1">
                    💬 コメント ({asyncData.comments.length}件)
                  </h3>
                  <p className="text-gray-600">{asyncData.comments[0]?.name}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 比較結果 */}
        {syncTime > 0 && asyncTime > 0 && (
          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-center mb-4">📊 結果比較</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gray-600 text-sm mb-1">順次実行</p>
                <p className="text-3xl font-bold text-red-600">{syncTime}ms</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">並行実行</p>
                <p className="text-3xl font-bold text-green-600">{asyncTime}ms</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">速度向上</p>
                <p className="text-3xl font-bold text-blue-600">
                  {Math.round((syncTime / asyncTime) * 10) / 10}倍
                </p>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-4">
              💡 並行実行により、複数のAPIを同時に呼び出すことで大幅な高速化が実現できます！
            </p>
          </div>
        )}

        {/* 説明 */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">🔍 解説</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <h4 className="font-semibold text-red-600 mb-2">順次実行（同期的）</h4>
              <p className="text-sm">
                各APIリクエストを順番に待ってから次を実行します。前の処理が完了するまで次の処理は開始されません。
                そのため、すべての処理時間が合計されます。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 mb-2">並行実行（非同期的）</h4>
              <p className="text-sm">
                Promise.allを使用して、すべてのAPIリクエストを同時に開始します。
                最も遅いリクエストの時間だけで全体が完了するため、大幅に高速化されます。
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
              <p className="text-sm">
                <strong>💡 ポイント：</strong> 独立した複数のデータを取得する場合は、
                Promise.allで並行実行することで、ユーザー体験を大幅に向上できます。
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded border border-purple-200">
              <p className="text-sm">
                <strong>🔧 技術的な工夫：</strong>{" "}
                このデモでは、各リクエストにユニークなタイムスタンプを付与し、 cache:
                'no-store'オプションを使用することで、ブラウザキャッシュを回避しています。
                そのため、何度実行しても正確な速度比較ができます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
