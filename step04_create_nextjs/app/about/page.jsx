import Link from "next/link";

export default function About() {
  return (
    <main>
      <h1 className="text-2xl m-4">私たちについて</h1>
      <p>このサイトは学習目的で作成されました。</p>
      <nav className="nav m-4">
        <Link href="/" className="ml-4 bg-gray-700 text-white p-2 rounded m-4">
          トップページへ
        </Link>
      </nav>
    </main>
  );
}
