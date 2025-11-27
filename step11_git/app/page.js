export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg mb-6">
            <svg
              className="w-16 h-16 text-gray-800 dark:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-blue-900 dark:text-white mb-4">
            Git/GitHub 基本操作
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            バージョン管理の基礎からGitHubでの共同開発まで
          </p>
        </header>

        {/* Introduction Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🎯 Gitとは？</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Gitは分散型バージョン管理システムで、ソースコードの変更履歴を記録し、複数人での開発を効率的に行うためのツールです。
            GitHubはGitリポジトリをクラウド上でホスティングし、コラボレーション機能を提供するプラットフォームです。
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-800 dark:text-blue-200 font-semibold">💡 重要なポイント</p>
            <p className="text-blue-700 dark:text-blue-300 mt-2">
              Gitはローカルで動作し、GitHubはオンラインでの共有とコラボレーションを可能にします。
            </p>
          </div>
        </section>

        {/* Basic Commands Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            📝 基本的なGitコマンド
          </h2>

          <div className="space-y-6">
            {/* git init */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                1. リポジトリの初期化
              </h3>
              <code className="block bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
                git init
              </code>
              <p className="text-gray-700 dark:text-gray-300">
                新しいGitリポジトリを作成します。プロジェクトのルートディレクトリで実行します。
              </p>
            </div>

            {/* git clone */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                2. リポジトリのクローン
              </h3>
              <code className="block bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
                git clone https://github.com/username/repository.git
              </code>
              <p className="text-gray-700 dark:text-gray-300">
                既存のリモートリポジトリをローカルにコピーします。
              </p>
            </div>

            {/* git status */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                3. 状態の確認
              </h3>
              <code className="block bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
                git status
              </code>
              <p className="text-gray-700 dark:text-gray-300">
                変更されたファイルや、ステージングエリアの状態を確認します。
              </p>
            </div>

            {/* git add */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                4. ステージングエリアに追加
              </h3>
              <code className="block bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
                git add filename.txt
                <br />
                git add . # すべての変更をステージング
              </code>
              <p className="text-gray-700 dark:text-gray-300">
                変更したファイルをコミット対象として登録します。
              </p>
            </div>

            {/* git commit */}
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                5. コミット
              </h3>
              <code className="block bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
                git commit -m &quot;コミットメッセージ&quot;
              </code>
              <p className="text-gray-700 dark:text-gray-300">
                ステージングエリアの変更を記録します。意味のあるメッセージを付けましょう。
              </p>
            </div>

            {/* git push */}
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                6. リモートリポジトリへプッシュ
              </h3>
              <code className="block bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
                git push origin main
              </code>
              <p className="text-gray-700 dark:text-gray-300">
                ローカルの変更をリモートリポジトリに送信します。
              </p>
            </div>

            {/* git pull */}
            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                7. リモートリポジトリから取得
              </h3>
              <code className="block bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
                git pull origin main
              </code>
              <p className="text-gray-700 dark:text-gray-300">
                リモートリポジトリの最新の変更をローカルに取り込みます。
              </p>
            </div>
          </div>
        </section>

        {/* Branch Operations */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🌿 ブランチ操作</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                ブランチの作成と切り替え
              </h3>
              <code className="block bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
                git branch feature-branch # ブランチ作成
                <br />
                git checkout feature-branch # ブランチ切り替え
                <br />
                git checkout -b new-feature # 作成と切り替えを同時に
              </code>
              <p className="text-gray-700 dark:text-gray-300">
                ブランチを使うことで、メインの開発ラインに影響を与えずに新機能を開発できます。
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                ブランチのマージ
              </h3>
              <code className="block bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
                git checkout main
                <br />
                git merge feature-branch
              </code>
              <p className="text-gray-700 dark:text-gray-300">
                開発したブランチの変更をメインブランチに統合します。
              </p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                ブランチの確認と削除
              </h3>
              <code className="block bg-gray-900 text-green-400 p-4 rounded-lg mb-2 overflow-x-auto">
                git branch # ローカルブランチ一覧
                <br />
                git branch -d feature-branch # ブランチ削除
              </code>
            </div>
          </div>
        </section>

        {/* GitHub Workflow */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🔄 GitHubでの開発フロー
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  リポジトリをFork
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  他人のリポジトリを自分のアカウントにコピーして、自由に変更できるようにします。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  ローカルにクローン
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Forkしたリポジトリをローカル環境にダウンロードします。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  ブランチを作成
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  新機能や修正用の作業ブランチを作成します。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  変更をコミット
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  コードの変更を小さな単位でコミットしていきます。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                5
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  プルリクエスト作成
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  変更を元のリポジトリに取り込んでもらうようリクエストします。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                6
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  コードレビュー
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  レビュアーからのフィードバックに対応し、必要に応じて修正します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ✨ ベストプラクティス
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                <span>✅</span> 推奨される行動
              </h3>
              <ul className="space-y-2 text-green-700 dark:text-green-300">
                <li>• 意味のあるコミットメッセージを書く</li>
                <li>• 小さく頻繁にコミットする</li>
                <li>• プッシュ前にgit pullで最新化</li>
                <li>• ブランチ名は目的が分かる名前に</li>
                <li>• .gitignoreで不要ファイルを除外</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                <span>❌</span> 避けるべき行動
              </h3>
              <ul className="space-y-2 text-red-700 dark:text-red-300">
                <li>• mainブランチに直接コミット</li>
                <li>• 大量の変更を1つのコミットに</li>
                <li>• 意味不明なコミットメッセージ</li>
                <li>• パスワードや秘密鍵をコミット</li>
                <li>• force pushで他人の作業を上書き</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Useful Resources */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">📚 参考リソース</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://docs.github.com/ja"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-2xl">📖</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  GitHub公式ドキュメント
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  日本語の詳細なドキュメント
                </p>
              </div>
            </a>

            <a
              href="https://git-scm.com/book/ja/v2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-2xl">📗</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Pro Git Book</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gitの完全ガイド（無料）</p>
              </div>
            </a>

            <a
              href="https://learngitbranching.js.org/?locale=ja"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-2xl">🎮</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Learn Git Branching</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  インタラクティブな学習ゲーム
                </p>
              </div>
            </a>

            <a
              href="https://github.com/github/gitignore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-2xl">📝</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  .gitignore テンプレート
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  様々な言語・フレームワーク用
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">Step 11: Git操作の基本 - Team Lessons</p>
          <p className="text-sm">このページで学んだコマンドを実際に試してみましょう！</p>
        </footer>
      </div>
    </div>
  );
}
