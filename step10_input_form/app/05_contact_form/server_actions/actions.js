// サーバーアクション
"use server";

import { supabase } from "@/lib/supabase";

// シンプルなバリデーション関数群
const validateData = data => {
  const errors = {};

  // 名前のバリデーション
  if (!data.name || !data.name.trim()) {
    errors.name = "名前は必須です";
  } else if (data.name.length < 2) {
    errors.name = "名前は2文字以上で入力してください";
  } else if (data.name.length > 100) {
    errors.name = "名前は100文字以内で入力してください";
  }

  // メールアドレスのバリデーション
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !data.email.trim()) {
    errors.email = "メールアドレスは必須です";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "有効なメールアドレスではありません";
  }

  // メッセージのバリデーション
  if (!data.message || !data.message.trim()) {
    errors.message = "メッセージは必須です";
  } else if (data.message.length < 10) {
    errors.message = "メッセージは10文字以上必要です";
  } else if (data.message.length > 1000) {
    errors.message = "メッセージは1000文字以内で入力してください";
  }

  return errors;
};

export async function submitContactForm(data) {
  try {
    // バリデーション実行
    const errors = validateData(data);

    // バリデーション失敗時
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors: errors,
      };
    }

    // バリデーション成功時
    console.log("保存するデータ:", data);

    // Supabaseデータベースに保存
    const { data: insertedData, error } = await supabase
      .from("contacts")
      .insert([
        {
          name: data.name.trim(),
          email: data.email.trim(),
          message: data.message.trim(),
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    // データベース保存エラー時
    if (error) {
      console.error("Supabaseエラー:", error);
      return {
        success: false,
        error: `データベースへの保存に失敗しました: ${error.message}`,
      };
    }

    console.log("データベースに保存されました:", insertedData);

    return {
      success: true,
      message: "お問い合わせを受け付けました。ありがとうございます。",
      data: insertedData,
    };
  } catch (err) {
    console.error("予期しないエラー:", err);
    return {
      success: false,
      error: "サーバーエラーが発生しました",
    };
  }
}
