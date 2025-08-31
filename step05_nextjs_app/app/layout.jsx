import "./globals.css";

export const metadata = {
  title: "シンラボ - Next.js アプリケーション",
  description: "Next.js アプリケーションのルートレイアウト",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}
