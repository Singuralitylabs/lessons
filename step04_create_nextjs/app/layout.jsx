import "./globals.css";

export const metadata = {
  title: "シンラボ - Next.js アプリケーション",
  description: "Next.js アプリケーションのルートレイアウト",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <nav>ヘッダー情報</nav>
        </header>
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
          {children}
        </main>
        <footer className="bg-gray-300 p-4">フッター情報</footer>
      </body>
    </html>
  );
}
