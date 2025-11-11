import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-2xl px-8 py-16">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-zinc-900 dark:text-zinc-50">
            Step10: フォーム入力
          </h1>

          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
            各ページへ移動してフォーム入力の様々なパターンを学習できます
          </p>

          <div className="grid gap-4">
            <Link
              href="/01_normal_input"
              className="flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                01. 基本的な制御コンポーネント
              </span>
              <span className="text-zinc-400 dark:text-zinc-500">→</span>
            </Link>

            <Link
              href="/02_various_inputs"
              className="flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                02. 様々な入力タイプ
              </span>
              <span className="text-zinc-400 dark:text-zinc-500">→</span>
            </Link>

            <Link
              href="/03_user_input_classification"
              className="flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                03. ユーザー入力の分類
              </span>
              <span className="text-zinc-400 dark:text-zinc-500">→</span>
            </Link>

            <Link
              href="/04_validation"
              className="flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                04. バリデーション
              </span>
              <span className="text-zinc-400 dark:text-zinc-500">→</span>
            </Link>

            <Link
              href="/05_contact_form"
              className="flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                05. お問い合わせフォーム
              </span>
              <span className="text-zinc-400 dark:text-zinc-500">→</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
