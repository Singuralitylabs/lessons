import Link from "next/link";

export default function Blog() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl m-4">ブログ紹介</h1>
      <p>ブログ内容</p>
      <nav className="nav">
        <div className="bg-indigo-300 p-2 rounded m-4">
          <Link href="/blog/1">ブログ記事 1</Link>
        </div>
        <div className="bg-indigo-300 p-2 rounded m-4">
          <Link href="/blog/2">ブログ記事 2</Link>
        </div>
        <div className="bg-indigo-300 p-2 rounded m-4">
          <Link href="/blog/3">ブログ記事 3</Link>
        </div>
      </nav>
      <nav className="nav m-4">
        <Link href="/" className="ml-4 bg-gray-700 text-white p-2 rounded m-4">
          トップページへ
        </Link>
      </nav>
    </main>
  );
}
