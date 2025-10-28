"use client";

import { useState, useEffect } from "react";
import { Trash2, Plus, LogOut, CheckCircle2, Circle, AlertCircle, Loader } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// Supabaseクライアントの初期化
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// ハードコードされたテストユーザーID（実装時は認証から取得）
// const TEST_USER_ID = "4a0a2cbf-f817-4196-8486-96ffcc8f0d95";
const TEST_USER_ID = "d447fb99-6297-414b-a214-5c731ca4e236";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // ページ読み込み時にデータを取得
  useEffect(() => {
    fetchUserAndTodos();
  }, []);

  // ユーザー情報とTODOを取得
  const fetchUserAndTodos = async () => {
    try {
      setLoading(true);
      setError(null);

      // プロフィール情報を取得
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", TEST_USER_ID)
        .single();

      if (profileError) throw profileError;
      setCurrentUser(profile);

      // TODOデータを取得
      const { data: todosData, error: todosError } = await supabase
        .from("todos")
        .select("*")
        .eq("user_id", TEST_USER_ID)
        .order("created_at", { ascending: false });

      if (todosError) throw todosError;
      setTodos(todosData || []);
    } catch (err) {
      setError("データの読み込みに失敗しました: " + err.message);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 新しいTODOを追加
  const handleAddTodo = async () => {
    if (newTitle.trim() === "") {
      setError("タイトルを入力してください");
      return;
    }

    try {
      setError(null);
      const { data, error: insertError } = await supabase
        .from("todos")
        .insert([
          {
            user_id: TEST_USER_ID,
            title: newTitle.trim(),
            description: newDescription.trim(),
            completed: false,
          },
        ])
        .select();

      if (insertError) throw insertError;

      // 新しいTODOをリストに追加
      setTodos([data[0], ...todos]);
      setNewTitle("");
      setNewDescription("");
    } catch (err) {
      setError("TODOの追加に失敗しました: " + err.message);
      console.error("Error:", err);
    }
  };

  // TODOの完了状態を切り替え
  const toggleComplete = async (id, currentCompleted) => {
    try {
      setError(null);
      const { data, error: updateError } = await supabase
        .from("todos")
        .update({ completed: !currentCompleted, updated_at: new Date() })
        .eq("id", id)
        .select();

      if (updateError) throw updateError;

      // 画面上のデータを更新
      setTodos(todos.map(todo => (todo.id === id ? data[0] : todo)));
    } catch (err) {
      setError("完了状態の更新に失敗しました: " + err.message);
      console.error("Error:", err);
    }
  };

  // TODOを削除
  const deleteTodo = async id => {
    try {
      setError(null);
      const { error: deleteError } = await supabase.from("todos").delete().eq("id", id);

      if (deleteError) throw deleteError;

      // 画面上から削除
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError("TODOの削除に失敗しました: " + err.message);
      console.error("Error:", err);
    }
  };

  const completedCount = todos.filter(t => t.completed).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <Loader className="animate-spin mx-auto mb-4" size={40} />
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        {/* エラーメッセージ */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex gap-3">
            <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* ヘッダー */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">My TODOs</h1>
              {currentUser && (
                <p className="text-gray-600 mt-1">ユーザー: {currentUser.username}</p>
              )}
            </div>
            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
              <LogOut size={20} />
              ログアウト
            </button>
          </div>

          {/* 進捗表示 */}
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              完了済み:{" "}
              <span className="font-bold text-blue-600">
                {completedCount}/{todos.length}
              </span>
            </p>
            <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${todos.length === 0 ? 0 : (completedCount / todos.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* 新しいTODO入力フォーム */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">新しいTODOを追加</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                タイトル <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                placeholder="例：買い物に行く"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={e => e.key === "Enter" && handleAddTodo()}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                詳細説明（オプション）
              </label>
              <textarea
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
                placeholder="例：牛乳とパンを買う"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows="2"
              ></textarea>
            </div>
            <button
              onClick={handleAddTodo}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              TODOを追加
            </button>
          </div>
        </div>

        {/* TODOリスト */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">TODOリスト</h2>

          {todos.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              TODOがありません。新しいタスクを追加しましょう！
            </p>
          ) : (
            <div className="space-y-3">
              {todos.map(todo => (
                <div
                  key={todo.id}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  {/* 完了ボタン */}
                  <button
                    onClick={() => toggleComplete(todo.id, todo.completed)}
                    className="mt-1 flex-shrink-0 text-gray-400 hover:text-blue-500 transition"
                  >
                    {todo.completed ? (
                      <CheckCircle2 size={24} className="text-green-500" />
                    ) : (
                      <Circle size={24} />
                    )}
                  </button>

                  {/* TODOコンテンツ */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-lg font-medium ${
                        todo.completed ? "text-gray-500 line-through" : "text-gray-800"
                      }`}
                    >
                      {todo.title}
                    </p>
                    {todo.description && (
                      <p className="text-sm text-gray-600 mt-1">{todo.description}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(todo.created_at).toLocaleString("ja-JP")}
                    </p>
                  </div>

                  {/* 削除ボタン */}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 text-gray-400 hover:text-red-500 transition"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
