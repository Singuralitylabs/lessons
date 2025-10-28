import { createClient } from "@supabase/supabase-js";

// Supabaseクライアントの初期化
// 環境変数から認証情報を取得
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

// ========================
// READ操作：TODOを取得
// ========================

/**
 * 特定のユーザーの全TODOを取得
 * @param {string} userId - ユーザーID
 * @returns {Promise<Array>} TODOデータの配列
 */
export const fetchTodos = async userId => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false }); // 新しい順に並べ替え
  console.log("Fetched TODOs:", data);

  if (error) {
    console.error("TODOの取得に失敗しました:", error);
    throw error;
  }

  return data;
};

/**
 * 単一のTODOを取得
 * @param {string} todoId - TODO ID
 * @returns {Promise<Object>} TODOデータ
 */
export const fetchTodoById = async todoId => {
  const { data, error } = await supabase.from("todos").select("*").eq("id", todoId).single(); // 1件だけ取得

  if (error) {
    console.error("TODOの取得に失敗しました:", error);
    throw error;
  }

  return data;
};

// ========================
// CREATE操作：TODOを作成
// ========================

/**
 * 新しいTODOを作成
 * @param {string} userId - ユーザーID
 * @param {string} title - TODOのタイトル
 * @param {string} description - TODOの詳細説明（オプション）
 * @returns {Promise<Object>} 作成されたTODOデータ
 */
export const createTodo = async (userId, title, description = "") => {
  const { data, error } = await supabase
    .from("todos")
    .insert([
      {
        user_id: userId,
        title: title,
        description: description,
        completed: false,
      },
    ])
    .select(); // 作成されたデータを返す

  if (error) {
    console.error("TODOの作成に失敗しました:", error);
    throw error;
  }

  return data[0]; // 最初のデータを返す
};

// ========================
// UPDATE操作：TODOを更新
// ========================

/**
 * TODOのタイトルと説明を更新
 * @param {string} todoId - TODO ID
 * @param {string} title - 新しいタイトル
 * @param {string} description - 新しい説明
 * @returns {Promise<Object>} 更新されたTODOデータ
 */
export const updateTodo = async (todoId, title, description) => {
  const { data, error } = await supabase
    .from("todos")
    .update({
      title: title,
      description: description,
      updated_at: new Date(), // 更新日時を現在時刻に更新
    })
    .eq("id", todoId)
    .select();

  if (error) {
    console.error("TODOの更新に失敗しました:", error);
    throw error;
  }

  return data[0];
};

/**
 * TODOの完了状態を切り替え
 * @param {string} todoId - TODO ID
 * @param {boolean} completed - 完了状態（true=完了、false=未完了）
 * @returns {Promise<Object>} 更新されたTODOデータ
 */
export const toggleTodoComplete = async (todoId, completed) => {
  const { data, error } = await supabase
    .from("todos")
    .update({
      completed: completed,
      updated_at: new Date(),
    })
    .eq("id", todoId)
    .select();

  if (error) {
    console.error("TODOの完了状態の更新に失敗しました:", error);
    throw error;
  }

  return data[0];
};

// ========================
// DELETE操作：TODOを削除
// ========================

/**
 * TODOを削除
 * @param {string} todoId - TODO ID
 * @returns {Promise<void>}
 */
export const deleteTodo = async todoId => {
  const { error } = await supabase.from("todos").delete().eq("id", todoId);

  if (error) {
    console.error("TODOの削除に失敗しました:", error);
    throw error;
  }
};

/**
 * 複数のTODOを一括削除
 * @param {Array<string>} todoIds - 削除するTODO IDの配列
 * @returns {Promise<void>}
 */
export const deleteMultipleTodos = async todoIds => {
  const { error } = await supabase.from("todos").delete().in("id", todoIds); // IN句で複数条件

  if (error) {
    console.error("TODOの削除に失敗しました:", error);
    throw error;
  }
};

// ========================
// ユーティリティ関数
// ========================

/**
 * 完了済みと未完了の統計を取得
 * @param {Array} todos - TODOデータの配列
 * @returns {Object} 統計データ
 */
export const getTodoStats = todos => {
  const completed = todos.filter(t => t.completed).length;
  const total = todos.length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return {
    completed,
    total,
    percentage,
  };
};

/**
 * エラーメッセージを人間が読める形に変換
 * @param {Error} error - エラーオブジェクト
 * @returns {string} エラーメッセージ
 */
export const getErrorMessage = error => {
  if (error.message.includes("JWT")) {
    return "セッションが期限切れです。再度ログインしてください。";
  }
  if (error.message.includes("PGRST")) {
    return "データベースエラーが発生しました。";
  }
  return error.message || "予期しないエラーが発生しました。";
};
