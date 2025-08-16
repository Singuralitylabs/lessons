import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl m-4">Next.jsへようこそ</h1>
      <p>これが私の最初のNext.jsアプリです。</p>
      <nav className="nav m-4">
        <Link href="/about" className="ml-4 bg-gray-700 text-white p-2 rounded m-4">
          私たちについて
        </Link>
        <Link href="/blog" className="ml-4 bg-gray-700 text-white p-2 rounded m-4">
          ブログページ
        </Link>
      </nav>
    </main>
  );
}
