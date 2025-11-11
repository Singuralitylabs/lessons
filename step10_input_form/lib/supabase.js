import { createClient } from "@supabase/supabase-js";

// 環境変数からSupabaseの設定を取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 環境変数のバリデーション
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabaseの環境変数が設定されていません。.env.localファイルを確認してください。"
  );
}

// Supabaseクライアントの作成
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
