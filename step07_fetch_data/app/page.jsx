import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl m-4 flex justify-center">データFetch APIの紹介</h1>
      <p className="text-xl flex justify-center">データをFetch手法について紹介します。</p>
      <nav className="nav m-4 flex justify-center">
        <Link href="/posts" className="ml-4 bg-gray-700 text-white p-2 rounded m-4">
          投稿一覧
        </Link>
        <Link href="/users" className="ml-4 bg-gray-700 text-white p-2 rounded m-4">
          ユーザー一覧
        </Link>
        <Link href="/photos" className="ml-4 bg-gray-700 text-white p-2 rounded m-4">
          写真一覧
        </Link>
      </nav>
    </main>
  );
}
