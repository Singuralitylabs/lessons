import { createClient } from "@supabase/supabase-js";

// Supabaseクライアントの初期化
// 環境変数から認証情報を取得
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
